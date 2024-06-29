import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bycrypt from 'bcrypt';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(private ds: DataSource) {
    super(Users, ds.createEntityManager());
  }

  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const salt = await bycrypt.genSalt();
    const hashedPassword = await bycrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      console.error(error);
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialDto;
    const user = await this.findOne({ where: { username } });

    if (user && (await bycrypt.compare(password, user.password))) {
      return 'success';
    } else {
      return 'Invalid credentials';
    }
  }
}
