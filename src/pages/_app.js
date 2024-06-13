import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css";
import { Guard, Layout } from "@/components";
import { IntercomProvider } from "react-use-intercom";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
const WalletProvider = dynamic(() => import("../connection/WalletProvider"), {
	ssr: false,
});

// const SplashScreen = dynamic(
// 	() => import("../components/Common/SplashScreen"),
// 	{ ssr: false }
// );

export default function App({ Component, pageProps }) {
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
	);
}
