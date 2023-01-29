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
          className="w-full h-20 my-5 flex flex-col justify-center items-center mt-0 cursor-pointer
        bg-[#4267b2]"
        >
          <FaFacebook className="text-3xl text-white " />
        </a>
      )}
      {media === "ig" && (
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/mcnairycountynews/"
          className="w-full h-20 my-5 flex flex-col justify-center items-center mt-0 cursor-pointer bg-ig"
        >
          <FaInstagram className="text-3xl text-white" />
        </a>
      )}
    </div>
  );
};

export default SocialMediaButton;
