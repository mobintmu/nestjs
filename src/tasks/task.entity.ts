import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks-status.enum';
import { Users } from 'src/auth/user.entity';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => Users, (user) => user.tasks, { eager: false })
  user: Users;

  @Column()
  created_at: Date;
}
