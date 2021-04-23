import React from "react";
import SectionHeader from "components/SectionHeader";
import SocialMediaButton from "components/SocialMediaButton";
import DigitalAdPlaceholder from "components/DigitalAdPlaceholder";
import Link from "next/link";
interface Props {
  pageTitle: boolean;
}
const Sidebar: React.FC<Props> = ({ pageTitle }) => {
  //TODO: Load advertisements.
  return (
    <aside className={`${"sidebar"} ${pageTitle ? "sidebar-margin" : ""}`}>
      <SectionHeader text="Weather" />
      <DigitalAdPlaceholder />
      <SectionHeader text="Social Media" />
      <SocialMediaButton media="fb" />
      <SocialMediaButton media="ig" />
      <DigitalAdPlaceholder />
      <SectionHeader text="Subscribe" />
      <p>Subscribe to the McNairy County News!</p>
      <Link href="/subscribe">
        <a className="button" href="/advertising">
          Subscribe
        </a>
      </Link>
      <DigitalAdPlaceholder />
      <SectionHeader text="Advertising" />
      <p>
        Interested in advertising your business in our paper or on our website?
        Click the button below to learn more about our advertising rates.
      </p>
      <Link href="/advertising">
        <a className="button" href="/advertising">
          Learn More
        </a>
      </Link>
      <DigitalAdPlaceholder />
    </aside>
  );
};

export default Sidebar;
