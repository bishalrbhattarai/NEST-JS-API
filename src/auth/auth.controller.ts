import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signUp(@Body() signUpDto: Prisma.UserCreateInput) {
        return this.authService.signUp(signUpDto);
    }

    @Post('signin')
    signIn() {
        return this.authService.signIn();
    }


}
