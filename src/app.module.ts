import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
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
