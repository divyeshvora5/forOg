import { WALLET_PREFERENCES, client } from "@/constant/walletPrefrences";
import { marketState } from "@/redux/reducer/marketSlice";
// import {
// 	NATIVE_TOKEN_ADDRESS,
// 	useAddress,
// 	useBalance,
// 	useConnect,
// 	useDisconnect,
// 	useSDK,
// 	useSigner,
// 	useSwitchChain,
// 	useWallet,
// 	useConnectionStatus,
// 	useChainId,
// 	useWalletConfig,
// 	useENS,
// } from "@thirdweb-dev/react";
import { useSelector } from "react-redux";
import {
	useActiveAccount,
	useActiveWallet,
	useActiveWalletChain,
	useActiveWalletConnectionStatus,
	useConnect,
	useDisconnect,
	useSwitchActiveWalletChain
} from "thirdweb/react";
import { ethers6Adapter } from 'thirdweb/adapters/ethers6'

import { useCallback, useEffect, useMemo, useState } from "react";
import { NATIVE_TOKEN_ADDRESS, toTokens } from "thirdweb";
import { useBalance } from "./useBalance";
import { signMessage } from "thirdweb/utils";
// import { useSelector } from "react-redux";

export function useActiveWeb3React() {

	const [signer, setSigner] = useState()


	const { connect } = useConnect();
	const { disconnect } = useDisconnect();
	const { tokenAddress } = useSelector(marketState);

	const wallet = useActiveAccount();
	const chainId = useActiveWalletChain();
	const walletDetails = useActiveWallet();
	const connectionStatus = useActiveWalletConnectionStatus();
	const switchNetwork = useSwitchActiveWalletChain();


	// const sdk = useSDK();
	// const walletInstance = useWallet();
	// const ens = useENS();



	const provider = useMemo(() => {
		if (!chainId) return null;
		return ethers6Adapter.provider.toEthers({
			client: client,
			chain: chainId,
		})
	}, [client, chainId]);


	useEffect(() => {

		if (!client || !chainId || !wallet) return;

		(() => {
			try {
				const ethersSigner = ethers6Adapter.signer.toEthers({
					client: client,
					chain: chainId,
					account: wallet
				});

				setSigner(ethersSigner);
			} catch (err) {
				console.log('err', err)
			}
		})()

	}, [client, chainId, wallet])






	const { balance, rawValue } = useBalance({
		chainId: chainId?.id,
		wallet: wallet,
		address: tokenAddress || NATIVE_TOKEN_ADDRESS
	})


	// console.log('balance', balance)



	// console.log('wallet', wallet);
	// console.log('chainId', chainId);
	// console.log('connectionStatus', connectionStatus);
	// console.log('walletDetails', walletDetails)


	if (wallet?.address && chainId) {
		return {
			activate: connect,
			deactivate: disconnect.bind(null, walletDetails),
			signMessage: wallet?.signMessage.bind(wallet),
			account: wallet?.address,
			wallet: wallet,
			chainId: chainId?.id,
			chain: chainId,
			active: true,
			library: provider, //library?.provider,
			error: '',
			balance: balance,
			rawBalanceValue: rawValue,
			switchNetwork,
			sdk: '',
			status: connectionStatus,
			signer: signer,
			walletName: WALLET_PREFERENCES[walletDetails?.id]?.name,
			walletImage: WALLET_PREFERENCES[walletDetails?.id]?.icon,
		};
	} else {
		return {
			activate: connect,
			deactivate: () => { },
			signMessage: () => { },
			account: null,
			chainId: null,
			chain: null,
			wallet: null,
			active: false,
			library: null,
			error: null,
			signer: null,
			balance: null,
			rawBalanceValue: null,
			switchNetwork: () => { },
			sdk: '',
			status: connectionStatus,
			walletName: null,
			walletImage: null,
		};
	}
}
