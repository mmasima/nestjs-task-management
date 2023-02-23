import { Injectable } from '@nestjs/common';
import { Task}

@Injectable()
export class TasksService {
  private tasks: Task = [];

  getAllTasks() {
    return this.tasks;
  }
}
