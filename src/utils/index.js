import pinataSDK from "@pinata/sdk";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import BigNumber from "bignumber.js";
import { CHAIN_NAME, CHAIN_WITH_LOGO, RPC_URLS } from "@/constant";
import { toast } from "react-toastify";

import { PNS } from "@pnsdomains/pnsjs";
import { ethers } from "ethers";

const PNSInstance = new PNS();

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

axios.defaults.withCredentials = true;

const pinata = new pinataSDK({
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecretApiKey: process.env.PINATA_API_SECRAT,
});

export const getIpfsHash = async (data) => {
    const result = await pinata.pinJSONToIPFS(data, null);
    const hash = result.IpfsHash;
    return hash;
};

export const getIpfsHashFromFile = async (file) => {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("pinata_api_key", process.env.PINATA_API_KEY);
        headers.append("pinata_secret_api_key", process.env.PINATA_API_SECRAT);
        const formdata = new FormData();
        formdata.append("file", file);
        const requestOptions = {
            method: "POST",
            headers: headers,
            body: formdata,
        };
        fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", requestOptions)
            .then((r) => r.json())
            .then((r) => {
                resolve(r.IpfsHash);
            })
            .catch((error) => reject(error));
    });
};

export const ResolvePercentage = (value) => {
    if (+value > 0) {
        return <td className="green-text">+{value.toFixed(2)}%</td>;
    } else if (+value < 0) {
        return <td className="red-text">{value.toFixed(2)}%</td>;
    }
    return (
        <>
            <td>{value}%</td>
        </>
    );
};

export const CountParser = (value, fixTo = 2) => {
    if (+value < 1000) {
        if (Number.isInteger(value)) {
            return value;
        } else {
            return Number(value.toFixed(fixTo));
        }
    } else if (+value < 1000000) {
        return (value / 1000).toFixed(1) + "k";
    } else {
        return (value / 1000000).toFixed(1) + "M";
    }
};

export const fixDecimal = (value, fixTo = 5) => {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return Number(value.toFixed(fixTo));
    }
};

const Axios = axios.create({
    baseURL: process.env.API_URL,
});

Axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    if(error?.response) {
        if(error.response.status === 403) {
            localStorage.removeItem('connectedWallet');
        }
    }

    return Promise.reject(error);
})

export { Axios }

export const toWei = (amount, decimals = 18) => {
    try {
        if (!amount) {
            return new BigNumber(0).toString();
        }
        return new BigNumber(amount)
            .multipliedBy(new BigNumber(10).exponentiatedBy(decimals))
            .toFixed(0)
            .toString();
    } catch (error) {
        console.log("exeption in toWei , ", error);
        return null;
    }
};

export const fromWei = (amount, decimals = 18) => {
    // console.log("amount", amount);
    try {
        if (!amount || +amount <= 0) {
            return new BigNumber(0).toString();
        }

        return new BigNumber(amount)
            .div(new BigNumber(10).exponentiatedBy(decimals))
            .toString();
    } catch (error) {
        console.log("exeption in fromWei ", error);
        return null;
    }
};

export const imageWithAndHeight = (providedFile) => {
    const imageDimentions = { width: null, height: null };
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.readAsDataURL(providedFile);
        reader.onload = function () {
            const img = new Image();
            img.src = reader.result;
            img.onload = function () {
                imageDimentions.width = img.width;
                imageDimentions.height = img.height;

                resolve(imageDimentions);
            };
        };
    });
};

export const resizeFile = (file, width, height) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            width,
            height,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "file"
        );
    });

export const usdParser = (amount, min = 2, max = 6) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        currencyDisplay: "narrowSymbol",
        minimumFractionDigits: min,
        maximumFractionDigits: max,
    }).format(amount);

export const getNameByChainId = (chainId = "All") => {
    const chain = CHAIN_WITH_LOGO.find((item) => item.chainId?.id === chainId);
    return chain ? chain.name : "Chain not found";
};

