import { Injectable } from '@nestjs/common';
import { Task } from './'

@Injectable()
export class TasksService {
  private tasks: Task = [];

  getAllTasks() {
    return this.tasks;
  }
}
