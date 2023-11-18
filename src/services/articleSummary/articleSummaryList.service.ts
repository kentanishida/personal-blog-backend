import { Injectable } from '@nestjs/common';
import { IArticleSummaryRepository } from 'src/repositories/articleSummary/articleSummary.repository.interface';
import { GetArticleSummaryListResult } from 'src/response.interface';
import { IArticleSummaryListService } from './articleSummaryList.service.interface';

@Injectable()
export class ArticleSummaryListService implements IArticleSummaryListService {
  constructor(
    private readonly articleSummaryRepository: IArticleSummaryRepository,
  ) {}

  async get(): Promise<GetArticleSummaryListResult> {
    const builtArticleSummaries = await this.articleSummaryRepository.findAll();

    const response: GetArticleSummaryListResult = builtArticleSummaries.map(
      (builtArticleSummary) => ({
        id: builtArticleSummary.id,
        articleId: builtArticleSummary.articleId,
        title: builtArticleSummary.title,
        imgUrl: builtArticleSummary.imgUrl,
        summary: builtArticleSummary.summary,
        createAt: builtArticleSummary.createAt,
        updateAt: builtArticleSummary.updateAt,
      }),
    );

    return response;
  }
}
