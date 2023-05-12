import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class DatabaseService extends PrismaClient {
  async onOnModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onOnModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      await app.close()
    })
  }
}
