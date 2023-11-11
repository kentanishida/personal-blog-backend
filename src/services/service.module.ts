import { Module } from '@nestjs/common';
import { ArticleSummaryService } from './articleSummary/articleSummary.service';
import { IArticleSummaryService } from './articleSummary/articleSummary.service.interface';
import { RepositoryModule } from 'src/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [
    {
      provide: IArticleSummaryService,
      useClass: ArticleSummaryService,
    },
  ],
  exports: [IArticleSummaryService],
})
export class ServiceModule {}
