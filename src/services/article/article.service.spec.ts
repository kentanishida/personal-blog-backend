import { Test, TestingModule } from '@nestjs/testing'
import { ArticleService } from './article.service'
import { IArticleRepository } from 'src/repositories/article/article.repository.interface'
import { RepositoryModule } from 'src/repositories/repository.module'
import { ArticleEntity } from 'src/entities/article.entity' // 必要に応じて適切なパスを設定してください
import { ArticleRepository } from 'src/repositories/article/article.repository'
import { ArticleStatus } from '@prisma/client'

describe('ArticleService', () => {
  let service: ArticleService
  let articleRepository: ArticleRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoryModule],
      providers: [ArticleService],
    }).compile()

    service = module.get<ArticleService>(ArticleService)
    articleRepository = module.get<ArticleRepository>(IArticleRepository)
  })

  it('should return a complete article for a given id', async () => {
    const expectedArticle = {
      id: '00000000-0000-4000-8000-000000000000',
      title: 'Example Title',
      imgUrl: 'http://example.com/image.jpg',
      status: ArticleStatus.PUBLIC,
      createAt: new Date('2023-01-01T00:00:00.000Z'),
      updateAt: new Date('2023-01-02T00:00:00.000Z'),
      content: {
        contentId: '00000000-0000-4000-8000-000000000001',
        content: 'Example Content',
        contentCreateAt: new Date('2023-01-01T00:00:00.000Z'),
        contentUpdateAt: new Date('2023-01-02T00:00:00.000Z'),
      },
    }

    jest
      .spyOn(articleRepository, 'findOrThrow')
      .mockImplementation(
        async () => await ArticleEntity.build(expectedArticle),
      )

    const article = await service.get({ id: expectedArticle.id })

    expect(article).toBeDefined()
    expect(article.id).toEqual(expectedArticle.id)
    expect(article.title).toEqual(expectedArticle.title)
    expect(article.imgUrl).toEqual(expectedArticle.imgUrl)
    expect(article.content.id).toEqual(expectedArticle.content.contentId)
    expect(article.content.content).toEqual(expectedArticle.content.content)
  })

  it('should throw an error for a given id', async () => {
    const id = 'test-id'
    jest
      .spyOn(articleRepository, 'findOrThrow')
      .mockImplementation(async () => {
        throw new Error('Article not found')
      })

    await expect(service.get({ id })).rejects.toThrow('Article not found')
  })
})
