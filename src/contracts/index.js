import {
    TYPE,
    CONTRACTS_BY_NETWORK,
    NetworkParams,
    MARKETPLACE_CONTRACT_ADDRESS,
    ZERO_TOKEN_ADDRESS,
    ADDRESS_ZERO,
    RPC_URLS,
    MEMBERSHIP_CONTRACTS_ADDRESSES,
} from "@/constant";
import { BigNumber, Contract, ethers } from "ethers";
import TesseractXSingleNFTABI from "@/abi/TesseractXSingleNFT.json";
import TesseractXMultipleNFTABI from "@/abi/TesseractXMultipleNFT.json";
import TOKENABI from "@/abi/Token.json";
import { Toast, delay } from "@/utils";
import { getContract, prepareContractCall, readContract, resolveMethod, sendAndConfirmTransaction } from "thirdweb";
import { client } from "@/constant/walletPrefrences";
import { isApprovedForAll } from "thirdweb/extensions/erc1155";
import { allowance, decimals } from "thirdweb/extensions/erc20";
import { getAllValidAuctions, getAllValidListings, getAllValidOffers, getWinningBid } from "thirdweb/extensions/marketplace"

import MembershipAbi from '@/abi/Membership.json'

const increaseGasLimit = (estimatedGasLimit) => {
    return estimatedGasLimit.mul(130).div(100); // increase by 30%
};

const DELAY_MS = 5000;

export function parseToWei(amount, decimal) {
    return ethers.utils.parseUnits(String(amount), decimal);
}

export function getContractInfo({ name, chainId }) {
    return CONTRACTS_BY_NETWORK?.[name]?.[chainId];
}

export function getContractObj({ name, chain }) {

    const info = getContractInfo({ name, chainId: chain?.id });

    if (info) {
        const contract = getContract({
            client: client,
            chain,
            address: info.address,
            abi: info.abi
        });

        return contract;
    }

    return null;
}

export function getReadContractObj({ name, chainId, provider }) {
    let newProvider;
    if (provider) {
        newProvider = provider;
    } else {
        newProvider = new ethers.providers.JsonRpcProvider(
            NetworkParams[chainId]?.rpcUrls[0]
        );
    }

    const info = getContractInfo({ name, chainId });
    return info && new Contract(info.address, info.abi, newProvider);
}

export function getTokenContract({ address, chain }) {

    const contract = getContract({
        client: client,
        chain,
        address: address,
        abi: TOKENABI
    });

    return contract;
}
export async function createSingleCollection({
    name,
    uri,
    royaltyBps,
    chain,
    wallet
}) {
    const factoryContract = getContractObj({
        name: "TesseractNftFactory",
        chain: chain,
    });
    console.log("walletin", wallet);
    if (!factoryContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: factoryContract,
            method: resolveMethod('createSingleCollection'),
            params: [name, uri, royaltyBps]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })

        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function createMultipleCollection({
    name,
    uri,
    royaltyBps,
    chain,
    wallet
}) {
    const factoryContract = getContractObj({
        name: "TesseractNftFactory",
        chain: chain,
    });

    if (!factoryContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: factoryContract,
            method: resolveMethod('createMultipleCollection'),
            params: [name, uri, royaltyBps]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })

        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function createCollection({
    type,
    name,
    uri,
    royaltyBps,
    wallet,
    chain,
}) {

    console.log('wallet', wallet)
    if (type === TYPE.SINGLE) {
        console.log("type", type);
        let result = await createSingleCollection({
            name: name,
            uri: uri,
            royaltyBps: royaltyBps,
            wallet: wallet,
            chain: chain,
        });
        return result;
    } else if (type === TYPE.MULTI) {
        let result = createMultipleCollection({
            name: name,
            uri: uri,
            royaltyBps: royaltyBps,
            wallet: wallet,
            chain: chain,
        });
        return result;
    } else {
        return false;
    }
}

