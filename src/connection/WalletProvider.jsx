"use client";

import { ThirdwebProvider, PayEmbed } from "thirdweb/react";
import { client } from "@/constant/walletPrefrences";
import { base } from "thirdweb/chains";

// import { WagmiConfig } from "wagmi";
// import { wagmiConfig } from "./index";

// activeChain={PulsechainTestnetV4}
// supportedChains={[
// 	Sepolia,
// 	PulsechainTestnetV4,
// 	BaseGoerli,
// 	Ethereum,
// 	Pulsechain,
// 	Base,
// 	Mumbai,
// ]}

// // clientId={process.env.THIRD_WEB_CLIENTID}
// locale={en()}
// // supportedWallets={[
// // 	metamaskWallet({ recommended: true }),
// // 	coinbaseWallet(),
// // 	walletConnect({ recommended: true }),
// // 	safeWallet({
// // 		personalWallets: [
// // 			metamaskWallet({ recommended: true }),
// // 			coinbaseWallet(),
// // 			walletConnect({ recommended: true }),
// // 		],
// // 	}),
// // 	rabbyWallet(),
// // 	// createWallet("io.internetmoney"),
// // 	// createWallet("org.thepulsewallet"),
// // 	// createWallet("io.rabby")
// // 	// embeddedWallet()
// // ]}
// dAppMeta={{
// 	name: "tesseractx.com",

// 	url: "https://tesseractx.com",
// 	/**
// 	 * optional - a description of your app
// 	 */
// 	/**
// 	 * optional - a url that points to a logo (or favicon) of your app
// 	 */
// 	logoUrl: "string",
// 	/**
// 	 * optional - whether to show the connect dialog in darkmode or not
// 	 */
// }}

const WalletProvider = ({ children }) => {
    // return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
    // console.log(
    // 	"process.env.THIRD_WEB_CLIENTID",
    // 	process.env.THIRD_WEB_CLIENTID
    // );
    return (
        <ThirdwebProvider>
            {/* <div style={{ height: "200px", width: "200px" }}>
                <PayEmbed
                    client={client}
					theme={"light"} // to set dynamically from current theme  "light" || "dark"
                    payOptions={{
                        prefillBuy: {
                            chain: base, //to set dynamically from constants like... PayEmbedChains[8453]
                            allowEdits: {
                                amount: true,
                                token: true,
                                chain: false,
                            },
                        },
                    }}
                />
            </div> */}
            {children}
        </ThirdwebProvider>
    );
};

export default WalletProvider;
