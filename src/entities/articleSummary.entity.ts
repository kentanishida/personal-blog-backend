import { ValidationError } from 'src/errors/errors';
import { ValidateService } from 'src/entities/validation';

export class ArticleSummaryEntity {
  readonly id: string;
  readonly articleId: string;
  readonly title: string;
  readonly imgUrl: string;
  readonly summary: string;
  readonly createAt: Date;
  readonly updateAt: Date;

  private constructor({
    id,
    articleId,
    title,
    imgUrl,
    summary,
    createAt,
    updateAt,
  }: {
    id: string;
    articleId: string;
    title: string;
    imgUrl: string;
    summary: string;
    createAt: Date;
    updateAt: Date;
  }) {
    this.id = id;
    this.articleId = articleId;
    this.title = title;
    this.imgUrl = imgUrl;
    this.summary = summary;
    this.createAt = createAt;
    this.updateAt = updateAt;
  }

  static build({
    id,
    articleId,
    title,
    imgUrl,
    summary,
    createAt,
    updateAt,
  }: {
    id: string;
    articleId: string;
    title: string;
    imgUrl: string;
    summary: string;
    createAt: Date;
    updateAt: Date;
  }) {
    ArticleSummaryEntity.validateProps({
      id,
      articleId,
      imgUrl,
    });

    return new ArticleSummaryEntity({
      id,
      articleId,
      title,
      imgUrl,
      summary,
      createAt,
      updateAt,
    });
  }

  private static validateProps({
    id,
    articleId,
    imgUrl,
  }: {
    id: string;
    articleId: string;
    imgUrl: string;
  }) {
    const errors: Error[] = [];
    const validate = new ValidateService();

    const uuids = { id, articleId };
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
