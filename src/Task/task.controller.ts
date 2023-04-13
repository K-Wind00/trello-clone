import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { createTask } from './dto/create-task.dto';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/all')
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTaskById(parseInt(id));
  }

  @Post()
  addTask(@Body() body: createTask) {
    return this.taskService.createNewTask(body.id, body.task);
  }
}
