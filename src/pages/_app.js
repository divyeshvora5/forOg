import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import { Guard, Layout } from "@/components";
import { IntercomProvider } from "react-use-intercom";
import { ThemeProvider } from "next-themes";
// import { useEffect } from "react";
import Head from "next/head";
import App from "next/app";
import { ChatProvider } from "@/context/ChatContext";
import { FRONT_END_DOMAIN } from "@/constant/ogConstant";
const WalletProvider = dynamic(() => import("../connection/WalletProvider"), {
    ssr: false,
});

function MyApp({ Component, pageProps }) {
    // useEffect(() => {
    //     if ("serviceWorker" in navigator) {
    //         navigator.serviceWorker
    //             .register("/OneSignalSDKWorker.js")
    //             .then((registration) => {
    //                 console.log(
    //                     "Service Worker registered with scope:",
    //                     registration.scope
    //                 );
    //             })
    //             .catch((error) => {
    //                 console.error("Service Worker registration failed:", error);
    //             });
    //     }
    // }, []);

    const defaultOgData = {
        title: "TesseractX",
        description:
            "TesseractX is the ultimate rewarding, multi-chain, community-centric digital collectibles marketplace.",
        imgUrl: `${FRONT_END_DOMAIN}/api/og/general`,
        url: `${FRONT_END_DOMAIN}`,
    };

    const {
        url: ogUrl = defaultOgData.url,
        title: ogTitle = defaultOgData.title,
        description: ogDescription = defaultOgData.description,
        imgUrl: ogImgUrl = defaultOgData.imgUrl,
    } = pageProps?.ogData || {};
    return (
        <>
            {/* {ogData && ( */}
            <Head>
                <title>TesseractX</title>
                <meta
                    name="description"
                    content="TesseractX is the ultimate rewarding, multi-chain, community-centric digital collectibles marketplace."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImgUrl} />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={ogUrl} />
                <meta property="twitter:title" content={ogTitle} />
                <meta property="twitter:description" content={ogDescription} />
                <meta property="twitter:image" content={ogImgUrl} />
            </Head>
            {/* )} */}
            <WalletProvider>
                <ThemeProvider attribute="class">
                    <Provider store={store}>
                        <IntercomProvider appId="j5rgglth">
                            <ChatProvider>
                                <Layout>
                                    {/* <Guard> */}
                                    <Component {...pageProps} />
                                    {/* </Guard> */}
                                </Layout>
                            </ChatProvider>
                        </IntercomProvider>
                    </Provider>
                </ThemeProvider>
            </WalletProvider>
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;
