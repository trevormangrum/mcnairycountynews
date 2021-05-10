import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
interface Props {
  media: string;
}

const SocialMediaButton: React.FC<Props> = ({ media }) => {
  return (
    <div>
      {media === "fb" && (
        <a
          target="_blank"
          rel="noopener"
          href="https://www.facebook.com/mcnairycountynews"
          className="sm sm-fb"
        >
          <FaFacebook className="sm-icon" />
        </a>
      )}
      {media === "ig" && (
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/mcnairycountynews/"
          className="sm sm-ig"
        >
          <FaInstagram className="sm-icon" />
        </a>
      )}
    </div>
  );
};

export default SocialMediaButton;
