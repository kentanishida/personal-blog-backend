import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
  ],
})
export class AppModule {}
