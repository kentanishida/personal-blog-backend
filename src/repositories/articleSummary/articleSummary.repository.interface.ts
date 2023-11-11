import { ArticleSummaryEntity } from 'src/entities/articleSummary';

export abstract class IArticleSummaryRepository {
  abstract findAll(): Promise<ArticleSummaryEntity[]>;
}
