import TesseractXNFTFactoryABI from "@/abi/TesseractXNFTFactory.json";
import MarketPlaceV3ABI from "@/abi/MarketPlaceV3.json";
import AddNFTCollectionABI from "@/abi/AddNFTCollection.json";
import { base, ethereum } from "thirdweb/chains";
import { createWallet, walletConnect } from "thirdweb/wallets";
import { Chain } from "opensea-js";
import { pulse } from "./walletPrefrences";

export const MARKETPLACE_CONTRACT_ADDRESS = {
    369: "0xDAB1d752B521b6A5dE0dF67f078536CCF2953fd3",
    1: "0xF96D5b6eC2E8B7e89aEC36cdD17AA57b6342f64B",
    8453: "0xfAF0303DB1ab55EeC275B67E663946efdb0D6Fe3",
};

export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export const ZERO_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

export const RPC_URLS = {
    369: "https://rpc.pulsechain.com",
	1: "https://1.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
	8453: "https://8453.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
};

//change pulse explorer url

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
        blockExplorerUrls: [
            "https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/tx/",
        ],
    },
    1: {
        chainId: 1,
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
            name: "Ethereum Mainnet",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: [
            "https://1.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
        ],
        blockExplorerUrls: ["https://etherscan.io/tx/"],
    },
    8453: {
        chainId: 1,
        chainName: "Base Mainnet",
        nativeCurrency: {
            name: "Base Mainnet",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: [
            "https://8453.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
        ],
        blockExplorerUrls: ["https://basescan.org/tx/"],
    },
};

