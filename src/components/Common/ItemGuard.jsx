import { CHAIN_NAME } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import React from "react";

const ItemGuard = ({ children, chainId }) => {
	const {
		switchNetwork,
		chainId: currentChainId,
		account,
	} = useActiveWeb3React();

	if (!chainId) {
		return (
			<>
				<div className="d-flex justify-content-center align-items-center vh-100">
					<h4>Loading...</h4>
				</div>
			</>
		);
	}

	if (!account) {
		return (
			<>
				<div className="d-flex justify-content-center align-items-center vh-100">
					<h4>Wallet is not connected!!</h4>
				</div>
			</>
		);
	}

	if (currentChainId !== chainId) {
		return (
			<div className="d-flex justify-content-center align-items-center vh-100">
				<h4>
					Please Select {CHAIN_NAME[chainId]} chain{" "}
					<button
						onClick={() => switchNetwork(chainId)}
						className="text-secondary"
					>
						{CHAIN_NAME[chainId]}
					</button>
					!!
				</h4>
			</div>
		);
	}

	return children;
};

export default ItemGuard;
