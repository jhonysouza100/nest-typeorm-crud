import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/create-posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post('/')
  createPost(@Body() post: CreatePostsDto) {
    return this.postsService.createPost(post)
  }

  @Get('/')
  getPosts() {
    return this.postsService.getPosts()
  }
}
