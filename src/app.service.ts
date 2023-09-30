import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}
  async getHello(): Promise<string> {
    const res = await this.prisma.user.findMany();
    console.log('res', res);
    return res[0].email ?? 'hello';
  }
}
