import React from "react";
import SectionHeader from "components/SectionHeader";
import SocialMediaButton from "components/SocialMediaButton";
interface Props {
    pageTitle: boolean;
}
const Sidebar: React.FC<Props> = ({pageTitle}) => {
    return(
        <aside className={`${"sidebar"} ${pageTitle ? "sidebar-margin" : ""}`}>
            <SectionHeader text="Weather" />
            <SectionHeader text="Social Media" />
            <SocialMediaButton media="fb" />
            <SocialMediaButton media="twt" />

        </aside>
    );
}

export default Sidebar;
