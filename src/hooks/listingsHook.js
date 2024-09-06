import { useMemo, useState } from "react"
import { useActiveWeb3React } from "./useActiveWeb3React";
import { OpenSeaSDK } from "opensea-js";
import { OPENSEA_API_URL, OPENSEA_CHAINS, OPENSEA_LISTING_FEE } from "@/constant";
import { ZeroAddress } from "ethers";



export const useOpenSeaListing = () => {

    const { signer, account, wallet, chain, library } = useActiveWeb3React();
    const [loading, setLoading] = useState(false);


    const sdk = useMemo(() => {
        if (!signer || !wallet || !chain?.id) return null;

        const openSeaSupportedChain = OPENSEA_CHAINS[chain?.id];

        if(!openSeaSupportedChain) return null;

        return new OpenSeaSDK(signer, {
            chain: openSeaSupportedChain,
            apiKey: process.env.OPENSEA_API_KEY,
            apiBaseUrl: OPENSEA_API_URL
        }, (line) => console.info(`MAINNET: ${line}`),);
    }, [signer, wallet, chain]);



    const listOnOpenSea = async ({ 
        itemCollection,
        tokenId,
        endTime = Math.round(Date.now() / 1000 + 60 * 60 * 24),
        price,
        currency = ZeroAddress,
        quantity = "1"
    }) => {

        const listingTime =  Math.round(Date.now() / 1000 + 60 * 0.5);

        const listing = {
            accountAddress: account,
            listingTime: listingTime,
            startAmount: price,
            expirationTime: endTime,
            asset: {
                tokenAddress: itemCollection,
                tokenId: tokenId,
            },
            paymentTokenAddress: currency,
            quantity
        };
        try {
            setLoading(true);
            const response = await sdk.createListing(listing);
            console.log("Successfully created a listing with orderHash:", response.orderHash);
        } catch (error) {
            console.error("Error in listOnOpenSea:", error);
        } finally {
            setLoading(false);
        }
    }

    return {
        loading,
        isSupportedChain: sdk ? true : false,
        fee: OPENSEA_LISTING_FEE,
        listOnOpenSea
    }

}
