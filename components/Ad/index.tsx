import { url } from "node:inspector";
import React from "react";
interface Props {
  url: string;
  imageUrl: string;
  square?: boolean;
}
const Ad: React.FC<Props> = ({ url, imageUrl, square }) => {
  return (
    <a
      className={`digital-ad ${square ? "digital-ad-square" : ""}`}
      href={url ? url : "#"}
      target="_blank"
      rel="noopener"
      style={{ background: `url(${imageUrl})` }}
    ></a>
  );
};
export default Ad;
