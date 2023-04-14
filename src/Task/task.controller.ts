// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
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
    return this.taskService.createNewTask(body.task, body.description);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(+id);
  }
}
