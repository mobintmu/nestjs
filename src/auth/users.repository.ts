import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(private ds: DataSource) {
    super(Users, ds.createEntityManager());
  }
}
