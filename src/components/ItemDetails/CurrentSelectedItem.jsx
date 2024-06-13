import { marketState } from "@/redux/reducer/marketSlice";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import CountDownTimer from "../Common/CountDownTimer";
import { Button } from "@/styles/pages/main.style";
import { CountParser } from "@/utils";
import ListingSectionsButtons from "./ButtonSection/ListingSectionsButtons";
import { ITEM_LISTING_STATUS } from "@/constant";
import AuctionSectionButtons from "./ButtonSection/AuctionSectionButtons";
import OfferSectionButtons from "./ButtonSection/OfferSectionButtons";
import MakeOfferButton from "./ButtonSection/MakeOfferButton";
import ListingButtion from "./ButtonSection/ListingButtion";
import { globalState } from "@/redux/reducer/globalSlice";

const CurrentSelectedItem = () => {
	const { selectedItem } = useSelector(marketState);
	const { tokens } = useSelector(globalState);
	const [time, setTime] = useState();


	useEffect(() => {
		if (!selectedItem?.endTime) return;
		setTime(selectedItem?.endTime);
	}, [selectedItem?.endTime]);


	const usdPrice = useMemo(() => {
		if (!selectedItem?.latestBid) {
			return 0;
		}

		const token = tokens.find(
			(tkn) => tkn?.address === selectedItem?.currency
		);

		if (token) {
			return selectedItem?.latestBid * token.rate;
		}
		return 0;
	}, [tokens, selectedItem]);

	return (
		<>
			{selectedItem?._id && (
				<div className="timing-block-current timing-block-item-block">
					<div className="time-line-block">
						{time && (
							<CountDownTimer
								type={ITEM_LISTING_STATUS.AUCTION}
								date={time}
							/>
						)}
					</div>
					<div className="current-bid-block">
						{selectedItem?.auctionId !== null && (
							<h3>
								<span className="current-bid">Current Bid</span>
								<div className="current-bid-title">
									<span>
										{" "}
										{CountParser(
											selectedItem?.latestBid || 0,
											4
										)}{" "}
										{selectedItem?.symbol}
									</span>
									<span>
										$ {CountParser(usdPrice || 0, 4)}
									</span>
								</div>
							</h3>
						)}
					</div>
				</div>
			)}
			{!selectedItem?.type && (
				<div className="btn-group-block">
					<MakeOfferButton />
					<ListingButtion />
				</div>
			)}
			{selectedItem?.type === ITEM_LISTING_STATUS.LISTING && (
				<ListingSectionsButtons />
			)}
			{selectedItem?.type === ITEM_LISTING_STATUS.AUCTION && (
				<AuctionSectionButtons />
			)}
			{selectedItem?.type === ITEM_LISTING_STATUS.OFFER && (
				<OfferSectionButtons />
			)}
		</>
	);
};

export default CurrentSelectedItem;
