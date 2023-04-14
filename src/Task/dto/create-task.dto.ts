import { IsString } from 'class-validator';

export class createTask {
  @IsString()
  task: string;

  @IsString()
  description: string;
}
