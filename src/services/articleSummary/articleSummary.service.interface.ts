import { ArticleSummaryResult } from 'src/response.interface';

export abstract class IArticleSummaryService {
  abstract exec(): Promise<ArticleSummaryResult[]>;
}
