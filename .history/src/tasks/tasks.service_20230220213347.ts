import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 } from 'uuid';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: v,
      title,
      description,
      status: TaskStatus.OPEN,
    };
  }
}
