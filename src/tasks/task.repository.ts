import { DataSource, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks } from './task.entity';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskRepository extends Repository<Tasks> {
  constructor(private ds: DataSource) {
    super(Tasks, ds.createEntityManager());
  }

  public async getTaskById(id: string): Promise<Tasks> {
    const found = await this.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }

  public async createTask(createTaskDto: CreateTaskDto): Promise<Tasks> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
