import { ValidationError } from 'src/errors/errors';
import { ValidateService } from 'src/entities/validation';
import { ArticleStatus } from '@prisma/client';

export class ArticleEntity {
  readonly id: string;
  readonly title: string;
  readonly imgUrl: string;
  readonly createAt: Date;
  readonly updateAt: Date;
  readonly status: ArticleStatus;
  readonly content: {
    readonly contentId: string;
    readonly content: string;
    readonly contentCreateAt: Date;
    readonly contentUpdateAt: Date;
  };

  private constructor({
    id,
    title,
    imgUrl,
    createAt,
    updateAt,
    status,
    content: { contentId, content, contentCreateAt, contentUpdateAt },
  }: {
    id: string;
    title: string;
    imgUrl: string;
    status: ArticleStatus;
    createAt: Date;
    updateAt: Date;
    content: {
      contentId: string;
      content: string;
      contentCreateAt: Date;
      contentUpdateAt: Date;
    };
  }) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.status = status;
    this.createAt = createAt;
    this.updateAt = updateAt;
    this.content = {
      contentId,
      content,
      contentCreateAt,
      contentUpdateAt,
    };
  }

  static build({
    id,
    title,
    imgUrl,
    createAt,
    updateAt,
    status,
    content: { contentId, content, contentCreateAt, contentUpdateAt },
  }: {
    id: string;
    title: string;
    imgUrl: string;
    status: ArticleStatus;
    createAt: Date;
    updateAt: Date;
    content: {
      contentId: string;
      content: string;
      contentCreateAt: Date;
      contentUpdateAt: Date;
    };
  }) {
    ArticleEntity.validateProps({
      id,
      imgUrl,
      content: { contentId },
    });

    return new ArticleEntity({
      id,
      title,
      imgUrl,
      createAt,
      updateAt,
      status,
      content: { contentId, content, contentCreateAt, contentUpdateAt },
    });
  }

  private static validateProps({
    id,
    imgUrl,
    content: { contentId },
  }: {
    id: string;
    imgUrl: string;
    content: {
      contentId: string;
    };
  }) {
    const errors: Error[] = [];
    const validate = new ValidateService();

    const uuids = { id, contentId };
    validate.isUuid({ args: uuids, errors });

    const pattern = /^(http|https):\/\//;

    if (!imgUrl.match(pattern)) {
      errors.push(
        new ValidationError(
          `Invalid URL format at ${pattern} URL must start with http or https`,
        ),
      );
    }

    if (errors.length > 0) {
      throw errors;
    }
  }
}
