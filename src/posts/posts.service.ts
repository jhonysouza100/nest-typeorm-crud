import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-posts.dto';
import { UsersService } from 'src/users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Posts) private postsRepository: Repository<Posts>,
    private usersService: UsersService
  ) {}

  // title, content, authorId

  async createPost(post: CreatePostsDto) {
    const userFound = await this.usersService.findOne(post.authorId)

    if(!userFound) return new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND)

    const newPost = this.postsRepository.create(post)
    
    return this.postsRepository.save(newPost)

  }

  getPosts() {
    return this.postsRepository.find({
      relations: ['author']
    })
  }
}
