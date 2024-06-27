import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './task.entity';
import { TaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
})
export class TasksModule {}