export function getCollectionContract({ type, address, chain }) {

    if (type == TYPE.SINGLE) {
        return getContract({
            client: client,
            chain,
            address: address,
            abi: TesseractXSingleNFTABI
        })
    } else if (type == TYPE.MULTI) {
        return getContract({
            client: client,
            chain,
            address: address,
            abi: TesseractXMultipleNFTABI
        });
    }
    return null;
}

export async function addSingleItem({
    collectionAddress,
    uri,
    wallet,
    chain,
}) {
    const singleNftContarct = getCollectionContract({
        type: TYPE.SINGLE,
        address: collectionAddress,
        chain: chain,
    });

    if (!singleNftContarct) return false;
    try {
        const transaction = prepareContractCall({
            contract: singleNftContarct,
            method: resolveMethod('addItem'),
            params: [uri]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function addMultiItem({
    collectionAddress,
    uri,
    supply,
    wallet,
    chain,
}) {
    const multiNftContarct = getCollectionContract({
        type: TYPE.MULTI,
        address: collectionAddress,
        chain: chain,
    });

    if (!multiNftContarct) return false;
    try {
        const transaction = prepareContractCall({
            contract: multiNftContarct,
            method: resolveMethod('addItem'),
            params: [supply, uri]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function collectionUriUpdate({
    collectionAddress,
    uri,
    type,
    wallet,
    chain,
}) {
    const contract = getCollectionContract({
        type: type,
        address: collectionAddress,
        chain: chain,
    });

    if (!contract) return false;
    try {
        const transaction = prepareContractCall({
            contract: contract,
            method: resolveMethod('setCollectionURI'),
            params: [uri]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

//marketplace

export async function isNFTApproved({
    type,
    collection,
    to,
    account,
    chain,
    tokenId,
}) {
    const nftToken = getCollectionContract({
        type,
        address: collection,
        chain,
    });
    if (!nftToken) return false;
    if (type === TYPE.SINGLE) {

        return await readContract({
            contract: nftToken,
            method: resolveMethod('getApproved'),
            params: [tokenId],
        })

    }
    return await isApprovedForAll({
        contract: nftToken,
        owner: account,
        operator: to,
    })
}

export async function setNFTApproval({
    type,
    collection,
    to,
    wallet,
    chain,
    tokenId,
}) {
    const nftToken = getCollectionContract({
        type,
        address: collection,
        chain,
    });
    if (!nftToken) return false;
    try {
        //for single approve(to, tokenId)
        if (type === TYPE.SINGLE) {

            const transaction = prepareContractCall({
                contract: nftToken,
                method: resolveMethod('approve'),
                params: [to, tokenId]
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet
            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                return true;
            }
            return false;
        }

        const transaction = prepareContractCall({
            contract: nftToken,
            method: resolveMethod('setApprovalForAll'),
            params: [to, true]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
    }
    return false;
}

export async function isTokenApproved({
    account,
    tokenAddr,
    amount,
    toAddr,
    chain,
}) {
    if (tokenAddr === ZERO_TOKEN_ADDRESS) {
        return true;
    }
    const tokenContract = getTokenContract({
        address: tokenAddr,
        chain: chain,
    });
    if (!tokenContract) return false;

    const decimal = await decimals({
        contract: tokenContract
    });
    const value = await allowance({
        contract: tokenContract,
        owner: account,
        spender: toAddr,
    })

    if (BigNumber.from(parseToWei(amount, decimal)).gt(value)) {
        return false;
    }
    return true;
}
export async function approveToken({ tokenAddr, toAddr, chain, wallet }) {
    const tokenContract = getTokenContract({
        address: tokenAddr,
        chain: chain,
    });
    if (!tokenContract) return false;

    const approveAmount =
        "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
    try {
        const transaction = prepareContractCall({
            contract: tokenContract,
            method: resolveMethod('approve'),
            params: [toAddr, approveAmount]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        return false;
    }
}

export async function approveNFTOnMarket({
    type,
    collection,
    account,
    chain,
    wallet,
    tokenId,
}) {
    const to = MARKETPLACE_CONTRACT_ADDRESS[chain?.id];

    if (!to) return false;
    try {
        let isApproved = await isNFTApproved({
            type,
            collection,
            to,
            account,
            chain,
            tokenId,
        });
        if (isApproved && isApproved !== ADDRESS_ZERO) {
            return true;
        } else {
            isApproved = await setNFTApproval({
                type,
                collection,
                to,
                wallet,
                chain,
                tokenId,
            });
            if (isApproved) {
                return true;
            } else {
                return false;
            }
        }
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
    }
}

export async function addToListing({ chain, payload, wallet }) {
    // Marketplace
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });

    if (!marketPlaceContract) return false;

    try {

        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('createListing'),
            params: [payload],
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet,
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;

    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function buyFromListing({
    chain,
    currency,
    listingId,
    account,
    price,
    quantity,
    currencyDecimals,
    wallet
}) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });

    if (!marketPlaceContract) return false;
    try {
        if (currency?.toLowerCase() === ZERO_TOKEN_ADDRESS) {
            

            const transaction = prepareContractCall({
                contract: marketPlaceContract,
                method: resolveMethod('buyFromListing'),
                params: [
                    listingId,
                    account,
                    quantity,
                    currency,
                    parseToWei(Number(price) * Number(quantity), currencyDecimals)
                ],
                value: parseToWei(Number(price) * Number(quantity), currencyDecimals)
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet,

            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                await delay(DELAY_MS);
                return true;
            }
            return false;
        } else {
            const Token = getTokenContract({
                address: currency,
                chain: chain,
            });
            if (!Token) return false;

            let tokenApproveStatus = await isTokenApproved({
                account,
                tokenAddr: currency,
                amount: parseToWei(
                    Number(price) * Number(quantity),
                    currencyDecimals
                ),
                toAddr: marketPlaceContract.address,
                chain,
            });
            console.log("tokenApproveStatus", tokenApproveStatus);
            if (!tokenApproveStatus) {
                tokenApproveStatus = await approveToken({
                    tokenAddr: currency,
                    toAddr: marketPlaceContract.address,
                    chain,
                    wallet: wallet,
                });
            }

            console.log("tokenApproveStatus", tokenApproveStatus);
            if (tokenApproveStatus) {
                const value =
                    currency !== ZERO_TOKEN_ADDRESS
                        ? 0
                        : parseToWei(price, currencyDecimals);

                const transaction = prepareContractCall({
                    contract: marketPlaceContract,
                    method: resolveMethod('buyFromListing'),
                    params: [
                        listingId,
                        account,
                        quantity,
                        currency,
                        parseToWei(price, currencyDecimals)
                    ],
                    value: value
                })

                const transactionResult = await sendAndConfirmTransaction({
                    transaction: transaction,
                    account: wallet
                })
                console.log('transactionResult', transactionResult)
                if (transactionResult.status === 'success') {
                    await delay(DELAY_MS);
                    return true;
                }
                return false;
            }
        }
    } catch (err) {
        if (err.reason) {
           return Toast.error(err.reason);
        }

        Toast.error(err.message);
        console.log('first', Object.keys(err))
        console.log('err.name', {
            ...err
        })
        console.log('err.reason', err.reason)
        console.log("err", err.message);
        console.log('errfull', err)
        return false;
    }
}

//auction
export async function createAuction({ chain, payload, wallet }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('createAuction'),
            params: [payload]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function placeBidInAuction({
    chain,
    payload,
    currency,
    account,
    wallet
}) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    console.log("currency", currency);
    try {
        const Token = getTokenContract({
            address: currency?.address,
            chain: chain,
        });
        if (!Token) return false;

        let tokenApproveStatus = await isTokenApproved({
            account,
            tokenAddr: currency?.address,
            amount: payload?._bidAmount,
            toAddr: marketPlaceContract.address,
            chain,
        });

        if (!tokenApproveStatus) {
            tokenApproveStatus = await approveToken({
                tokenAddr: currency?.address,
                toAddr: marketPlaceContract.address,
                chain,
                wallet
            });
        }
        if (tokenApproveStatus) {
            const value =
                currency?.address !== ZERO_TOKEN_ADDRESS
                    ? 0
                    : parseToWei(
                        payload?._bidAmount,
                        currency?.decimals
                    );

            console.log("value", value);

            const transaction = prepareContractCall({
                contract: marketPlaceContract,
                method: resolveMethod('bidInAuction'),
                params: [payload?._auctionId, parseToWei(payload?._bidAmount, currency?.decimals)],
                value: value
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet
            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                await delay(DELAY_MS);
                return true;
            }
            return false;
        }
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function cancleListing({ chain, payload, wallet }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('cancelListing'),
            params: [payload]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function cancleAuction({ chain, payload, wallet }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('cancelAuction'),
            params: [payload]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function collectAuctionPayout({ chain, wallet, auctionId }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('collectAuctionPayout'),
            params: [auctionId]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;

    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function collectAuctionTokens({ chain, auctionId, wallet }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('collectAuctionTokens'),
            params: [auctionId]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;

    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

//offer
export async function makeOffer({ chain, payload, account, wallet }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const Token = getTokenContract({
            address: payload?.currency,
            chain: chain,
        });
        if (!Token) return false;

        let tokenApproveStatus = await isTokenApproved({
            account,
            tokenAddr: payload?.currency,
            amount: payload?.totalPrice,
            toAddr: marketPlaceContract.address,
            chain,
        });

        if (!tokenApproveStatus) {
            tokenApproveStatus = await approveToken({
                tokenAddr: payload?.currency,
                toAddr: marketPlaceContract.address,
                chain,
                wallet: wallet
            });
        }

        console.log("tokenApproveStatus", tokenApproveStatus);

        if (tokenApproveStatus) {
            const transaction = prepareContractCall({
                contract: marketPlaceContract,
                method: resolveMethod('makeOffer'),
                params: [payload]
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet
            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                await delay(DELAY_MS);
                return true;
            }
            return false;

        }
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function cancelOffer({ wallet, chain, offerId }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('cancelOffer'),
            params: [offerId]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function acceptOffer({ wallet, chain, offerId }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return false;
    try {
        const transaction = prepareContractCall({
            contract: marketPlaceContract,
            method: resolveMethod('acceptOffer'),
            params: [offerId]
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;

    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}

export async function getValidOffer({ offerId, chain }) {
    try {
        const marketPlaceContract = getContractObj({
            name: "Marketplace",
            chain: chain,
        });

        if (!marketPlaceContract) return null;
        const result = await getAllValidOffers({
            contract: marketPlaceContract,
            start: offerId,
            count: 1
        })

        console.log("result", result);
        if (result?.length) {
            // uint256 offerId;
            // address offeror;
            // address assetContract;
            // uint256 tokenId;
            // uint256 quantity;
            // address currency;
            // uint256 totalPrice;
            // uint256 expirationTimestamp;
            // TokenType tokenType;
            // Status status;
            return {
                currency: result[0]?.currencyContractAddress?.toLowerCase(),
                endTimestamp: Math.floor(
                    Number(result[0]?.endTimeInSeconds) * 1000
                ),
                offeror: result[0]?.offerorAddress?.toLowerCase(),
                offerId: result[0].id?.toString(),
                price: result[0]?.totalPrice?.toString(),
                quantity: result[0]?.quantity?.toString(),
                tokenId: result[0]?.tokenId?.toString(),
            };
        } else {
            return null;
        }
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
    }
}
// read data from contract
export async function getValidListingNft({ listingId, chain }) {
    try {
        console.log("listingId", listingId);
        const marketPlaceContract = getContractObj({
            name: "Marketplace",
            chain: chain,
        });

        if (!marketPlaceContract) return null;
        console.log("marketPlaceContract", marketPlaceContract);
        const result = await getAllValidListings({
            contract: marketPlaceContract,
            start: listingId,
            count: 1
        });
        console.log("result", result);
        if (result?.length) {
            return {
                currency: result[0]?.currencyContractAddress?.toLowerCase(),
                endTimestamp: Math.floor(
                    Number(result[0]?.endTimeInSeconds) * 1000
                ),
                listingCreator: result[0]?.creatorAddress?.toLowerCase(),
                listingId: result[0]?.id?.toString(),
                pricePerToken: result[0]?.pricePerToken?.toString(),
                quantity: result[0]?.quantity?.toString(),
                tokenId: result[0]?.tokenId?.toString(),
            };
        } else {
            return null;
        }
    } catch (err) {
        console.log("err", err);
    }
}

// auction info
export async function getValidAuction({ auctionId, chain }) {
    try {
        // console.log("chain", chain);
        const marketPlaceContract = getContractObj({
            name: "Marketplace",
            chain: chain,
        });
        // console.log("auctionId", auctionId);
        // console.log("marketPlaceContract", marketPlaceContract);
        if (!marketPlaceContract) return null;
        const result = await getAllValidAuctions({
            contract: marketPlaceContract,
            start: auctionId,
            count: 1
        });
        // console.log("result", result);
        if (result?.length) {
            return {
                currency: result[0]?.currencyContractAddress?.toLowerCase(),
                endTimestamp: Math.floor(
                    Number(result[0]?.endTimeInSeconds) * 1000
                ),
                auctionCreator: result[0]?.creatorAddress?.toLowerCase(),
                auctionId: result[0]?.id?.toString(),
                bidBufferBps: result[0]?.bidBufferBps?.toString(),
                minimumBidAmount: result[0]?.minimumBidAmount?.toString(),
                buyoutBidAmount: result[0]?.buyoutBidAmount?.toString(),
                quantity: result[0]?.quantity?.toString(),
                tokenId: result[0]?.tokenId?.toString(),
            };
        } else {
            // await deleteFromAuctionService(auctionId);
            return null;
        }
    } catch (err) {
        console.log("err", err);
    }
}

export async function getlatestBid({ auctionId, chain }) {
    try {
        const marketPlaceContract = getContractObj({
            name: "Marketplace",
            chain: chain,
        });
        if (!marketPlaceContract) return null;
        const result = await getWinningBid({
            contract: marketPlaceContract,
            auctionId: auctionId
        });
        return {
            bidAmount: result?.bidAmountWei?.toString(),
            bidder: result?.bidderAddress?.toLowerCase(),
            currency: result?.currencyAddress?.toLowerCase(),
        };
    } catch (err) {
        console.log("err", err);
    }
}
export async function getPlatformFeeInfo({ chain }) {
    const marketPlaceContract = getContractObj({
        name: "Marketplace",
        chain: chain,
    });
    if (!marketPlaceContract) return null;
    try {
        const result = await readContract({
            contract: marketPlaceContract,
            method: resolveMethod('getPlatformFeeInfo'),
            params: [],
        });
        return result[1]
    } catch (err) {
        console.log("err", err);
        return 0;
    }
}

export async function getDefaultRoyaltyInfo({
    type,
    address,
    chain,
}) {
    const collectionContract = getCollectionContract({
        type,
        address,
        chain,
    });
    if (!collectionContract) return null;
    try {
        const result = await readContract({
            contract: collectionContract,
            method: resolveMethod('getDefaultRoyaltyInfo'),
            params: [],
        });
        console.log('royaltiresult', result)
        return result[1] / 100;
    } catch (err) {
        console.log("err", err);
        return 0;
    }
}

//fetch balance
export async function getBalanceInfo({
    type,
    collection,
    chain,
    account,
    tokenId,
}) {
    // console.log("{first}", {
    //     type,
    //     collection,
    //     provider,
    //     chainId,
    //     account,
    //     tokenId,
    // });
    const nftToken = getCollectionContract({
        type,
        address: collection,
        chain,
    });
    if (!nftToken) return false;
    try {
        const args = type === TYPE.SINGLE ? [account] : [account, tokenId];

        const result = await readContract({
            contract: nftToken,
            method: resolveMethod('balanceOf'),
            params: args
        });

        return result;
    } catch (err) {
        console.log("err", err);
        return 0;
    }
}

//import collection
export async function isNFTAddress({ address, chainId }) {

    const provider = new ethers.providers.JsonRpcProvider(RPC_URLS[chainId]);

    const nftToken = new Contract(address, TesseractXSingleNFTABI, provider);

    console.log("nftToken1", nftToken);

    if (!nftToken) return false;
    try {
        nftToken
            .supportsInterface("0x01ffc9a7")
            .then((data) => {
                console.log("data", data);
            })
            .catch((err) => {
                console.log("err", err);
            });

        const result = await nftToken.supportsInterface("0x01ffc9a7");
        console.log("result", result);
        return result;
    } catch (e) {
        console.log("e", e);
        return false;
    }
}

export async function importCollection({
    address,
    name,
    uri,
    chain,
    wallet
}) {
    const importContract = getContractObj({
        name: "AddNFTCollection",
        chain: chain,
    });

    if (!importContract) return false;
    try {
        const publicAdd = await readContract({
            contract: importContract,
            method: "publicAdd",
            params: [],
        })
        if (publicAdd) {
            var fee = await readContract({
                contract: importContract,
                method: "fee",
                params: [],
            });

            const transaction = prepareContractCall({
                contract: importContract,
                method: resolveMethod('importCollection'),
                params: [
                    [address],
                    [name],
                    [uri]
                ],
                value: fee
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet
            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                return true;
            }
            return false;
           
        } else {
            const transaction = prepareContractCall({
                contract: importContract,
                method: resolveMethod('importCollection'),
                params: [
                    [address],
                    [name],
                    [uri]
                ],
            })

            const transactionResult = await sendAndConfirmTransaction({
                transaction: transaction,
                account: wallet
            })
            console.log('transactionResult', transactionResult)
            if (transactionResult.status === 'success') {
                await delay(DELAY_MS);
                return true;
            }
            return false;
           
        }
    } catch (e) {
        console.log(e);
        return false;
    }
}

//membership

export function getMemberShipContract({ chain, period, type }) {
    console.log('period', period)

    console.log('MEMBERSHIP_CONTRACTS_ADDRESSES[chain?.id]', MEMBERSHIP_CONTRACTS_ADDRESSES[chain?.id])

    const address = MEMBERSHIP_CONTRACTS_ADDRESSES[chain?.id] ? MEMBERSHIP_CONTRACTS_ADDRESSES[chain?.id][type][period] : null;

    if(!address) return;

    const contract = getContract({
        client: client,
        chain,
        address: address,
        abi: MembershipAbi
    });

    return contract;
}

export async function subscribeMemberShip({ wallet, chain, period, type, value, currency, currencyDecimals = 18 }) {
    const memberShipContract = getMemberShipContract({
        chain,
        period,
        type
    });
    if (!memberShipContract) return false;
    try {
        const LocalValue =
                    currency !== ZERO_TOKEN_ADDRESS
                        ? 0
                        : parseToWei(value, currencyDecimals);

        const transaction = prepareContractCall({
            contract: memberShipContract,
            method: resolveMethod('purchase'),
            params: [
                [parseToWei(value, currencyDecimals)],
                [wallet?.address],
                [wallet?.address],
                [wallet?.address],
                ["0x00"],
            ],
            value: LocalValue
        })

        const transactionResult = await sendAndConfirmTransaction({
            transaction: transaction,
            account: wallet
        })
        console.log('transactionResult', transactionResult)
        if (transactionResult.status === 'success') {
            await delay(DELAY_MS);
            return true;
        }
        return false;
    } catch (err) {
        if (err.reason) {
            Toast.error(err.reason);
        }
        console.log("err", err);
        return false;
    }
}