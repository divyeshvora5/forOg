import TesseractXNFTFactoryABI from "@/abi/TesseractXNFTFactory.json";
import MarketPlaceV3ABI from "@/abi/MarketPlaceV3.json";
import AddNFTCollectionABI from "@/abi/AddNFTCollection.json";
import {
    base,
    baseSepolia,
    defineChain,
    ethereum,
    sepolia,
} from "thirdweb/chains";
import { pulsev4 } from "./walletPrefrences";
import { createWallet, walletConnect } from "thirdweb/wallets";

export const MARKETPLACE_CONTRACT_ADDRESS = {
    // 80001: "0x4414151dea20C14C87221e0691514191d00C2149",
    943: "0xa9E7aD55F33dCa7783637DDB753Dc1B38DA9d3BA",
    11155111: "0x115f3Ca974bf9E540Be1dE3d28B98164B6F67229",
    84532: "0x4E480c6359D77FFe881D3d239Eb5F23B5Ce9B44b",
};

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const ZERO_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

export const RPC_URLS = {
    369: "https://rpc.pulsechain.com",
    943: "https://rpc.v4.testnet.pulsechain.com",
    84532: "https://84532.rpc.thirdweb.com/",
    11155111:
        "https://eth-sepolia.g.alchemy.com/v2/mh5xM6YzVSkp2YTkBT6Uc8-DPSXq5-Qb",
    8453: "https://mainnet.base.org",
};

