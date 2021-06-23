import React from "react";
import { Article } from "utils/types";
import Link from "next/link";
interface Props {
  article: Article;
  large: boolean;
}
const Teaser: React.FC<Props> = ({ article, large }) => {
  const date = new Date(article.posted).toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <figure className={`teaser ${large ? "teaser-lg" : ""}`}>
      <Link href={`/teasers/${article.sys.id}`}>
        <img
          src={article.image ? article.image.url : "#"}
          alt={article.title}
        />
      </Link>
      <div>
        <h2>{article.title}</h2>
        <p>{date}</p>
      </div>
    </figure>
  );
};

export default Teaser;
