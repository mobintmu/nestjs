import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 3002,
      username: 'user',
      password: 'pass',
      database: 'task',
      autoLoadEntities: true,
      // synchronize: true,
    }),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
