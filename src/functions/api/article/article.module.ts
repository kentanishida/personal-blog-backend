import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { GetArticleHeadingListService } from './getArticleHeadingList.service';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [GetArticleHeadingListService],
})
export class ArticleModule {}
