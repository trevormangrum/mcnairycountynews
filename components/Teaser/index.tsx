import React from "react";
import { Article } from "utils/types";
interface Props {
  article: Article;
  large: boolean;
}
const Teaser: React.FC<Props> = ({ article, large }) => {
  return (
    <figure className={`teaser ${large ? "teaser-lg" : ""}`}>
      <img src={article.image.url} alt={article.title} />
      <div>
        <h2></h2>
        <div></div>
      </div>
    </figure>
  );
};
