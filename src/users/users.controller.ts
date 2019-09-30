import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { UserEntity } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}
    @Get()
    async findAll(): Promise<Array<UserEntity>> {
        console.log("findAll");
        return await this.userService.getAll();   
    }
    
    @Get('/:id')
    findById(@Param('id') id): string {
        debugger
        console.log(id);
        return this.userService.getById(id);
    }

    @Post()
    async create(@Body() user: UserEntity): Promise<any> {        
        return await this.userService.add(user);  
    }
}
