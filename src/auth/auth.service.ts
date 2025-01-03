import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto } from './dto/signup.dto';
import { SigninDTO } from './dto/signin.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly primsa: PrismaService, private readonly jwt: JwtService) { }

    async signToken(id: number, email: string) {
        const payload = { email, sub: id }
        return this.jwt.sign(payload);
    }

    async signUp(signUpDTO: SignUpDto) {
        const hashedPassword = await argon2.hash(signUpDTO.password);
        const createdUser = await this.primsa.user.create({
            data: { ...signUpDTO, password: hashedPassword }
        });
        delete createdUser.password;
        return createdUser
    }

    async signIn(signInDTO: SigninDTO) {
        const { email, password } = signInDTO;
        const foundUser = await this.primsa.user.findUnique({
            where: {
                email
            }
        })
        if (!foundUser) throw new UnauthorizedException('Invalid Credentials');
        const isPasswordValid = await argon2.verify(foundUser.password, password);
        if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');
        delete foundUser.password;
        return foundUser;
    }
}
