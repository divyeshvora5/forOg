import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const usePreviousRoute = () => {
    const router = useRouter();
    const [previousRoute, setPreviousRoute] = useState(null);

    const handleRouteChange = (url) => {
        setPreviousRoute(router.asPath);
    };

    useEffect(() => {
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    return { previousRoute };
};
