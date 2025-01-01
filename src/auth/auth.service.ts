import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private readonly primsa: PrismaService) { }

    signUp(signUp: Prisma.UserCreateInput) {
        return this.primsa.user.create({
            data: signUp
        });

    }

    signIn() {
        return 'Sign In!';
    }
}
