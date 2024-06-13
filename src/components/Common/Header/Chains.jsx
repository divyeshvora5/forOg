import { CHAIN_WITH_LOGO } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import {
    globalState,
    setChainId,
    setWalletDetails,
} from "@/redux/reducer/globalSlice";
import { DISABLE_CHAINS_SELECTION_ROUTE } from "@/routes/paths";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "@/utils";

const Chains = () => {
    const { switchNetwork } = useActiveWeb3React();
    const dispatch = useDispatch();
    const router = useRouter();

    const [hide, setHide] = useState(false);

    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);

    const changeChain = async (value) => {
        try {
            if (value?.id !== "All") {
            	await switchNetwork(value);
            }
            dispatch(setChainId(value?.id));
        } catch (err) {
            console.log("err", err);
            Toast.error("user reject transaction");
        }
    };

    useEffect(() => {
        if (!router.isReady) return;

        if (DISABLE_CHAINS_SELECTION_ROUTE[router.pathname]) {
            return setHide(true);
        }
        setHide(false);
    }, [router]);

    return (
        <>
            {!hide && (
                <div className="header-button">
                    {CHAIN_WITH_LOGO.map((chain, index) => {
                        return (
                            <button
                                onClick={() => changeChain(chain.chainId)}
                                className={`${
                                    chain.chainId?.id == chainId ? "selected" : ""
                                }`}
                                key={index}
                            >
                                <Image
                                    height={20}
                                    width={20}
                                    src={chain.logo}
                                    alt="header-button-icon"
                                />
                                <span>{chain.name}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Chains;
