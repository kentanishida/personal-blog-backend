import { Controller, Get, Param } from '@nestjs/common';
import { IArticleSummaryListService } from './services/articleSummary/articleSummaryList.service.interface';
import {
  GetArticleResult,
  GetArticleSummaryListResult,
} from './response.interface';
import { IArticleService } from './services/article/article.service.interface';

@Controller('personal/v1')
export class ArticleController {
  constructor(
    private articleSummaryListService: IArticleSummaryListService,
    private articleService: IArticleService,
  ) {}

  @Get('/articles')
  async getArticleSummaryList(): Promise<GetArticleSummaryListResult> {
    return this.execServiceWrapper({
      asyncFunc: () => this.articleSummaryListService.get(),
    });
  }

  @Get('/articles/:articleId')
  async getArticle(
    @Param() params: { articleId: string },
  ): Promise<GetArticleResult> {
    return this.execServiceWrapper({
      asyncFunc: () => this.articleService.get({ id: params.articleId }),
      args: { id: params.articleId },
    });
  }

  private async execServiceWrapper<T, U>({
    asyncFunc,
    args,
  }: {
    asyncFunc: (args: T) => Promise<U>;
    args?: T;
  }): Promise<U> {
    try {
      return await asyncFunc(args);
    } catch (e) {
      throw e;
    }
  }
}
