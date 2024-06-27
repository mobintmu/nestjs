import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Tasks } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: string): Promise<Tasks> {
    const task = await this.taskRepository.getTaskById(id);
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Tasks> {
    const task = this.taskRepository.createTask(createTaskDto);
    return task;
  }

  async deleteTask(id: string): Promise<void> {
    return await this.taskRepository.deleteTask(id);
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Tasks> {
    return await this.taskRepository.updateTaskStatus(id, status);
  }
}
