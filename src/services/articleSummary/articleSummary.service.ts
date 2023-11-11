import { Injectable } from '@nestjs/common';
import { IArticleSummaryRepository } from 'src/repositories/articleSummary/articleSummary.repository.interface';
import { ArticleSummaryResult } from 'src/response.interface';

@Injectable()
export class ArticleSummaryService {
  constructor(
    private readonly articleSummaryRepository: IArticleSummaryRepository,
  ) {}

  async exec(): Promise<ArticleSummaryResult[]> {
    const builtArticles = await this.articleSummaryRepository.findAll();

    const response: ArticleSummaryResult[] = builtArticles.map(
      (builtArticle) => ({
        id: builtArticle.id,
        articleId: builtArticle.articleId,
        title: builtArticle.title,
        imgUrl: builtArticle.imgUrl,
        summary: builtArticle.summary,
        createAt: builtArticle.createAt,
        updateAt: builtArticle.updateAt,
      }),
    );

    return response;
  }
}
