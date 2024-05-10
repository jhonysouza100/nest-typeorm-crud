import { Controller, Post, Body, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create')
  createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createOne(newUser)
  }

  @Get('/getall')
  getAll() {
    return this.usersService.findAll()
  }

  @Get('/getone/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id)
  }

  @Delete('/delete/:id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeOne(id)
  }

  @Put('/update/:id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return this.usersService.updateOne(id, user)
  }
}
