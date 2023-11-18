interface Article {
  id: string;
  title: string;
  imgUrl: string;
  content: {
    id: string;
    content: string;
  };
}

interface ArticleSummary {
  id: string;
  articleId: string;
  title: string;
  imgUrl: string;
  summary: string;
  createAt: Date;
  updateAt: Date;
}

export type GetArticleResult = Article;
export type GetArticleSummaryListResult = ArticleSummary[];
