import React from "react";
import SectionHeader from "components/SectionHeader";
import SocialMediaButton from "components/SocialMediaButton";
import DigitalAdPlaceholder from "components/DigitalAdPlaceholder";
import Link from "next/link";
import queries from "server/actions/Contentful/queries";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import { randomizeAds } from "server/helpers/ads";
import Ad from "components/Ad";
import { Advertisement } from "utils/types";
interface Props {
  pageTitle: boolean;
}
const Sidebar: React.FC<Props> = ({ pageTitle }) => {
  const { data: adData, loading: adLoading, error: adError } = useQuery(
    queries.ads.getAdsByPriority,
    {
      client: client,
      variables: { prio: "3" },
    }
  );
  const ads: Advertisement[] =
    adData && randomizeAds(adData.adCollection.items.slice(0));
  return (
    <aside className={`${"flex flex-col"} ${pageTitle ? "mt-[89px]" : ""}`}>
      {ads && ads.length > 0 ? (
        <Ad
          square={ads[0].square ? true : false}
          imageUrl={ads[0].image?.url as string}
          url={ads[0].url as string}
        />
      ) : (
        <DigitalAdPlaceholder />
      )}
      <SectionHeader text="Social Media" />
      <SocialMediaButton media="fb" />
      <SocialMediaButton media="ig" />
      {ads && ads.length > 1 ? (
        <Ad
          square={ads[1].square ? true : false}
          imageUrl={ads[1].image?.url as string}
          url={ads[1].url as string}
        />
      ) : (
        <DigitalAdPlaceholder />
      )}
      <SectionHeader text="Subscribe" />
      <p className="text-text-primary">Subscribe to the McNairy County News!</p>
      <Link href="/subscribe">Subscribe</Link>
      {ads && ads.length > 2 ? (
        <Ad
          square={ads[2].square ? true : false}
          imageUrl={ads[2].image?.url as string}
          url={ads[2].url as string}
        />
      ) : (
        <DigitalAdPlaceholder />
      )}
      <SectionHeader text="Advertising" />
      <p className="text-text-primary">
        Interested in advertising your business in our paper or on our website?
        Click the button below to learn more about our advertising rates.
      </p>
      <Link href="/advertising">Learn More</Link>
      {ads && ads.length > 3 ? (
        <Ad
          square={ads[3].square ? true : false}
          imageUrl={ads[3].image?.url as string}
          url={ads[3].url as string}
        />
      ) : (
        <DigitalAdPlaceholder />
      )}
    </aside>
  );
};

export default Sidebar;
