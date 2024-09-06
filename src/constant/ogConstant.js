export const CHAIN_LOGO = {
    // 943: "/images/pulsechain-icon.svg",
    369: "/images/LogoVectorPulseChain.svg",
    // 1: "/images/ethe-icon-blue.svg",
    1: "/images/ethereum-icon.svg",
    8453: "/images/base-icon.svg",
};

export const FRONT_END_DOMAIN = "https://for-og-zeta.vercel.app";

export const GET_CHAIN_NAMES = {
    369: "PulseChain",
    8453: "Base",
    1: "Ethereum",
};

export const OgCountParser = (value, fixTo = 2, length = 1) => {
    const numberValue = Number(value);

    if (isNaN(numberValue)) return "0";
    if (numberValue === 0) return "0";

    const formatNumber = (num, divisor, suffix) => {
        const formatted = (num / divisor).toFixed(length);
        return (parseFloat(formatted) >= 1000 ? "999.9" : formatted) + suffix;
    };

    if (numberValue >= 1000000000) {
        return formatNumber(numberValue, 1000000000, "B");
    } else if (numberValue >= 1000000) {
        return formatNumber(numberValue, 1000000, "M");
    } else if (numberValue >= 1000) {
        return formatNumber(numberValue, 1000, "k");
    } else {
        return Number.isInteger(numberValue)
            ? numberValue.toString()
            : numberValue.toFixed(fixTo);
    }
};

export const RPC_URLS = {
    369: "https://rpc.pulsechain.com",
    1: "https://1.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
    8453: "https://8453.rpc.thirdweb.com/278d8a2ed6aa9f67ac7c1fd654804a9b",
};
