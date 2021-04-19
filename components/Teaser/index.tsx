import React from "react";
import { Article } from "utils/types";
import Link from "next/link";
interface Props {
  article: Article;
  large: boolean;
}
//TODO: Fix dates.
const Teaser: React.FC<Props> = ({ article, large }) => {
    const date = new Date(article.posted);
  return (
    <figure className={`teaser ${large ? "teaser-lg" : ""}`}>
      <Link href={`/teasers/${article.title.toLowerCase().replace(/ /g, "-")}`}>
          <img src={article.image ? article.image.url : "#"} alt={article.title} />
      </Link>
      <div>
        <h2>{article.title}</h2>
        <p>{date.toLocaleString()}</p>
        <div className="teaser-categories">
          {article.categories.map(category => {
            return (
              <span className="teaser-category" data-category={category}>
                {category}
              </span>
            );
          })}
        </div>
      </div>
    </figure>
  );
};

export default Teaser;
