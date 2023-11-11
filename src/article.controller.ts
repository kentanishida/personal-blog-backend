import { Controller, Get } from '@nestjs/common';
import { ArticleSummaryResult } from './response.interface';
import { IArticleSummaryService } from './services/articleSummary/articleSummary.service.interface';

@Controller('personal/v1/articles')
export class ArticleController {
  constructor(private articleSummaryService: IArticleSummaryService) {}

  @Get()
  async getArticleSummaryList(): Promise<ArticleSummaryResult[]> {
    try {
      return await this.articleSummaryService.exec();
    } catch (e) {
      throw new Error(e);
    }
  }
}
