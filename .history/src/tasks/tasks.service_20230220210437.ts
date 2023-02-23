import { Injectable } from '@nestjs/common';
import 

@Injectable()
export class TasksService {
  private tasks: Task = [];

  getAllTasks() {
    return this.tasks;
  }
}
