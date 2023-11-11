import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ArticleModule } from './article.module';

@Module({
  imports: [ArticleModule],
  providers: [
    {
      provide: PrismaClient,
      useValue: new PrismaClient(),
    },
  ],
})
export class AppModule {}
