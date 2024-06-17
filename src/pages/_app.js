import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import { Guard, Layout } from "@/components";
import { IntercomProvider } from "react-use-intercom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Head from "next/head";
import App from "next/app";
const WalletProvider = dynamic(() => import("../connection/WalletProvider"), {
	ssr: false,
});

// const SplashScreen = dynamic(
// 	() => import("../components/Common/SplashScreen"),
// 	{ ssr: false }
// );

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			navigator.serviceWorker
				.register("/OneSignalSDKWorker.js")
				.then((registration) => {
					console.log(
						"Service Worker registered with scope:",
						registration.scope
					);
				})
				.catch((error) => {
					console.error("Service Worker registration failed:", error);
				});
		}
	}, []);

	const ogData = pageProps?.ogData;


	return (
		<>

			{ogData &&
				<Head>
					<title>TesseractX</title>
					<meta
						name="description"
						content="TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!"
					/>
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<meta property="og:type" content="website" />
					<meta property="og:url" content={ogData?.url} />
					<meta property="og:title" content={ogData?.title} />
					<meta property="og:description" content="TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!" />
					<meta property="og:image" content={ogData?.imgUrl} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content={ogData?.url} />
					<meta property="twitter:title" content={ogData?.title} />
					<meta property="twitter:description" content="TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!" />
					<meta property="twitter:image" content={ogData?.imgUrl} />
				</Head>
			}
			<WalletProvider >
				<ThemeProvider attribute="class">
					<Provider store={store}>
						<IntercomProvider appId="j5rgglth">
							<Layout>
								<Guard>
									<Component {...pageProps} />
								</Guard>
							</Layout>
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