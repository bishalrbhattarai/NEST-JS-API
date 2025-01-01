import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { SigninDTO } from './dto/signin.dto';

@Injectable()
export class AuthService {

    constructor(private readonly primsa: PrismaService) { }

    signUp(signUpDTO: SignUpDto) {

        return this.primsa.user.create({
            data: signUpDTO
        });

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
