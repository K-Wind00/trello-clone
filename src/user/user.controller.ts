import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/createUser.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUser) {
    return this.userService.createNewUser(createUserDto);
  }

  @Get('/all')
  async getUsers() {
    return this.userService.getAll();
  }
}