export const shortenText = (text, startLength = 4, endLength = 3) => {
    if (text.length <= startLength + endLength) {
        return text;
    }
    const start = text.slice(0, startLength);
    const end = text.slice(-endLength);
    return `${start}...${end}`;
};

export const getItemDetailsQueryParams = (item) => {
    return {
        itemCollection: item?.itemCollection?.toLowerCase(),
        tokenId: item?.tokenId,
    };
};

export const validateNetwork = (account, chainId, itemChainId) => {
    if (!account) {
        return {
            status: false,
            message: "Please connect your wallet",
        };
    }

    if (chainId !== itemChainId) {
        return {
            status: false,
            message: `Please switch to ${CHAIN_NAME[itemChainId]} chain`,
        };
    }

    return {
        status: true,
        message: null,
    };
};

export const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
});

export const saveStorageData = (key, value) => {
    try {
        window.localStorage.setItem(key, value);
    } catch (error) {
        console.log("error", error);
    }
};

export const getStorageData = (key) => {
    try {
        if (typeof window === "undefined") return;
        const localData = window.localStorage.getItem(key);
        return localData;
    } catch (error) {
        console.log("error", error);
    }
};

export const removeStorageData = (key) => {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        console.log("error", error);
    }
};

export const updateData = (key, value) => {
    try {
        removeStorageData(key);
        saveStorageData(key, value);
    } catch (error) {
        console.log("error", error);
    }
};

export const removeAll = () => {
    try {
        window.localStorage.clear();
    } catch (error) {
        console.log("error", error);
    }
};

export const getEnsDetails = async ({ provider, address, chainId }) => {
    try {
        if (!chainId) {
            return {
                name: "",
                avtar: "",
            };
        }

        console.log("chainId", chainId);

        if ([943, 369].includes(chainId)) {
            await PNSInstance.setProvider(provider);
            const profile = await PNSInstance.getProfile(
                address
                // account
            );

            const image = profile?.records?.texts?.find(
                (record) => record?.key === "avatar"
            );

            return {
                name: profile?.name,
                avtar: image?.value,
            };
        } else if ([1, 11155111].includes(chainId)) {
            let ensName = await provider.lookupAddress(address);
            let ensAvatarUrl = "";

            if (ensName) {
                ensAvatarUrl = await provider.getAvatar(ensName);
            }

            return {
                name: ensName,
                avtar: ensAvatarUrl,
            };
        } else if ([8453].includes(chainId)) {
            const provider = new ethers.providers.JsonRpcProvider(
                RPC_URLS[8453],
                {
                    name: "Base Mainnet",
                    chainId: 8453,
                    ensAddress: "0xeCBaE6E54bAA669005b93342E5650d5886D54fc7",
                }
            );
            let ensName = await provider.lookupAddress(address);
            let ensAvatarUrl = "";

            if (ensName) {
                ensAvatarUrl = await provider.getAvatar(ensName);
            }

            return {
                name: ensName,
                avtar: ensAvatarUrl,
            };
        }
    } catch (err) {
        console.log("err", err);
        return {
            name: "",
            avtar: "",
        };
    }
};

export const getRandom = (from = 0, to = 100) => {
    let x = Math.floor(Math.random() * (to - from + 1) + from);
    return x;
};

export const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    Toast.success("Copied");
};

export const Toast = {
    success: (text) =>
        toast.success(
            <div style={{ height: "100%" }}>
                <h6 style={{ color: "#000", marginBottom: 0 }}>Success</h6>
                {text}
            </div>
        ),
    error: (text) =>
        toast.error(
            <div style={{ height: "100%" }}>
                <h6 style={{ color: "#000", marginBottom: 0 }}>Alert</h6>
                {text}
            </div>
        ),
};

export const truncateAddress = (
    address,
    prefixLength = 5,
    suffixLength = 5
) => {
    if (!address) {
        return "";
    }
    const truncatedAddress =
        address.slice(0, prefixLength) + " ••• " + address.slice(-suffixLength);
    return truncatedAddress;
};

export const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}

export const convertSecondsToDate = (seconds) => {
    if (!seconds) return;
    const date = new Date(+seconds * 1000);
    return date;
};
