import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: string, user: User): Promise<Task> {
    const task = await this.taskRepository.getTaskById(id, user);
    return task;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const task = this.taskRepository.createTask(createTaskDto, user);
    return task;
  }

  async deleteTask(id: string): Promise<void> {
    return await this.taskRepository.deleteTask(id);
  }

  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    return await this.taskRepository.updateTaskStatus(id, status, user);
  }

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterDto, user);
  }
}
