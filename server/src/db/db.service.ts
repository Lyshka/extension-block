import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService extends PrismaClient {
    async OnModuleInit() {
        await this.$connect
    }
}
