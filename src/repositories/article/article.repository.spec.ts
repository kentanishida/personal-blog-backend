import { PrismaService } from 'nestjs-prisma'
import { ArticleRepository } from './article.repository'
import { Test, TestingModule } from '@nestjs/testing'
import { ArticleEntity } from 'src/entities/article.entity'
import { ArticleStatus } from '@prisma/client'

describe('ArticleRepository', () => {
  let articleRepository: ArticleRepository
  let prismaService: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleRepository,
        {
          provide: PrismaService,
          useValue: {
            article: {
              findUniqueOrThrow: jest.fn().mockResolvedValue({
                id: 'valid-id',
              }),
            },
          },
        },
      ],
    }).compile()

    articleRepository = module.get<ArticleRepository>(ArticleRepository)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should return an ArticleEntity for a valid ID', async () => {
    // 有効なUUIDを使用
    const validArticleId = '123e4567-e89b-12d3-a456-426614174000'
    const validContentId = '123e4567-e89b-12d3-a456-426614174001'

    const mockArticleData = {
      id: validArticleId,
      articleSummary: {
        title: 'Test Title',
        imgUrl: 'https://example.com/test.jpg',
      },
      status: ArticleStatus.PUBLIC,
      createAt: new Date('2023-01-01T00:00:00.000Z'),
      updateAt: new Date('2023-01-02T00:00:00.000Z'),
      content: {
        id: validContentId,
        content: 'Test Content',
        createAt: new Date('2023-01-01T00:00:00.000Z'),
        updateAt: new Date('2023-01-02T00:00:00.000Z'),
      },
    }

    jest
      .spyOn(prismaService.article, 'findUniqueOrThrow')
      .mockResolvedValue(mockArticleData)

    const result = await articleRepository.findOrThrow({ id: validArticleId })

    // ArticleEntity のインスタンスプロパティの検証
    expect(result).toBeInstanceOf(ArticleEntity)
    expect(result.id).toEqual(validArticleId)
    expect(result.title).toEqual(mockArticleData.articleSummary.title)
    expect(result.imgUrl).toEqual(mockArticleData.articleSummary.imgUrl)
    expect(result.status).toEqual(mockArticleData.status)
    expect(result.createAt).toEqual(mockArticleData.createAt)
    expect(result.updateAt).toEqual(mockArticleData.updateAt)

    // ArticleEntity のコンテンツプロパティの検証
    expect(result.content).toBeDefined()
    expect(result.content.contentId).toEqual(validContentId)
    expect(result.content.content).toEqual(mockArticleData.content.content)
    expect(result.content.contentCreateAt).toEqual(
      mockArticleData.content.createAt,
    )
    expect(result.content.contentUpdateAt).toEqual(
      mockArticleData.content.updateAt,
    )
  })

  it('should throw an exception for an invalid ID', async () => {
    const invalidArticleId = 'invalid-id'

    jest
      .spyOn(prismaService.article, 'findUniqueOrThrow')
      .mockImplementation(() => {
        throw new Error('Not found')
      })

    await expect(
      articleRepository.findOrThrow({ id: invalidArticleId }),
    ).rejects.toThrowError('Not found')
  })
})
