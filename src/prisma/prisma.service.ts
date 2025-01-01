import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JsPromise } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit(): JsPromise<void> {
        await this.$connect();
    }

}
