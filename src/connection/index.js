// import { WagmiConfig, configureChains, createConfig } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
// import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import {
// 	polygonMumbai,
// 	pulsechainV4,
// 	baseGoerli,
// 	polygon,
// 	pulsechain,
// 	base,
// } from "wagmi/chains";

// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// // import { InjectedConnector } from "wagmi/connectors/injected";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import { NetworkParams } from "@/constant";
// import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

// const projectId = process.env.WALLETCONNECT_PROJECT_ID;

// const { chains } = configureChains(
// 	[
// 		pulsechainV4,
// 		polygonMumbai,
// 		baseGoerli,
// 		//  polygon,
// 		pulsechain,
// 		//   base
// 	],
// 	[
// 		alchemyProvider({
// 			apiKey: process.env.ALCHAMY_KEY,
// 		}),
// 		publicProvider(),
// 		jsonRpcProvider({
// 			rpc: (chains) => ({
// 				http: chains.rpcUrls[0],

// 				// "https://pulsechain-testnet.publicnode.com" /** NetworkParams[369].rpcUrls[0] */,
// 			}),
// 		}),
// 		// jsonRpcProvider({
// 		// 	rpc: () => ({
// 		// 		http: NetworkParams[80001].rpcUrls[0],
// 		// 	}),
// 		// }),
// 	]
// );

// export const wagmiConfig = defaultWagmiConfig({
// 	chains,
// 	projectId,
// 	appName: "TesseractX",
// });

// console.log("projectId", projectId);

// createWeb3Modal({
// 	wagmiConfig,
// 	projectId,
// 	chains,
// 	themeMode: "light",
// });

// export { chains, projectId };
