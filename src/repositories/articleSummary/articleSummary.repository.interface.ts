import { ArticleSummaryEntity } from 'src/entities/articleSummary.entity';

export abstract class IArticleSummaryRepository {
  abstract findAll(): Promise<ArticleSummaryEntity[]>;
}
