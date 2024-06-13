/** @format */

import Link from "next/link";
import { Container, Spinner } from "react-bootstrap";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { CommonProductBLock, Button } from "@/styles/pages/main.style";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import { useAuction } from "@/hooks/useFetchHooks";
import ShowRecoredCount from "@/components/Common/ShowRecoredCount";
import { Histogram, ItemCard } from "@/components";
import AuctionCard from "@/components/auctions/AuctionCard";
import ChainSelector from "@/components/Common/ChainSelector";
import { useLikeItem } from "@/hooks/useHome";
import CountDownTimer from "@/components/Common/CountDownTimer";
import HomeAuctionTimer from "@/components/Home/MainAuction/HomeAuctionTimer";
import { useState } from "react";
import BidModel from "@/components/ItemDetails/Model/BidModel";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { Toast, validateNetwork } from "@/utils";
import toast from "react-hot-toast";

const AuctionPage = () => {
    const {
        loading,
        categorys,
        priceArray,
        page,
        items,
        count,
        hasMore,
        topAuction,
        filterOptions,
        orderOptions,
        priceFilter,
        setPriceFilter,
        orderChange,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
        typeChange,
        handlePriceChange,
        getData,
    } = useAuction();
    const { account, chainId } = useActiveWeb3React();
    const { handleLike } = useLikeItem();
    const { push } = useRouter();
    const [currentItem, setCurrentItem] = useState();
    const handleClose = () => {
        setCurrentItem();
    };

    console.log("topAuction", topAuction);

    const handleItemRoute = (item) => {
        push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                itemCollection: item?.itemCollection,
                tokenId: item?.tokenId,
            },
        });
    };

    const handleOpen = (_item) => {
        const validate = validateNetwork(account, chainId, _item?.chainId);
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        setCurrentItem(_item);
    };

    const handleUserRoute = (user) => {
        push({
            pathname: PATH_DASHBOARD.user.detail(user),
        });
    };

    return (
        <>
            <PageTitle title={"Auctions"} />
            <CommonPageBlockPad className="no-container-padding dark-mode-body">
                <BidModel
                    show={!!currentItem}
                    handleClose={handleClose}
                    item={currentItem}
                    refetchBids={false}
                    refetch={() => getData(true)}
                    auctionCreator={
                        // currentItem?.creatorUser?.address ||
                        // currentItem?.user?.address
                        currentItem?.lister
                    }
                />
                <div className="auction-top-block-main">
                    <Container>
                        <div className="auction-top-block">
                            <div className="auction-top-block-left">
                                <div className="auction-graphics">
                                    <img
                                        src={"../../images/auction-grphics.png"}
                                        alt="img"
                                    ></img>
                                </div>
                                <div className="auction-top-block-left-inner">
                                    <h2>
                                        Today’s Top <br></br> Auction
                                    </h2>
                                    {/* <div className="btn-group-main">
                                    <Button>Explore Auctions</Button>
                                    <Button isBorderBtn={true}>
                                        Create Auction
                                    </Button>
                                </div> */}
                                </div>
                            </div>
                            {topAuction ? (
                                <div className="auction-top-block-right">
                                    <div className="auction-graphics">
                                        <img
                                            src={
                                                "../../images/img-shape-auction.png"
                                            }
                                            alt="img"
                                        ></img>
                                    </div>
                                    <div className="auction-top-block-right-inner">
                                        <div className="auction-top-block-frame">
                                            <ImageLoader
                                                src={
                                                    topAuction?.image
                                                    // "../../images/product-img-block.png"
                                                }
                                                alt=""
                                                classProp={"rounded-4"}
                                                thumbnail={topAuction?.thumbnail}
                                            />
                                            <div className="auction-bid">
                                                <p>Current bid</p>
                                                <h4>
                                                    {topAuction?.latestBid || 0}{" "}
                                                    {topAuction?.symbol}
                                                </h4>
                                            </div>
                                            {topAuction?.name && (
                                                <div className="bid-profile-block">
                                                    <img
                                                        src={
                                                            topAuction?.creatorLogo ||
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="bid-profile-block-text">
                                                        <h3
                                                            className="pointer"
                                                            onClick={() =>
                                                                handleItemRoute(
                                                                    topAuction
                                                                )
                                                            }
                                                        >
                                                            “
                                                            {topAuction?.name ||
                                                                " "}
                                                            ”
                                                        </h3>
                                                        <p
                                                            className="pointer"
                                                            onClick={() =>
                                                                handleUserRoute(
                                                                    topAuction?.creatorAddress
                                                                )
                                                            }
                                                        >
                                                            {topAuction
                                                                ?.creatorUser
                                                                ?.name &&
                                                                `@${topAuction.creatorName}`}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="time-line-block-inner">
                                            {topAuction?.endTime && (
                                                <HomeAuctionTimer
                                                    date={topAuction?.endTime}
                                                    useFor={"auction"}
                                                />
                                            )}
                                        </div>
                                        {topAuction?.itemCollection ? (
                                            <div className="d-flex justify-content-center">
                                                <Button
                                                    isBorderBtn={true}
                                                    className="w-50"
                                                    onClick={() =>
                                                        handleOpen(topAuction)
                                                    }
                                                >
                                                    Place Bid
                                                </Button>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </Container>
                </div>
                <div className="graphics-inner-diff">
                    <img
                        src={"../../images/shape-graphics-auction.png"}
                        alt="graphics-img"
                    ></img>
                </div>
                <div className="graphics-inner-shape-two">
                    {/* <img
                        src={"../../images/graphics-block-inner-2.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-three">
                    {/* <img
                        src={"../../images/graphics-block-inner-3.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="explore-block-main">
                    <div className="common-title-page text-center-space">
                        <h1>Auctions</h1>
                    </div>
                    <div className="filter-block-data-block">
                        <div className="filter-block-data-block-left">
                            <div className="filter-block-data-block-left-inner">
                                <Accordion defaultActiveKey={["0","1","2","3","4","5"]} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            Search
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="search-form-block">
                                                <div className="search-box-form">
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                        name="Search"
                                                        onChange={handleSearch}
                                                    />
                                                    <button>
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z"
                                                                fill="#9E9E9E"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            Type
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="checkbox-block-custom-filter">
                                                {categorys?.map((category) => (
                                                    <div
                                                        className="checkbox-filter-block"
                                                        key={category?.value}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id={category?.value}
                                                            value={
                                                                category?.value
                                                            }
                                                            name={
                                                                category?.value
                                                            }
                                                            onChange={
                                                                handleCategorySelect
                                                            }
                                                        />
                                                        <label
                                                            for={
                                                                category?.value
                                                            }
                                                        >
                                                            <span>
                                                                <img
                                                                    src={
                                                                        "../../images/check-icon-block.svg"
                                                                    }
                                                                    alt="check-icon"
                                                                ></img>
                                                            </span>
                                                            <h4>
                                                                {
                                                                    category?.label
                                                                }
                                                            </h4>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <h5 className="fw-bold">Price</h5>
                                        {priceArray?.length > 1 && (
                                            <>
                                                <div className="d-flex mb-1">
                                                    <div className="d-flex w-100">
                                                        <Histogram
                                                            barMargin={1}
                                                            data={[
                                                                ...priceArray,
                                                            ]}
                                                            getBoundries={(
                                                                values
                                                            ) => {
                                                                let newArr = [
                                                                    priceArray.find(
                                                                        (
                                                                            item
                                                                        ) =>
                                                                            item.value ===
                                                                            values?.selectionMin
                                                                    )?.price,
                                                                    priceArray.find(
                                                                        (
                                                                            item
                                                                        ) =>
                                                                            item.value ===
                                                                            values?.selectionMax
                                                                    )?.price,
                                                                    // values?.selectionMin,
                                                                    // values?.selectionMax,
                                                                ];
                                                                setPriceFilter(
                                                                    newArr
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-around">
                                                    <Button
                                                        onClick={() => {
                                                            handlePriceChange(
                                                                []
                                                            );
                                                        }}
                                                        className="mt-2"
                                                        style={{
                                                            padding: "8px 12px",
                                                            width: "40%",
                                                        }}
                                                    >
                                                        Reset
                                                    </Button>
                                                    <Button
                                                        onClick={() => {
                                                            handlePriceChange(
                                                                priceFilter
                                                            );
                                                        }}
                                                        className="mt-2"
                                                        style={{
                                                            padding: "8px 12px",
                                                            width: "40%",
                                                        }}
                                                    >
                                                        Apply
                                                    </Button>
                                                </div>
                                            </>
                                        )}
                                        {/* <Accordion.Header>Price</Accordion.Header>
                                    <Accordion.Body></Accordion.Body> */}
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            Chains
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="radio-last">
                                                <ChainSelector />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="filter-block-data-block-right">
                            <div className="top-showing-result-block">
                                <p>
                                    <ShowRecoredCount
                                        page={page}
                                        data={items}
                                        count={count}
                                    />
                                </p>
                                <div className="select-block-explore">
                                    <div className="form-group">
                                        <Select
                                            name="filter1"
                                            options={filterOptions}
                                            className="TX-select2-wrapper"
                                            classNamePrefix="TX-fix-select"
                                            onChange={typeChange}
                                            defaultValue={filterOptions[0]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            name="filter2"
                                            options={orderOptions}
                                            className="TX-select2-wrapper"
                                            classNamePrefix="TX-fix-select"
                                            onChange={orderChange}
                                            defaultValue={orderOptions[0]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <CommonProductBLock>
                                {loading && page == 1 ? (
                                    <>
                                        <div className="d-flex justify-content-center vh-100 align-items-center">
                                            <Spinner
                                                animation="border"
                                                size="lg"
                                            />
                                        </div>
                                    </>
                                ) : !items?.length > 0 ? (
                                    <>
                                        {/* <div className="d-flex justify-content-center">
                                            No Auctions Found!
                                        </div> */}
                                    </>
                                ) : (
                                    <div className="common-product-block">
                                        {items?.map((item, index) => (
                                            <AuctionCard
                                                key={index}
                                                item={item}
                                                handleLike={handleLike}
                                                handleOpen={handleOpen}
                                            />
                                        ))}
                                    </div>
                                )}

                                {loading && page > 1 && (
                                    <div className="d-flex justify-content-center mt-3">
                                        <Spinner size="lg" />
                                    </div>
                                )}
                                {!loading && hasMore && (
                                    <div className="common-btn-block">
                                        <Button
                                            className="border-dark-button"
                                            isBorderBtn={true}
                                            onClick={handlePageChange}
                                        >
                                            Load more
                                        </Button>
                                    </div>
                                )}
                            </CommonProductBLock>
                        </div>
                    </div>
                </div>
            </CommonPageBlockPad>
        </>
    );
};

export default AuctionPage;
