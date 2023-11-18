import { Injectable } from '@nestjs/common'
import { GetArticleResult } from 'src/response.interface'
import { GetArticleArgs, IArticleService } from './article.service.interface'
import { IArticleRepository } from 'src/repositories/article/article.repository.interface'

@Injectable()
export class ArticleService implements IArticleService {
  constructor(private readonly articleRepository: IArticleRepository) {}

  async get({ id }: GetArticleArgs): Promise<GetArticleResult> {
    const {
      id: articleId,
      title,
      imgUrl,
      content: { contentId, content },
    } = await this.articleRepository.findOrThrow({ id })

    return {
      id: articleId,
      title,
      imgUrl,
      content: {
        id: contentId,
        content,
      },
    }
  }
}
