/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/createUser.dto';

const users = [];

@Injectable()
export class UserService {

  createNewUser(createUser: CreateUser) {

    const userExists = users.some(user => user.email === createUser.email)

    if(!userExists){
        const newUser = { ...createUser };
        users.push(newUser);
        return newUser;
    }


  }

  getAll(){
    return users;
  }
}
