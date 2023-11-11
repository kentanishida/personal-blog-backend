import { Controller, Get } from '@nestjs/common';
import { ArticleSummaryResult } from './response.interface';
import { ArticleSummaryService } from './services/articleSummary/articleSummary.service';

@Controller('personal/v1/articles')
export class ArticleController {
  constructor(private articleSummaryService: ArticleSummaryService) {}

  @Get()
  async getArticleSummaryList(): Promise<ArticleSummaryResult[]> {
    return await this.articleSummaryService.exec();
  }
}
