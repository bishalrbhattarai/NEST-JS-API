import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { SigninDTO } from './dto/signin.dto';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';




@Injectable()
export class AuthService {

    constructor(private readonly primsa: PrismaService) { }

    async signUp(signUpDTO: SignUpDto) {
        const hashedPassword = await argon2.hash(signUpDTO.password);

        const createdUser = await this.primsa.user.create({
            data: {
                ...signUpDTO,
                password: hashedPassword
            }
        });
        delete createdUser.password;

        return createdUser


    }

    signIn(signInDTO: SigninDTO) {
        const { email, password } = signInDTO;
        const foundUser = this.primsa.user.findUnique({
            where: {
                email
            }
        })

        if (!foundUser) {
            throw new UnauthorizedException('Invalid credentials')
        }




    }
}
