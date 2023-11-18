import { Injectable } from '@nestjs/common';
import { ArticleEntity } from 'src/entities/article.entity';
import { IArticleRepository } from './article.repository.interface';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ArticleRepository implements IArticleRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findOrThrow({ id }: { id: string }): Promise<ArticleEntity> {
    const article = await this.prismaService.article.findUniqueOrThrow({
      where: { id },
      include: {
        content: true,
        articleSummary: true,
      },
    });
    return ArticleEntity.build({
      id: article.id,
      title: article.articleSummary.title,
      imgUrl: article.articleSummary.imgUrl,
      status: article.status,
      createAt: article.createAt,
      updateAt: article.updateAt,
      content: {
        contentId: article.content.id,
        content: article.content.content,
        contentCreateAt: article.content.createAt,
        contentUpdateAt: article.content.updateAt,
      },
    });
  }
}
