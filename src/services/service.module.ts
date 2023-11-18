import { Module } from '@nestjs/common'
import { ArticleSummaryListService } from './articleSummary/articleSummaryList.service'
import { IArticleSummaryListService } from './articleSummary/articleSummaryList.service.interface'
import { RepositoryModule } from 'src/repositories/repository.module'
import { IArticleService } from './article/article.service.interface'
import { ArticleService } from './article/article.service'

@Module({
  imports: [RepositoryModule],
  providers: [
    {
      provide: IArticleSummaryListService,
      useClass: ArticleSummaryListService,
    },
    {
      provide: IArticleService,
      useClass: ArticleService,
    },
  ],
  exports: [IArticleSummaryListService, IArticleService],
})
export class ServiceModule {}
