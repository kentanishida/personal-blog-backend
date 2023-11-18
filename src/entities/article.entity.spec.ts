import { ArticleStatus } from '@prisma/client';
import { ArticleEntity } from './article.entity';
import { ValidationError } from 'src/errors/errors';

describe('ArticleEntity', () => {
  describe('build', () => {
    it('should create an ArticleEntity successfully with valid input', () => {
      const validInput = {
        id: '123e4567-e89b-12d3-a456-426655440000',
        title: 'Test Article',
        imgUrl: 'https://example.com/image.jpg',
        createAt: new Date(),
        updateAt: new Date(),
        status: ArticleStatus.PUBLIC,
        content: {
          contentId: '123e4567-e89b-12d3-a456-426655440001',
          content: 'Test Content',
          contentCreateAt: new Date(),
          contentUpdateAt: new Date(),
        },
      };
      const articleEntity = ArticleEntity.build(validInput);

      expect(articleEntity).toBeDefined();
      expect(articleEntity.id).toBe(validInput.id);
      expect(articleEntity.title).toBe(validInput.title);
      expect(articleEntity.imgUrl).toBe(validInput.imgUrl);
      expect(articleEntity.createAt).toEqual(validInput.createAt);
      expect(articleEntity.updateAt).toEqual(validInput.updateAt);
      expect(articleEntity.status).toBe(validInput.status);
      expect(articleEntity.content.contentId).toBe(
        validInput.content.contentId,
      );
      expect(articleEntity.content.content).toBe(validInput.content.content);
      expect(articleEntity.content.contentCreateAt).toEqual(
        validInput.content.contentCreateAt,
      );
      expect(articleEntity.content.contentUpdateAt).toEqual(
        validInput.content.contentUpdateAt,
      );
    });

    it('should throw ValidationError if imgUrl is invalid', () => {
      const invalidInput = {
        id: 'valid-uuid',
        title: 'Test Article',
        imgUrl: 'invalid-url',
        createAt: new Date(),
        updateAt: new Date(),
        status: ArticleStatus.PUBLIC,
        content: {
          contentId: 'valid-content-uuid',
          content: 'Test Content',
          contentCreateAt: new Date(),
          contentUpdateAt: new Date(),
        },
      };

      try {
        ArticleEntity.build(invalidInput);
        fail('Expected an error to be thrown');
      } catch (errors) {
        expect(Array.isArray(errors)).toBe(true);
        errors.forEach((error) => {
          expect(error).toBeInstanceOf(ValidationError);
        });
      }
    });
  });
});