export const BLOCK_EXPLORER_URL = {
    369: "https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/address/",
    1: "https://etherscan.io/address/",
    8453: "https://basescan.org/address/",
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

//pending add factory addresses
export const CONTRACTS_BY_NETWORK = {
    AddNFTCollection: {
        369: {
            address: "0x48b3f5Fd5E7a0B30cAB4175BD3dd23a0EA5F988d",
            abi: AddNFTCollectionABI,
        },
        1: {
            address: "0xBECAB9471926C9527058ca0EDb2F90Df4b095a42",
            abi: AddNFTCollectionABI,
        },
        8453: {
            address: "0x6839bdA6D82E43445B6acc2e4eBaBA25348E7b02",
            abi: AddNFTCollectionABI,
        },
    },
    TesseractNftFactory: {
        // 80001: {
        // 	address: "0xc94b5121C002A2Cdf438170d5C3faFe7514eEa2f",
        // 	abi: TesseractXNFTFactoryABI,
        // },
        369: {
            address: "0xBB57e9CF7F5A81c11a664dEeF8699F37746037d5",
            abi: TesseractXNFTFactoryABI,
        },
        1: {
            address: "0x236535938e8433339629F6D55e16F1EFe94e922f",
            abi: TesseractXNFTFactoryABI,
        },
        8453: {
            address: "0xF86e20479ca8a931c2d600F814d16ec9313431C5",
            abi: TesseractXNFTFactoryABI,
        },
    },
    Marketplace: {
        // 80001: {
        // 	address: "0x4414151dea20C14C87221e0691514191d00C2149",
        // 	abi: MarketPlaceV3ABI,
        // },
        369: {
            address: "0xDAB1d752B521b6A5dE0dF67f078536CCF2953fd3",
            abi: MarketPlaceV3ABI,
        },
        1: {
            address: "0xF96D5b6eC2E8B7e89aEC36cdD17AA57b6342f64B",
            abi: MarketPlaceV3ABI,
        },
        8453: {
            address: "0xfAF0303DB1ab55EeC275B67E663946efdb0D6Fe3",
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
    369: "PLS",
    1: "ETH",
    8453: "ETH",
};

export const CHAIN_ARRAY = [1, 369, 8453, "All"];

export const FILTER_OPTIONS = [
    { value: "", label: "All Items" },
    { value: "single", label: "Single Items" },
    { value: "multi", label: "Multiple Items" },
];

export const ORDER_OPTIONS = [
    { value: "Recently Listed", label: "Recently Listed" },
    { value: "Recently Sold", label: "Recently Sold" },
    { value: "Recently Lowtohigh", label: "Recently Low to High" },
    { value: "Recently Hightolow", label: "Recently High to Low" },
];

export const CHAINS = [
    { value: 1, label: "Ethereum (ETH)" },
    { value: 369, label: "PulseChain (PLS)" },
    { value: 8453, label: "Base (ETH)" },
];

export const CHAIN_LOGO = {
    // 943: "/images/pulsechain-icon.svg",
    369: "/images/LogoVectorPulseChain.svg",
    // 1: "/images/ethe-icon-blue.svg",
    1: "/images/ethereum-icon.svg",
    8453: "/images/base-icon.svg",
};

export const CHAIN_SYMBOL = {
    369: "PLS",
    1: "ETH",
    8453: "ETH",
};

export const CHAIN_NAME = {
    369: "PulseChain",
    8453: "Base",
    1: "Ethereum",
};

export const GET_CHAIN_NAMES = {
    369: "PulseChain",
    1: "Ethereum",
    8453: "Base",
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
        chainId: pulse,
    },
    {
        name: "Ethereum",
        logo: "/images/ethereum-icon.svg",
        chainId: ethereum,
    },

    {
        name: "Base",
        logo: "/images/base-icon.svg",
        chainId: base,
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
    "image/webp",
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

//pending change in future
export const WALLET_NOTIFICATION_CHANNEL = {
    1: "0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF",
    11155111: "0x085426Ca3958bD760F4817f7cF139Ce0CbB9F7AF",
};

export const MEMBERSHIP_SUPPORTED_CHAINS = [8453];

export const SUBSCRIPTION = {
    TERA: "TERA",
    YOTA: "YOTA",
};

export const MEMBERSHIP = {
    MONTH: "MONTH",
    YEAR: "YEAR",
    LIFETIME: "LIFETIME",
};

// TERA 1 Month 0xaff66a2277a6d74b657ead552e335da6f69ffcee
// TERA 12 Month 0xe2bf3884D83F925E8741963585d4b516f16c85C6
// TERA Lifetime 0x9442E65a2B7520C78492f8DC901C0B0c02D58A62

// YOTTA 1 Month 0x9b8341abe9112a435fd0bca2451d9fe122a6c8f7
// YOTTA 12 Month 0x4966251fbe0ff843de34ef7cf8f1067dc942eab6
// YOTTA Lifetime 0x3aef23687ca6e7cbd98c573f05d28b709135892a

export const MEMBERSHIP_CONTRACTS_ADDRESSES = {
    8453: {
        [SUBSCRIPTION.TERA]: {
            [MEMBERSHIP.MONTH]: "0xaff66a2277a6d74b657ead552e335da6f69ffcee",
            [MEMBERSHIP.YEAR]: "0xe2bf3884D83F925E8741963585d4b516f16c85C6",
            [MEMBERSHIP.LIFETIME]: "0x9442E65a2B7520C78492f8DC901C0B0c02D58A62",
        },
        [SUBSCRIPTION.YOTA]: {
            [MEMBERSHIP.MONTH]: "0x9b8341abe9112a435fd0bca2451d9fe122a6c8f7",
            [MEMBERSHIP.YEAR]: "0x4966251fbe0ff843de34ef7cf8f1067dc942eab6",
            [MEMBERSHIP.LIFETIME]: "0x3aef23687ca6e7cbd98c573f05d28b709135892a",
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

export const FRONT_END_DOMAIN = "https://for-og-zeta.vercel.app";
// export const FRONT_END_DOMAIN = "https://dev.tesseractx.com";

export const coinbase = createWallet("com.coinbase.wallet");

export const wallets = [
    coinbase,
    createWallet("io.metamask"),
    walletConnect(),
    createWallet("global.safe"),
    createWallet("io.internetmoney"),
    // createWallet("org.thepulsewallet"),
    createWallet("io.rabby"),
];

//opensea
export const OPENSEA_API_URL = "https://api.opensea.io";

export const OPENSEA_CHAINS = {
    1: Chain.Mainnet,
    8453: Chain.Base,
};

export const OPENSEA_LISTING_FEE = 2.5;
