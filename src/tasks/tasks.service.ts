import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task.status.enum';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id: id } });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
// [x: string]: any;
// private tasks: Task[] = [];
// getAllTasks(): Task[] {
//   return this.tasks;
// }
// getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
//   const { status, search } = filterDto;
//   let tasks = this.getAllTasks();
//   if (status) {
//     tasks = tasks.filter((task) => task.status === status);
//   }
//   if (search) {
//     tasks = tasks.filter((task) => {
//       if (task.title.includes(search) || task.description.includes(search)) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
//   return tasks;
// }
