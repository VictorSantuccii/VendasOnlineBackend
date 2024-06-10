import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';


@Controller('user')
export class UserController {


    @Get() // teste da nossa api com nest para retornamos os dados do user em Get
    async getAllUsers(){
        return JSON.stringify({ test: 'abc '});
    }

    @Post()
    async createUser( @Body() createUser: CreateUserDto ) {
        return{
            ...createUser,
            password: undefined,
        } 
    }


    }




