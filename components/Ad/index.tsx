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
      className={`flex flex-col bg-[#eaeaea] w-full h-[200px]  ${
        square ? "h-[464px]" : ""
      }`}
      href={url ? url : "#"}
      target="_blank"
      rel="noopener"
      style={{
        background: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    ></a>
  );
};
export default Ad;
