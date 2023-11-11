import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ServiceModule } from './services/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [ArticleController],
})
export class ArticleModule {}
