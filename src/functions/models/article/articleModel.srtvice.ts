import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

// type Article = {
//   id: string;
//   title: Text;
//   summary: Text;
//   thumbnail?: Image;
//   status: ArticleStatus;
//   createAt: Date;
//   updateAt: Date;
// };

@Injectable()
export class ArticleModelService {
  getArticleHeadingList(): string {
    // const res =
    return 'helloooowowowowo';
  }
}
