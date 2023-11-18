import { GetArticleSummaryListResult } from 'src/response.interface';

export abstract class IArticleSummaryListService {
  abstract get(): Promise<GetArticleSummaryListResult>;
}
