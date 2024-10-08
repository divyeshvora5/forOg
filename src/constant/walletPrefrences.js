import { createThirdwebClient } from "thirdweb";
import {
    base,
    defineChain,
    ethereum,
} from "thirdweb/chains";

export const client = createThirdwebClient({
    clientId: process.env.THIRD_WEB_CLIENTID,
    secretKey: process.env.THIRD_WEB_SECRETKEY,
});

export const pulse = defineChain({
    id: 369,
    name: "pulsechain",
    nativeCurrency: {
        name: "Pulse",
        symbol: "PLS",
        decimals: 18,
    },
    blockExplorers: [
        {
            name: "blockscout",
            url: "https://scan.pulsechain.com",
            apiUrl: "https://api.scan.pulsechain.com/api",
        },
    ],
    testnet: false,
});


export const SUPPORTED_CHAINS = [
    ethereum,
    base,
    pulse,
];

export const CHAIN_BY_ID = {
    1: ethereum,
    8453: base,
    369: pulse,
};

export const WALLET_PREFERENCES = {
    "io.metamask": {
        id: "io.metamask",
        name: "Metamask",
        icon: "/images/walletSvgs/MetaMask.svg",
    },
    "global.safe": {
        id: "global.safe",
        name: "Safe",
        icon: "/images/walletSvgs/safe-logo-green.svg",
    },
    walletConnect: {
        id: "walletConnect",
        name: "WalletConnect",
        icon: "/images/walletSvgs/wc.svg",
    },
    "com.coinbase.wallet": {
        id: "com.coinbase.wallet",
        name: "Coinbase",
        icon: "/images/walletSvgs/coinbase.svg",
    },
    "io.internetmoney": {
        id: "io.internetmoney",
        name: "Internet Money Wallet",
        icon: "/images/walletSvgs/IMW.svg",
    },
    "org.thepulsewallet": {
        id: "org.thepulsewallet",
        name: "The Pulse Wallet",
        icon: "/images/walletSvgs/PulseWallet.svg",
    },
    "io.rabby": {
        id: "io.rabby",
        name: "Rabby",
        icon: "/images/walletSvgs/rabby.svg",
    },
};

export const NATIVE_CURRENCY_DECIMALS = {
    369: 18,
    1: 18,
    8453: 18,
};
