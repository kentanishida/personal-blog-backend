import { ArticleEntity } from 'src/entities/article.entity'

export abstract class IArticleRepository {
  abstract findOrThrow({ id }: { id: string }): Promise<ArticleEntity>
}
