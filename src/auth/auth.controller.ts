import { Controller, Get, Post, Redirect, Param } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Get()
    findAll(): string {
        debugger
        return this.authService.getHello();
    }

  
   
}
