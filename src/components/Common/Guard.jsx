import { CHAIN_ARRAY, CHAIN_WITH_LOGO } from "@/constant";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { globalState } from "@/redux/reducer/globalSlice";

export default function Guard({ children }) {
	const { switchNetwork } = useActiveWeb3React();

	const {
		walletDetalis: { chainId, status },
	} = useSelector(globalState);


	console.log('chainIdInLAyout', chainId)

	useEffect(() => {
		if (!chainId || CHAIN_ARRAY.includes(chainId)) return;
		typeof switchNetwork === "function" && switchNetwork(CHAIN_WITH_LOGO[1].chainId);
	}, [chainId]);

	// if (!account && !availableChain) {
	// if (!account) {
	// 	return (
	// 		<>
	// 			<div className="d-flex justify-content-center align-items-center vh-100">
	// 				<h4>Wallet is not connected!!</h4>
	// 			</div>
	// 		</>
	// 	);
	// }

	if (!CHAIN_ARRAY.includes(chainId)) {
		return (
			<>
				<div className="d-flex justify-content-center align-items-center vh-100">
					{!status ? (
						<h4>Loading...</h4>
					) : (
						<h4>
							Please Select valid chain{" "}
							<span className="text-secondary">
								{" "}
								(PulseChainV4, Sepolia, Base Sepolia)
							</span>
							!!
						</h4>
					)}
				</div>
			</>
		);
	}

	return <div>{children}</div>;
}
