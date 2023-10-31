import { Module } from '@nestjs/common';
import { ArticleModelService } from './article/articleModel.srtvice';

@Module({
  imports: [],
  providers: [ArticleModelService],
})
export class ModelsModule {}
