import { url } from "node:inspector";
import React from "react";
interface Props {
  url: string;
  imageUrl: string;
}
const Ad: React.FC<Props> = ({ url, imageUrl }) => {
  return (
    <a href={url ? url : "#"} style={{ background: `url(${imageUrl})` }}></a>
  );
};
export default Ad;
