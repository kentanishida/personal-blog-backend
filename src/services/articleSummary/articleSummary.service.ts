import { Injectable } from '@nestjs/common';
import { ArticleSummaryRepository } from 'src/repositories/articleSummary/articleSummary.repository';
import { ArticleSummaryResult } from 'src/response.interface';

@Injectable()
export class ArticleSummaryService {
  constructor(
    private readonly articleSummaryRepository: ArticleSummaryRepository,
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
