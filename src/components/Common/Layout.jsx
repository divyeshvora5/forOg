import Header from "./Header/Header";
import Footer from "./Footer";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
    getCategoryActions,
    getTokenRate,
    getTokensActions,
    getUserAction,
    getUserBalance,
} from "@/redux/actions/globalAction";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { setSocket, setWalletDetails } from "@/redux/reducer/globalSlice";
import { RPC_URLS, WALLETNOTIFICATION_ENV, WALLET_NOTIFICATION_CHANNEL } from "@/constant";
import io from "socket.io-client";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { ethers5Adapter } from "thirdweb/adapters/ethers5";
import { client } from "@/constant/walletPrefrences";
import { CONSTANTS, PushAPI } from "@pushprotocol/restapi";
import { Toast } from "@/utils";
import { signForWalletConnect } from "@/redux/services/signService";
const SuccessAnimation = dynamic(
    () => import("@/components/Common/Success/successAnimation"),
    { ssr: false }
);
const ErrorAnimation = dynamic(
    () => import("@/components/Common/ErrorAnimation/ErrorAnimation"),
    { ssr: false }
);

const Layout = ({ children }) => {
    const { account, chainId, status, wallet, chain } = useActiveWeb3React();
    const dispatch = useDispatch();
    const parts = process.env.API_URL.split("/");
    const baseUrl = parts.slice(0, 3).join("/");
    const [referralCode, setReferralCode] = useState();
    const router = useRouter();

    const chains = useMemo(() => {
        if (!router.isReady) {
            return [];
        }
        return Object.keys(RPC_URLS);
    }, [router.isReady]);

    useEffect(() => {
        if (!router.isReady || !router.query.ref) return;
        setReferralCode(router.query.ref);
    }, [router.isReady, router.query]);

    useEffect(() => {
        if (!chains.length) return;
        dispatch(getTokenRate({ chainIds: chains }));
    }, [chains]);

    useEffect(() => {
        let timer;
        if (!chains.length) return;
        timer = setInterval(() => {
            dispatch(getTokenRate({ chainIds: chains }));
        }, 60000);
        return () => clearInterval(timer);
    }, [chains]);

    useEffect(() => {
        if (status === "connecting") return;
        if (status === "connected" && account && chainId) {
            try {
                let payload = {
                    account,
                };
                if (referralCode) {
                    payload.params = {
                        referralCode,
                    };
                }

                dispatch(
                    setWalletDetails({
                        account: account?.toLowerCase(),
                        chainId: chainId,
                        status: "connected",
                    })
                );
                dispatch(getUserAction(payload));
                // dispatch(getTokenRate({ chainIds: chains }));
                chains.forEach((chain) => {
                    dispatch(
                        getUserBalance({
                            chainId: chain,
                            account: account,
                        })
                    );
                });
            } catch (err) {
                console.log('err', err);
            }
        } else {
            dispatch(
                setWalletDetails({
                    account: null,
                    chainId: "All",
                    status: "disconnected",
                })
            );
        }
        if (chainId && chainId !== "All") {
            dispatch(
                getTokensActions({
                    chainId: chainId,
                })
            );
        }
    }, [chainId, account]);

    useEffect(() => {
        if (!account) return;
        const newSocket = io(baseUrl);
        dispatch(setSocket(newSocket));
        return () => {
            newSocket.disconnect();
        };
    }, [account]);

    useEffect(() => {
        dispatch(getCategoryActions());
    }, []);


    useEffect(() => {
        if (!wallet || !chainId) return;

        (async () => {
            try {
                const userAccount = localStorage.getItem('connectedWallet');
                if (userAccount === wallet?.address) return;

                const reloadGet = localStorage.getItem('reload');
                if(reloadGet !== wallet.address) {
                    localStorage.setItem('reload', wallet?.address);
                    window.location.reload();
                    return;
                }   


                const msg = `I want to sign account details with this information: ${chainId}:${wallet?.address}`;

                const signature = await wallet.signMessage({
                    message: msg
                });

                if (!signature) {
                    return Toast.error("Signing failed!");
                }

                const { data } = await signForWalletConnect({
                    chainId,
                    account:wallet?.address,
                    signature,
                });
                if (!data?.status) {
                    return Toast.error(data.message);
                }
                localStorage.setItem('connectedWallet', wallet?.address);
            } catch (err) {
                console.log('err', err)
            }
        })()

    }, [wallet, chainId])

    // useEffect(() => {
    //     if(!wallet || !chain || !WALLET_NOTIFICATION_CHANNEL[chain?.id]) return;
    //     let stream;
    //     (async () => {
    //         try {
    //             const ethersSigner = await ethers5Adapter.signer.toEthers({
    //                 client: client,
    //                 chain,
    //                 account: wallet
    //             })
    //             const userAlice = await PushAPI.initialize(ethersSigner, {
    //                 env: WALLETNOTIFICATION_ENV,
    //             });

    //             const aliceSubscriptions = await userAlice.notification.subscriptions();

    //             console.log('aliceSubscriptions', aliceSubscriptions)

    //             if(WALLET_NOTIFICATION_CHANNEL[chain?.id] && Array.isArray(aliceSubscriptions) && !aliceSubscriptions.find(ele => ele?.channel?.toLowerCase() === WALLET_NOTIFICATION_CHANNEL[chain?.id]?.toLowerCase() )) {
    //                 const res =  await userAlice.notification.subscribe(`eip155:${chain?.id}:${WALLET_NOTIFICATION_CHANNEL[chain?.id]}`, {
    //                     // settings: [
    //                     //     // settings are dependent on channel
    //                     //     { enabled: true, value: '1' }, // setting 1
    //                     //     { enabled: false }, // setting 2
    //                     //     { enabled: true, value: '50' }, // setting 3
    //                     //   ],
    //                 });
    //             }

    //             const stream = await userAlice.initStream([CONSTANTS.STREAM.NOTIF]);

    //             // Set stream event handling
    //             stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
    //                 console.log(data);
    //             });

    //             // Connect to stream
    //             stream.connect();

    //         } catch (err) {
    //             console.log('err', err)
    //         }
    //     })();

    //     return () => stream ? stream?.disconnect(): null;
    // },[chain, wallet])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                icon={({ type, icon }) => {
                    switch (type) {
                        case "success":
                            return <SuccessAnimation />;
                        case "error":
                            return <ErrorAnimation />;
                        default:
                            return icon;
                    }
                }}
            />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
