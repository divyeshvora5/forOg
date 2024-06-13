import { TYPE } from "@/constant";
import { getBalanceInfo } from "@/contracts";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { marketState } from "@/redux/reducer/marketSlice";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Button } from "@/styles/pages/main.style";
import { getItemDetailsQueryParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ListingButtion = () => {
	const { chainId, account, chain } = useActiveWeb3React();
	const { itemDetails, contractLoading } = useSelector(marketState);

	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [nftBalance, setNftBalance] = useState();

	const handelClick = () => {
		router.push({
			pathname: PATH_DASHBOARD.item.listing,
			query: {
				...getItemDetailsQueryParams(itemDetails),
			},
		});
	};

	useEffect(() => {
		if (!itemDetails || !chain) return;
		(async () => {
			try {
				if(itemDetails?.type === TYPE.SINGLE){
					setNftBalance(itemDetails?.balance)
				}else{
					setLoading(true);
					const balance = await getBalanceInfo({
						type: itemDetails?.type,
						collection: itemDetails?.itemCollection,
						chain: chain,
						account: account,
						tokenId: itemDetails?.tokenId,
					});

					console.log('nftbalance', Number(balance))
					setNftBalance(Number(balance));
				}
			} catch (err) {
				console.log("err", err);
			} finally {
				setLoading(false);
			}
		})();
	}, [itemDetails]);

	return (
		<div className="button-block-tabs-inner">
			{!loading && nftBalance > 0 && (
				<Button disabled={contractLoading} onClick={handelClick}>
					List Item
				</Button>
			)}
		</div>
	);
};

export default ListingButtion;