export const NetworkParams = {
    369: {
        chainId: 369,
        chainName: "PulseChain",
        nativeCurrency: {
            name: "PulseChain",
            symbol: "PLS",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.pulsechain.com"],
        blockExplorerUrls: ["https://scan.pulsechain.com"],
    },
    943: {
        chainId: 943,
        chainName: "PulseChain",
        nativeCurrency: {
            name: "PulseChain",
            symbol: "PLS",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.v4.testnet.pulsechain.com"],
        blockExplorerUrls: ["https://scan.v4.testnet.pulsechain.com"],
    },
    80001: {
        chainId: 80001,
        chainName: "mumbai",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: [
            "https://polygon-mumbai.g.alchemy.com/v2/e9NgBNkdHIYNo_cLeuiIdkTNMbjXlQSX",
        ],
        blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    },
    11155111: {
        chainId: 11155111,
        chainName: "goerli",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: [
            "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        ],
        blockExplorerUrls: ["https://sepolia.etherscan.io"],
    },
    84532: {
        chainId: 84532,
        chainName: "sepolia goerli",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://84532.rpc.thirdweb.com/"],
        blockExplorerUrls: ["https://sepolia.basescan.org/"],
    },
};

export const BLOCK_EXPLORER_URL = {
    943: "https://scan.v4.testnet.pulsechain.com/#",
    80001: "https://mumbai.polygonscan.com",
    11155111: "https://sepolia.etherscan.io",
    84532: "https://goerli.basescan.org/",
};

// export const pulsechain = {

// 	id: 369,
// 	network: "pulsechain",
// 	name: "PulseChain",
// 	nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
// 	testnet: false,
// 	rpcUrls: {
// 		default: {
// 			http: ["https://rpc.pulsechain.com"],
// 			webSocket: ["wss://ws.pulsechain.com"],
// 		},
// 		public: {
// 			http: ["https://rpc.pulsechain.com"],
// 			webSocket: ["wss://ws.pulsechain.com"],
// 		},
// 	},
// 	blockExplorers: {
// 		default: {
// 			name: "PulseScan",
// 			url: "https://scan.pulsechain.com",
// 		},
// 	},
// 	contracts: {
// 		ensRegistry: {
// 			address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
// 		},
// 		multicall3: {
// 			address: "0xca11bde05977b3631167028862be2a173976ca11",
// 			blockCreated: 14353601,
// 		},
// 	},
// };

//

export const CONTRACTS_BY_NETWORK = {
    AddNFTCollection: {
        943: {
            address: "0xC0636Cc3032DceC4889439FCe69D9B3af729248E",
            abi: AddNFTCollectionABI,
        },
        11155111: {
            address: "0x1d6D014A443a8081C9069Db530d2a53b5bFFe7fd",
            abi: AddNFTCollectionABI,
        },
        84532: {
            address: "0xa008c1496A434e957ad535018026952DD0f49AfC",
            abi: AddNFTCollectionABI,
        },
    },
    TesseractNftFactory: {
        // 80001: {
        // 	address: "0xc94b5121C002A2Cdf438170d5C3faFe7514eEa2f",
        // 	abi: TesseractXNFTFactoryABI,
        // },
        943: {
            address: "0x9B82d53aCe032cB10f85eaf23AA91524DcD7Cb2c",
            abi: TesseractXNFTFactoryABI,
        },
        11155111: {
            address: "0xea40C39b8dd2f1BA85bd9EF218f180f15199b1a7",
            abi: TesseractXNFTFactoryABI,
        },
        84532: {
            address: "0x3AE4ECD72E06E6E64Caa65b72d762E82335C305D",
            abi: TesseractXNFTFactoryABI,
        },
    },
    Marketplace: {
        // 80001: {
        // 	address: "0x4414151dea20C14C87221e0691514191d00C2149",
        // 	abi: MarketPlaceV3ABI,
        // },
        943: {
            address: "0xa9E7aD55F33dCa7783637DDB753Dc1B38DA9d3BA",
            abi: MarketPlaceV3ABI,
        },
        11155111: {
            address: "0x115f3Ca974bf9E540Be1dE3d28B98164B6F67229",
            abi: MarketPlaceV3ABI,
        },
        84532: {
            address: "0x4E480c6359D77FFe881D3d239Eb5F23B5Ce9B44b",
            abi: MarketPlaceV3ABI,
        },
    },
};

export const TYPE = {
    SINGLE: "single",
    MULTI: "multi",
};

export const SALE_TYPE = {
    LIST: "LIST",
    AUCTION: "AUCTION",
};

export const NATIVE_CURRENCY = {
    // 80001: "MATIC",
    943: "PLS",
    11155111: "ETH",
    84532: "ETH",
};

export const CHAIN_ARRAY = [943, 1, 11155111, 84532, "All"];

export const FILTER_OPTIONS = [
    { value: "", label: "All Items" },
    { value: "single", label: "Single Items" },
    { value: "multi", label: "Multiple" },
];

export const ORDER_OPTIONS = [
    { value: "Recently Listed", label: "Recently Listed" },
    { value: "Recently Sold", label: "Recently Sold" },
    { value: "Recently Lowtohigh", label: "Recently Lowtohigh" },
    { value: "Recently Hightolow", label: "Recently Hightolow" },
];

export const CHAINS = [
    { value: 1, label: "Ethereum (ETH)" },
    { value: 943, label: "PulseChain (PLS)" },
    // { value: 80001, label: "Mumbai (MATIC)" },
    { value: 11155111, label: "Sepolia (ETH)" },
    { value: 84532, label: "Base (ETH)" },
];

export const CHAIN_LOGO = {
    // 943: "/images/pulsechain-icon.svg",
    943: "/images/LogoVectorPulseChain.svg",
    1: "/images/ethe-icon-blue.svg",
    11155111: "/images/ethereum-icon.svg",
    84532: "/images/base-icon.svg",
};

export const CHAIN_SYMBOL = {
    943: "PLS",
    1: "ETH",
    11155111: "ETH",
    84532: "ETH",
};

export const CHAIN_NAME = {
    943: "PulseChainV4",
    11155111: "Sepolia",
    84532: "Sepolia Goerli",
    1: "Ethereum",
};

export const GET_CHAIN_NAMES = {
    943: "PulseChain",
    11155111: "Sepolia",
    84532: "Sepolia Goerli",
    1: "Ethereum",
};

export const CHAIN_WITH_LOGO = [
    {
        name: "All Chains",
        logo: "/images/pixelarticons_list.svg",
        chainId: {
            id: "All",
        },
    },
    {
        name: "PulseChain",
        logo: "/images/LogoVectorPulseChain.svg",
        chainId: pulsev4,
    },
    {
        name: "Ethereum",
        logo: "/images/ethereum-icon.svg",
        chainId: sepolia,
    },

    {
        name: "Base",
        logo: "/images/base-icon.svg",
        chainId: baseSepolia,
    },
];

export const PayEmbedChains = {
    1: ethereum,
    8453: base,
    // 369: "PulseChain", //NOT SUPPORTS
};

export const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
];

export const COLLECTION_DETAILS_FILTER = [
    { label: "All", value: "All" },
    { label: "Buy Now", value: "Listing" },
    { label: "Live Auction", value: "Auction" },
    { label: "Not for sale", value: "NOT_FOR_SALE" },
];

export const ITEM_LISTING_STATUS = {
    LISTING: "Listing",
    AUCTION: "Auction",
    OFFER: "Offer",
};

export const EVENT_NAMES = {
    Purchase: "Purchase",
    Offer: "Offer",
    Bids: "Bids",
    Following: "Following",
    Like: "Like",
    Minted: "Minted",
};

export const THEME_MODES = [
    { value: "light-Theme", label: "Light" },
    { value: "dark-Theme", label: "Dark" },
];

export const STORAGE_KEYS = {
    SETTINGS: "@settings",
    THEME_MODE: "@theme_mode",
};

export const TIME_FILTER_BUTTON = [
    { value: "Day", label: "24h" },
    { value: "Week", label: "1W" },
    { value: "Month", label: "1M" },
    { value: "ThreeMonth", label: "3M" },
];

export const WALLETNOTIFICATION_ENV = "staging";

export const WALLET_NOTIFICATION_CHANNEL = {
    1: "0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF",
    11155111: "0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF",
};

export const MEMBERSHIP_SUPPORTED_CHAINS = [1, 11155111];

export const SUBSCRIPTION = {
    TERA: "TERA",
    YOTA: "YOTA",
};

export const MEMBERSHIP = {
    MONTH: "MONTH",
    YEAR: "YEAR",
    LIFETIME: "LIFETIME",
};

export const MEMBERSHIP_CONTRACTS_ADDRESSES = {
    11155111: {
        [SUBSCRIPTION.TERA]: {
            [MEMBERSHIP.MONTH]: "0xc48feab2a4dccd2733a60f7070c3fd0680ff4124",
            [MEMBERSHIP.YEAR]: "0x73660c229f792588fb000a57029600fab8975950",
            [MEMBERSHIP.LIFETIME]: "0xed9118ca3cfbfa14113fb0ffc8e54dd5bb7bc63c",
        },
        [SUBSCRIPTION.YOTA]: {
            [MEMBERSHIP.MONTH]: "0x4e90cfd3a69c8da72fe2ae8142c800c620d0cee0",
            [MEMBERSHIP.YEAR]: "0x1a27e3b5176963fa17d5bb64a04e2b01d9807f8b",
            [MEMBERSHIP.LIFETIME]: "0xbff7ccfd49714a43e75632cacaef49357bd736cf",
        },
    },
};

// export const FAL_SUBSCRIPSION_ROUTE='fal-ai/fast-turbo-diffusion';

// export const FAL_MODELNAME = 'stabilityai/sdxl-turbo';

export const FAL_IMAGES_DIMENTIONS = [
    {
        label: "Default",
        value: "square",
    },
    {
        label: "Square HD",
        value: "square_hd",
    },
    {
        label: "Square",
        value: "square",
    },
    {
        label: "Portrait 4:3",
        value: "portrait_4_3",
    },
    {
        label: "Portrait 16:9",
        value: "portrait_16_9",
    },
    {
        label: "Landscape 4:3",
        value: "landscape_4_3",
    },
    {
        label: "Landscape 16:9",
        value: "landscape_4_3",
    },
    {
        label: "Custom",
        value: "custom",
    },
];

// export const FRONT_END_DOMAIN = "https://beta.tesseractx.com"
// export const FRONT_END_DOMAIN = "https://dev.tesseractx.com";
export const FRONT_END_DOMAIN = "https://for-og-zeta.vercel.app";

// export const FRONT_END_DOMAIN = "http://127.0.0.1:3000"

export const coinbase = createWallet("com.coinbase.wallet");

export const wallets = [
    coinbase,
    createWallet("io.metamask"),
    walletConnect(),
    createWallet("global.safe"),
    createWallet("io.internetmoney"),
    createWallet("org.thepulsewallet"),
    createWallet("io.rabby"),
];
