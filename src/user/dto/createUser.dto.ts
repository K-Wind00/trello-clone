import { IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  email: string;

  @IsString()
  login: string;

  @IsString()
  password: string;
}
