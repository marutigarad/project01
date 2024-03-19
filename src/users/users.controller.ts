import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

constructor(private userService : UsersService){}


@Get("/home")
welcomfunction(@Req() request: Request){
    return this.userService.welcomfunction();
}

@Post()
@HttpCode(201)
createUser(@Req() request: Request){
    return this.userService.createUsers();
}
@Get()
@HttpCode(200)
getUsers(@Req() request: Request){

    return this.userService.getUsers();
}

}
