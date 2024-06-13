import { MEMBERSHIP, SUBSCRIPTION, ZERO_TOKEN_ADDRESS } from "@/constant";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useActiveWeb3React } from "./useActiveWeb3React";
import { getMemberShipContract } from "@/contracts";
import { readContract, toUnits } from "thirdweb";
import { fromWei } from "@/utils";
import { purchaseMembership } from "@/redux/actions/marketAction";
import { useDispatch } from "react-redux";

export const useMembership = () => {
    const { chain, wallet, signMessage, account } = useActiveWeb3React();
    const dispatch = useDispatch();
    const [memberShip, setMemberShip] = useState(MEMBERSHIP.MONTH);
    const [loading, setLoading] = useState(false);

    const [teraPrice, setTeraPrice] = useState();
    const [yotaPrice, setYotaPrice] = useState();

    const [teraSubscriptionValid, setTeraSubscriptionIsValid] = useState();
    const [yotaSubscriptionValid, setYotaSubscriptionIsValid] = useState();

    const subScribeMemberShip = ({ memberShip, subscription, price }) => {
        if (!price) return;
        dispatch(
            purchaseMembership({
                wallet,
                chain,
                account,
                period: memberShip,
                type: subscription,
                value: price,
                currency: ZERO_TOKEN_ADDRESS,
                currencyDecimals: 18,
                signMessage,
            })
        );
    };

    const teraContract = useMemo(() => {
        return getMemberShipContract({
            period: memberShip,
            type: SUBSCRIPTION.TERA,
            chain: chain,
        });
    }, [memberShip, chain]);

    const getTeraPrice = useCallback(async () => {
        try {
            if (!teraContract || !account) return null;
            setLoading(true);
            const [fee, isValid] = await Promise.all([
                readContract({
                    contract: teraContract,
                    method: "keyPrice",
                    params: [],
                }),
                readContract({
                    contract: teraContract,
                    method: "getHasValidKey",
                    params: [account],
                }),
            ]);

            setTeraPrice(fromWei(String(fee), 18));
            setTeraSubscriptionIsValid(isValid);
            return fee;
        } catch (err) {
            console.log("err", err);
            return null;
        } finally {
            setLoading(false);
        }
    }, [teraContract, account]);

    const yotaContract = useMemo(() => {
        return getMemberShipContract({
            period: memberShip,
            type: SUBSCRIPTION.YOTA,
            chain: chain,
        });
    }, [memberShip, chain]);

    const getYotaPrice = useCallback(async () => {
        try {
            if (!yotaContract || !account) return null;
            setLoading(true);
            const [fee, isValid] = await Promise.all([
                readContract({
                    contract: yotaContract,
                    method: "keyPrice",
                    params: [],
                }),
                readContract({
                    contract: yotaContract,
                    method: "getHasValidKey",
                    params: [account],
                }),
            ]);

            setYotaPrice(fromWei(String(fee), 18));
            setYotaSubscriptionIsValid(isValid);
            return fee;
        } catch (err) {
            console.log("err", err);
            return null;
        } finally {
            setLoading(false);
        }
    }, [yotaContract, account]);

    useEffect(() => {
        getTeraPrice();
    }, [getTeraPrice]);

    useEffect(() => {
        getYotaPrice();
    }, [getYotaPrice]);

    /**
     * call example
     * for tera
     *     subScribeMemberShip({
     *      memberShip: memberShip,
     *      subscription: SUBSCRIPTION.TERA,
     *      price: teraPrice
     *     })
     */

    return {
        setMemberShip,
        subScribeMemberShip,
        memberShip,
        loading,
        teraPrice,
        yotaPrice,
        teraSubscriptionValid,
        yotaSubscriptionValid,
    };
};
