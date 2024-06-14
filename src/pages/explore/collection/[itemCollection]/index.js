import { PublicProfile } from "@/components/PublicProfile/PublicProfileProvider";
import CollectionDetailComponent from "@/components/collectionDetail/CollectionDetailComponent";
import { FRONT_END_DOMAIN } from "@/constant";



export async function getServerSideProps(context) {
    // Fetch data for the specific page
    const ogImageUrl = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent('Test')}&imageUrl=${encodeURIComponent('https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582')}`;
    return {
      props: {
        ogData: {
            url: `${FRONT_END_DOMAIN}/explore/collection/0x49a708fd428319b543279826d9eadc9eab4ad888` ,
            imgUrl: ogImageUrl
        },
      },
    };
  }
import React from "react";

const Index = ({ogData}) => {
    return (
        <>
            <PublicProfile>
                <CollectionDetailComponent />;
            </PublicProfile>
        </>
    );
};

export default Index;
