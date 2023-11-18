import { Module } from '@nestjs/common'
import { ArticleModule } from './article.module'

@Module({
  imports: [ArticleModule],
})
export class AppModule {}
