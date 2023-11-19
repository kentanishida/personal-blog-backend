import { Test, TestingModule } from '@nestjs/testing'
import { ArticleSummaryListService } from './articleSummaryList.service'
import { IArticleSummaryRepository } from 'src/repositories/articleSummary/articleSummary.repository.interface'
import { RepositoryModule } from 'src/repositories/repository.module'
import { ArticleSummaryRepository } from 'src/repositories/articleSummary/articleSummary.repository'

describe('ArticleSummaryListService', () => {
  let service: ArticleSummaryListService
  let articleSummaryRepository: ArticleSummaryRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoryModule],
      providers: [ArticleSummaryListService],
    }).compile()

    service = module.get<ArticleSummaryListService>(ArticleSummaryListService)
    articleSummaryRepository = module.get<ArticleSummaryRepository>(
      IArticleSummaryRepository,
    )
  })

  it('should return a list of article summaries', async () => {
    const mockArticleSummaries = [
      {
        id: '123e4567-e89b-42d3-a456-426614174000',
        articleId: '123e4567-e89b-42d3-a456-426614174001',
        title: 'Test Article 1',
        imgUrl: 'https://example.com/image1.jpg',
        summary: 'Summary of Test Article 1',
        createAt: new Date('2023-01-01T00:00:00.000Z'),
        updateAt: new Date('2023-01-02T00:00:00.000Z'),
      },
      {
        id: '123e4567-e89b-42d3-a456-426614174002',
        articleId: '123e4567-e89b-42d3-a456-426614174003',
        title: 'Test Article 2',
        imgUrl: 'https://example.com/image2.jpg',
        summary: 'Summary of Test Article 2',
        createAt: new Date('2023-01-03T00:00:00.000Z'),
        updateAt: new Date('2023-01-04T00:00:00.000Z'),
      },
      {
        id: '123e4567-e89b-42d3-a456-426614174004',
        articleId: '123e4567-e89b-42d3-a456-426614174005',
        title: 'Test Article 3',
        imgUrl: 'https://example.com/image3.jpg',
        summary: 'Summary of Test Article 3',
        createAt: new Date('2023-01-05T00:00:00.000Z'),
        updateAt: new Date('2023-01-06T00:00:00.000Z'),
      },
      {
        id: '123e4567-e89b-42d3-a456-426614174006',
        articleId: '123e4567-e89b-42d3-a456-426614174007',
        title: 'Test Article 4',
        imgUrl: 'https://example.com/image4.jpg',
        summary: 'Summary of Test Article 4',
        createAt: new Date('2023-01-07T00:00:00.000Z'),
        updateAt: new Date('2023-01-08T00:00:00.000Z'),
      },
    ]

    jest
      .spyOn(articleSummaryRepository, 'findAll')
      .mockImplementation(async () => await mockArticleSummaries)

    const result = await service.get()
    expect(result).toEqual(mockArticleSummaries)
    expect(articleSummaryRepository.findAll).toHaveBeenCalled()
  })

  it('should throw an error when the repository fails', async () => {
    jest
      .spyOn(articleSummaryRepository, 'findAll')
      .mockImplementation(async () => {
        throw new Error('Repository failure')
      })

    await expect(service.get()).rejects.toThrow('Repository failure')
    expect(articleSummaryRepository.findAll).toHaveBeenCalled()
  })
})
