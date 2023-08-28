import React from "react";
import { Article as ArticleType } from "../../common/types";

interface ArticleProps {
  article: ArticleType;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>Published on: {article.publishedAt}</p>
    </div>
  );
};

export default Article;
