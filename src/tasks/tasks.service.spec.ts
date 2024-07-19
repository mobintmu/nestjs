import { Test } from '@nestjs/testing';
import { TaskRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockTaskRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
  getTaskById: jest.fn(),
  createTask: jest.fn(),
  delete: jest.fn(),
  updateTask: jest.fn(),
});

const mockUser = {
  id: 'someId',
  username: 'Test user',
  password: 'password',
  tasks: [],
  created_at: new Date(),
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository: TaskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useFactory: mockTaskRepository },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    taskRepository = module.get<TaskRepository>(TaskRepository);
  });

  describe('getTasks', () => {
    it('gets all tasks from the repository', async () => {
      expect(taskRepository.getTasks).not.toHaveBeenCalled();
      taskRepository.getTasks = jest.fn().mockResolvedValue('someValue');

      const result = await tasksService.getTasks(null, mockUser);
      expect(result).toEqual('someValue');
    });
  });

  describe('getTaskById', () => {
    const mockTask = {
      title: 'Test task',
      description: 'Test desc',
      id: 'someId',
      status: 'OPEN',
    };

    it('calls taskRepository.findOne() and successfully retrieve and return the task', async () => {
      taskRepository.getTaskById = jest.fn().mockResolvedValue(mockTask);

      const result = await tasksService.getTaskById('someId', mockUser);
      expect(result).toEqual(mockTask);
    });
  });
});
