import { PublicProfile } from "@/components/PublicProfile/PublicProfileProvider";
import CollectionDetailComponent from "@/components/collectionDetail/CollectionDetailComponent";
import React from "react";

const index = () => {
    return (
        <>
            <PublicProfile>
                <CollectionDetailComponent />;
            </PublicProfile>
        </>
    );
};

export default index;
