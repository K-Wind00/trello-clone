import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task[]> {
    return await this.taskRepository.findBy({ id });
  }

  async createNewTask(task: string, description: string) {
    const newTask = this.taskRepository.create({ task, description });
    return this.taskRepository.save(newTask);
  }

  async deleteTask(id: number) {
    return await this.taskRepository.delete({ id });
  }
}
