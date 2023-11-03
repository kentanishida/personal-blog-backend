import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ModelsModule } from 'src/functions/models/models.Module';

@Module({
  imports: [ModelsModule],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
