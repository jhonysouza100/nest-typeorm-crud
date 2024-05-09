import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';

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

  async createOne(user: createUserDto) {
    const newUser = this.usersRepository.create(user)
    return await this.usersRepository.save(newUser)
  }

  async removeOne(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
