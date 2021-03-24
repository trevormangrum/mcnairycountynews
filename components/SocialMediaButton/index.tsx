import React from "react";
import {FaTwitter, FaFacebook} from "react-icons/fa";
interface Props {
    media: string;
}

const SocialMediaButton: React.FC<Props> = ({media}) => {
    return (
        <div>
            {media === "fb" && (
                <a href='https://www.facebook.com/mcnairycountynews' className="sm sm-fb">
                    <FaFacebook className="sm-icon"/>
                </a>
            )}
            {media === "twt" && (
                <a href='https://twitter.com/McNairyNews' className="sm sm-twt">
                    <FaTwitter className="sm-icon"/>
                </a>
            )}
        </div>
    );
}



export default SocialMediaButton;
