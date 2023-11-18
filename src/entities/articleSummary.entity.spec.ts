import { ArticleSummaryEntity } from './articleSummary.entity';
import { ValidateService } from './validation';

describe('ArticleSummaryEntity', () => {
  describe('build', () => {
    it('should create an ArticleSummaryEntity successfully with valid input', () => {
      const validInput = {
        id: '123e4567-e89b-12d3-a456-426655440000',
        articleId: '123e4567-e89b-12d3-a456-426655440001',
        title: 'Test Article',
        imgUrl: 'https://example.com/image.jpg',
        summary: 'Test Summary',
        createAt: new Date(),
        updateAt: new Date(),
      };

      const mockIsUuid = jest.fn();
      ValidateService.prototype.isUuid = mockIsUuid;
      mockIsUuid.mockReturnValue([]);

      const articleSummaryEntity = ArticleSummaryEntity.build(validInput);

      expect(articleSummaryEntity).toBeDefined();
      expect(articleSummaryEntity.id).toBe(validInput.id);
      expect(articleSummaryEntity.articleId).toBe(validInput.articleId);
    });

    it('should throw ValidationError if imgUrl is invalid', () => {
      const invalidInput = {
        id: '123e4567-e89b-12d3-a456-426655440000',
        articleId: '123e4567-e89b-12d3-a456-426655440001',
        title: 'Test Article',
        imgUrl: 'invalid-url',
        summary: 'Test Summary',
        createAt: new Date(),
        updateAt: new Date(),
      };

      const mockIsUuid = jest.fn();
      ValidateService.prototype.isUuid = mockIsUuid;
      mockIsUuid.mockReturnValue([]);

      expect(() => ArticleSummaryEntity.build(invalidInput)).toThrowError();
    });
  });
});
