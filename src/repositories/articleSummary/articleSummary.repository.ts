import { Injectable } from '@nestjs/common'
import { ArticleSummaryEntity } from 'src/entities/articleSummary.entity'
import { IArticleSummaryRepository } from './articleSummary.repository.interface'
import { PrismaService } from 'nestjs-prisma'
import { buildEntities } from 'src/utils/utils'

@Injectable()
export class ArticleSummaryRepository implements IArticleSummaryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<ArticleSummaryEntity[]> {
    const articleSummaries = await this.prismaService.articleSummary.findMany()
    return buildEntities(articleSummaries, ArticleSummaryEntity.build)
  }
}
