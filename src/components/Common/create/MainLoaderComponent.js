// components/MainLoaderComponent.js
import React, { useEffect, useState } from "react";
import MultiStepLoader from "./MultiStepLoader";

const MainLoaderComponent = ({ progress = 0 }) => {
    const loadingStates = [
        { text: "Uploading Media to IPFS" },
        { text: "Uploading metadata to IPFS" },
        { text: "Creating NFT" },
        { text: "Syncing Marketplace" },
    ];
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (progress === undefined || progress === null) return;

        let STATUS;
        if (progress === 100) {
            STATUS = 3;
        } else if (progress >= 59) {
            STATUS = 2;
        } else if (progress >= 25) {
            STATUS = 1;
        } else if (progress > 0) {
            STATUS = 0;
        } else {
            STATUS = null;
        }
        setStatus(STATUS);
    }, [progress]);

    return (
        <div className="flex w-full items-center justify-center">
            <MultiStepLoader
                loadingStates={loadingStates}
                status={status}
                // loading={loading}
                duration={2000}
            />
        </div>
    );
};

export default MainLoaderComponent;
