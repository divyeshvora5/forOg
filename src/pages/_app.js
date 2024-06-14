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
import { FRONT_END_DOMAIN } from "@/constant";
const WalletProvider = dynamic(() => import("../connection/WalletProvider"), {
	ssr: false,
});

// const SplashScreen = dynamic(
// 	() => import("../components/Common/SplashScreen"),
// 	{ ssr: false }
// );

function App({ Component, pageProps }) {


	//for og data
	const ogData = pageProps?.ogData;




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


	return (
		<>
			<Head>
				<title>TesseractX</title>
				<meta
					name="description"
					content="TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={ogData?.url} />
				<meta property="og:title" content="Your Title" />
				<meta property="og:description" content="Your Description" />
				<meta property="og:image" content={ogData?.imgUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={ogData?.url} />
				<meta property="twitter:title" content="Your Title" />
				<meta property="twitter:description" content="Your Description" />
				<meta property="twitter:image" content={ogData?.imgUrl} />
			</Head>
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

App.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default App;