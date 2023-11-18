import { Module } from '@nestjs/common';
import { ArticleSummaryRepository } from './articleSummary/articleSummary.repository';
import { IArticleSummaryRepository } from './articleSummary/articleSummary.repository.interface';
import { PrismaModule } from 'nestjs-prisma';
import { IArticleRepository } from './article/article.repository.interface';
import { ArticleRepository } from './article/article.repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: IArticleSummaryRepository,
      useClass: ArticleSummaryRepository,
    },
    {
      provide: IArticleRepository,
      useClass: ArticleRepository,
    },
  ],
  exports: [IArticleSummaryRepository, IArticleRepository],
})
export class RepositoryModule {}
