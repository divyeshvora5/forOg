import { CHAIN_WITH_LOGO } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { globalState, setChainId } from "@/redux/reducer/globalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "@/utils";

const ChainSelector = () => {
    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);
    const dispatch = useDispatch();
    const { switchNetwork } = useActiveWeb3React();

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
    return (
        <>
            {CHAIN_WITH_LOGO.map((chain, index) => (
                <div className="radio-filter-block" key={index}>
                    <input
                        type="radio"
                        id={chain.name}
                        name={chain.name}
                        checked={chain.chainId === chainId}
                        onChange={() => changeChain(chain.chainId)}
                    />
                    <label for={chain.name}>
                        <img src={chain.logo} alt="check-icon"></img>
                        <h4>{chain.name}</h4>
                    </label>
                </div>
            ))}
        </>
    );
};

export default ChainSelector;
