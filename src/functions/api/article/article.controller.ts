import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticleHeadingList(): string {
    return this.articleService.getArticleHeadingList();
  }
}
