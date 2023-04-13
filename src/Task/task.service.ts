import { Injectable } from '@nestjs/common';

const tasks = [
  { id: 1, task: 'Gym' },
  { id: 2, task: 'Programming' },
];

@Injectable()
export class TaskService {
  getTasks() {
    return tasks;
  }

  getTaskById(id: number) {
    return tasks.find((task) => task.id === id);
  }

  createNewTask(id: number, task: string) {
    const newTask = { id: id, task: task };
    tasks.push(newTask);
    return newTask;
  }
}
