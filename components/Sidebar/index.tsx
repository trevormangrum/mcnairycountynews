import React from "react";
import SectionHeader from "components/SectionHeader";
const Sidebar: React.FC = () => {
    return(
        <aside className="sidebar">
            <SectionHeader text="Weather" />
            <SectionHeader text="Social Media" />
        </aside>
    );
}

export default Sidebar;
