import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  @Post('/create')
  createUser(@Body() newUser: createUserDto) {

  }
}
