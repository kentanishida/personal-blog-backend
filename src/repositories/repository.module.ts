import { Module } from '@nestjs/common';
import { ArticleSummaryRepository } from './articleSummary/articleSummary.repository';
import { IArticleSummaryRepository } from './articleSummary/articleSummary.repository.interface';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IArticleSummaryRepository,
      useClass: ArticleSummaryRepository,
    },
  ],
  exports: [IArticleSummaryRepository],
})
export class RepositoryModule {}
