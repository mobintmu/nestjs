import { Tasks } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Tasks, (tasks) => tasks.user, { eager: true })
  tasks: Tasks[];

  @Column()
  created_at: Date;
}
