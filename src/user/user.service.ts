/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUser } from './dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User> ) {}

  async createNewUser(createUser: CreateUser) {

    // To be implemented - validation for create user 

    const { email, login, password } = createUser;

    const isUserExists = await this.userRepository.find({ where: { login } });

    if (isUserExists.length > 0){
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    }
    const newUser = this.userRepository.create({ email, login, password });
    return this.userRepository.save(newUser);

  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
