import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    this.tasks.push({ id: 1, title: 'Task 1', description: 'Description 1' });
    return this.tasks;
  }
}
