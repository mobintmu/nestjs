import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 3001,
      username: 'user',
      password: 'pass',
      database: 'task',
      autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
})
export class AppModule {}
