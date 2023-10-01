import { Controller, Get } from '@nestjs/common';
import { GetArticleHeadingListService } from './getArticleHeadingList.service';

@Controller('article')
export class ArticleController {
  constructor(
    private getArticleHeadingListService: GetArticleHeadingListService,
  ) {}

  @Get()
  getArticleHeadingList(): string {
    return this.getArticleHeadingListService.exec();
  }
}
