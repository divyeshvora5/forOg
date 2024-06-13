import { NATIVE_CURRENCY_DECIMALS, client } from "@/constant/walletPrefrences";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NATIVE_TOKEN_ADDRESS, getContract, toTokens } from "thirdweb";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { balanceOf, decimals } from "thirdweb/extensions/erc20"
import ABI from "@/abi/Token.json";


const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
})

export const useBalance = ({ chainId, address, wallet }) => {

    const [balance, setBalance] = useState();
    const [rawValue, setRawValue] = useState();
    const [loading, setLoading] = useState(false);

    const provider = useMemo(() => {
        if (!chainId) return null;
        return ethers5Adapter.provider.toEthers({
            client: client,
            chain: chainId,
        })
    }, [client, chainId]);


    const getBalance = useCallback(async () => {
        try {
            if (!provider || !chainId) return;
            setLoading(true);
            if (address === NATIVE_TOKEN_ADDRESS) {
                const result = await provider.getBalance(wallet?.address);
                const value = toTokens(result, NATIVE_CURRENCY_DECIMALS[chainId?.id])
                return setBalance(formatter.format(value || 0));
            }

            const contract = getContract({
                client: client,
                chain: chainId,
                address: address,
                abi: ABI
            })

            const [bal, decimal] = await Promise.all([
                balanceOf({
                    contract: contract,
                    address: wallet?.address
                }),
                decimals({
                    contract
                })
            ])
            const balValue = toTokens(bal?.toString(), decimal);
            setRawValue(balValue);
            setBalance(formatter.format(balValue || 0))
        } catch (err) {
            console.log('err', err)
        } finally {
            setLoading(false);
        }
    }, [provider, chainId, wallet, address])


    useEffect(() => {
        getBalance()
    }, [getBalance]);


    return { balance, rawValue, loading };
}