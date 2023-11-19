import { Test, TestingModule } from '@nestjs/testing'
import { ArticleSummaryRepository } from './articleSummary.repository'
import { PrismaService } from 'nestjs-prisma'
import { ArticleSummaryEntity } from 'src/entities/articleSummary.entity'

describe('ArticleSummaryRepository', () => {
  let repository: ArticleSummaryRepository
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleSummaryRepository,
        {
          provide: PrismaService,
          useValue: {
            articleSummary: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile()

    repository = module.get<ArticleSummaryRepository>(ArticleSummaryRepository)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should return an array of ArticleSummaryEntity instances', async () => {
    const mockArticleSummaries = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        articleId: '123e4567-e89b-12d3-a456-426614174001',
        title: 'Test Title 1',
        imgUrl: 'https://example.com/image1.jpg',
        summary: 'Summary 1',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: '123e4567-e89b-12d3-a456-426614174002',
        articleId: '123e4567-e89b-12d3-a456-426614174003',
        title: 'Test Title 2',
        imgUrl: 'https://example.com/image2.jpg',
        summary: 'Summary 2',
        createAt: new Date(),
        updateAt: new Date(),
      },
    ]

    jest
      .spyOn(prismaService.articleSummary, 'findMany')
      .mockResolvedValue(mockArticleSummaries)

    const result = await repository.findAll()

    expect(result).toHaveLength(2)
    expect(result[0]).toBeInstanceOf(ArticleSummaryEntity)
    expect(result[1]).toBeInstanceOf(ArticleSummaryEntity)
    expect(result[0].id).toEqual('123e4567-e89b-12d3-a456-426614174000')
    expect(result[1].id).toEqual('123e4567-e89b-12d3-a456-426614174002')
  })

  it('should throw an error if the database query fails', async () => {
    jest
      .spyOn(prismaService.articleSummary, 'findMany')
      .mockImplementation(() => {
        throw new Error('Database query failed')
      })

    await expect(repository.findAll()).rejects.toThrow('Database query failed')
  })

  it('should throw an error if the database query fails', async () => {
    jest
      .spyOn(prismaService.articleSummary, 'findMany')
      .mockImplementation(() => {
        throw new Error('Database query failed')
      })

    await expect(repository.findAll()).rejects.toThrow('Database query failed')
  })
})
