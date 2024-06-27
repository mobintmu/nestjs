import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.getTaskById(id);
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.taskRepository.createTask(createTaskDto);
    return task;
  }
}
