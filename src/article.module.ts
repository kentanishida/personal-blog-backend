import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ArticleController } from './article.controller';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [ServiceModule],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
  ],
  controllers: [ArticleController],
})
export class ArticleModule {}
