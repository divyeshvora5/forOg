import React, { useEffect } from "react";
import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import Link from "next/link";
import { usePublicProfileOffers } from "@/hooks/useFetchHooks";
import { Spinner } from "react-bootstrap";
import { ItemCard } from "..";
import { useLikeItem } from "@/hooks/useHome";
import { usePublicProfile } from "./PublicProfileProvider";
import { Table } from "react-bootstrap";
import { shortenText, usdParser } from "@/utils";
import moment from "moment";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
import { CHAIN_LOGO } from "@/constant";

const UserOffersTab = ({
    ownerAddress,
    selectedCollection,
    selectedOfferType,
}) => {
    const { push } = useRouter();
    const { search, sort, grid, status } = usePublicProfile();
    // console.log({ search, sort, grid, status });
    const { handleLike } = useLikeItem();
    const { loading, page, items, hasMore, handlePageChange } =
        usePublicProfileOffers({
            ownerAddress,
            ContextSearch: search,
            ContextSort: sort,
            ContextStatus: status,
            selectedCollection,
            selectedOfferType,
        });
    const itemRouteHandler = (item) => {
        if(!item?.itemCollection || !item.tokenId) return;
        push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                itemCollection: item?.itemCollection,
                tokenId: item?.tokenId,
            },
        });
    };

    const timeFormatter = (endTime) => {
        const endTimeDate = new Date(endTime);

        const formattedEndTime = moment(endTimeDate).format("YYYY-M-D . HH:mm");
        return formattedEndTime;
        console.log(formattedEndTime);
    };

    return (
        <>
            <div className="filter-block-data-block-right-table">
                <Table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Floor Diff.</th>
                            <th>From</th>
                            <th>Date & Time</th>
                            <th>Expires in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && page == 1 ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    <Spinner size="md" />
                                </td>
                            </tr>
                        ) : !items.length > 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    {/* No data found */}
                                </td>
                            </tr>
                        ) : (
                            <>
                                {items.map((item, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => itemRouteHandler(item)}
                                        className="pointer"
                                    >
                                        <td>
                                            <div className="profile-img-block">
                                                <img
                                                    src={
                                                        item?.image ||
                                                        "../../images/item-img.png"
                                                    }
                                                    alt="item-img"
                                                ></img>
                                                <div className="text-img-block">
                                                    <h3>{item?.name || ""}</h3>
                                                    <p>
                                                        {item?.collectionName ||
                                                            ""}
                                                        {/* <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z"
                                                                    fill="#2BD7EF"
                                                                />
                                                            </svg>
                                                        </span> */}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="puls-block-flex">
                                            {/* <img src={CHAIN_LOGO[chainId]} alt='chainLogo' /> {CHAIN_SYMBOL[chainId]} */}

                                                <div className="puls-block-flex-inner">
                                                <img src={CHAIN_LOGO[item?.chainId]} alt='chainLogo' />
                                                    <h3>{item?.price}</h3>
                                                </div>
                                                <p>{usdParser(item?.usdPrice || 0)}</p>
                                            </div>
                                        </td>
                                        <td
                                            className={`color-${
                                                item?.floorDiffrence > 0
                                                    ? "red"
                                                    : "green"
                                            }`}
                                        >
                                            {item?.floorDiffrence &&
                                            item?.floorDiffrence > 0
                                                ? "-"
                                                : ""}
                                            {item?.floorDiffrence &&
                                                Math.abs(
                                                    Math.round(
                                                        item?.floorDiffrence
                                                    )
                                                )}
                                            %
                                        </td>
                                        {/* <td className="color-red">-13.10%</td> */}
                                        <td className="color-green">
                                            {item?.lister.length > 4 &&
                                                item?.lister.slice(0, 4)}
                                        </td>
                                        {/* <td className="color-green">0x000</td> */}
                                        {/* <td>2021-6-16 . 11:30</td> */}
                                        <td>
                                            {item?.endTime
                                                ? timeFormatter(item?.endTime)
                                                : ""}
                                        </td>
                                        <td>
                                            {moment(
                                                new Date(item?.endTime),
                                                "YYYYMMDD"
                                            ).fromNow()}
                                        </td>
                                    </tr>
                                ))}
                                {}
                                {loading && page > 1 && (
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            <Spinner size="md" />
                                        </td>
                                    </tr>
                                )}
                                {!loading && hasMore ? (
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            <div className="common-btn-block">
                                                <Button
                                                    className="border-dark-button"
                                                    isBorderBtn={true}
                                                    onClick={handlePageChange}
                                                >
                                                    Load more
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    ""
                                )}
                            </>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default UserOffersTab;
