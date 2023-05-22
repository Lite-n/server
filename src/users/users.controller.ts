import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
const log = console.log

@Controller('api/users')
export class UsersController {
  constructor ( private usersService: UsersService ) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    log(user)
    return this.usersService.create(user)
  }
}