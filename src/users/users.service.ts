import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({id});
  }

  async createOne(user: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(user)
    return this.usersRepository.save(newUser)
  }
  
  async removeOne(id: number) {
    return this.usersRepository.delete(id);
  }

  async updateOne(id: number, user: UpdateUserDto) {
    return this.usersRepository.update({id: id}, user);
  }
}
