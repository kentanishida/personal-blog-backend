import { GetArticleResult } from 'src/response.interface'

export interface GetArticleArgs {
  id: string
}

export abstract class IArticleService {
  abstract get({ id }: GetArticleArgs): Promise<GetArticleResult>
}
