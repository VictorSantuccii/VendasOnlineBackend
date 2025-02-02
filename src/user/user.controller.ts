import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';




@Controller('user')
export class UserController {
    constructor ( private readonly userService: UserService) {}


    @UsePipes(ValidationPipe)
    @Post()
    async createUser( @Body() createUser: CreateUserDto): Promise<UserEntity> {
        return this.userService.createUser(createUser)
    }

    @Get()
    async getAllUsers(): Promise<ReturnUserDto[]>{
        return (await this.userService.getAllUsers()).map((userEntity) => new ReturnUserDto(userEntity)) /* esse map servirá para pegar 
         o valor do array que puxa todos os users, e retornar as informações como um UserDto para cada um desses usuários */
    }

    @Get('/:userId')
    async getUserById( @Param('userId') userId: number): Promise<ReturnUserDto> {
        return new ReturnUserDto ( await this.userService.getUserByIdUsingRelations(userId) )
    }


    }




