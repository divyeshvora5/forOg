import { Like } from "@/components";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
import AuctionList from "@/components/ItemDetails/AuctionList";
import CurrentSelectedItem from "@/components/ItemDetails/CurrentSelectedItem";
import ItemDetailsSection from "@/components/ItemDetails/ItemDetailsSection";
import ItemHistory from "@/components/ItemDetails/ItemHistory";
import ListingList from "@/components/ItemDetails/ListingList";
import ShareURLModal from "@/components/ItemDetails/Model/ShareURLModal";
import MoreItems from "@/components/ItemDetails/MoreItems";
import OfferList from "@/components/ItemDetails/OfferList";
import Properties from "@/components/ItemDetails/Properties";
import { ITEM_LISTING_STATUS } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useLikeItem } from "@/hooks/useHome";
import { globalState } from "@/redux/reducer/globalSlice";
import {
    marketState,
    setItemDetails,
    setRefetchAction,
} from "@/redux/reducer/marketSlice";
import {
    GetNftDetailsService,
    UpdateView,
} from "@/redux/services/itemServices";
import { PATH_DASHBOARD } from "@/routes/paths";
import { ItemMian } from "@/styles/pages/item-detail-style";
import {
    Button,
    CommonModalMain,
    CommonProductBLock,
    FormGroup,
    Input,
    Label,
} from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
    Accordion,
    Container,
    Modal,
    Spinner,
    Tab,
    Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const details = () => {
    const {
        walletDetalis: { chainId, account },
    } = useSelector(globalState);
    const router = useRouter();
    const dispatch = useDispatch();

    const { refetch } = useSelector(marketState);
    const { handleLike } = useLikeItem();

    const [item, setItem] = useState();
    const [loading, setLoading] = useState();

    const options = [
        { value: "chocolate", label: "Art" },
        { value: "strawberry", label: "Body type" },
        { value: "vanilla", label: "Face color" },
    ];
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [selectedTab, setSelectedTab] = useState(ITEM_LISTING_STATUS.LISTING);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchDetails = async () => {
        try {
            setLoading(true);

            const { data } = await GetNftDetailsService({
                itemCollection: router.query?.itemCollection?.toLowerCase(),
                tokenId: router.query?.tokenId,
                // chainId: chainId,
                account: account,
            });
            setItem(data?.data);
            dispatch(setItemDetails(data?.data));
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
            if (refetch) {
                dispatch(setRefetchAction(false));
            }
        }
    };

    useEffect(() => {
        if (!router.isReady) return;
        fetchDetails();
    }, [router.isReady, router?.query, chainId, account]);

    useEffect(() => {
        if (!router.isReady || !account) return;
        UpdateView({
            itemCollection: router.query?.itemCollection?.toLowerCase(),
            tokenId: router.query?.tokenId,
            account: account,
        });
    }, [router.isReady, router?.query]);

    // dispatch(setRefetchAction(null))

    useEffect(() => {
        if (!refetch) return;
        fetchDetails();
    }, [refetch]);

    const [url, setUrl] = useState(null);

    const onShare = () => {
        const currentURL = window.location.href;
        setUrl(currentURL);
    };

    const onClose = () => {
        setUrl(null);
    };

    const handleCollectionRoute = (address) => {
        router.push(PATH_DASHBOARD.explore.collection(address));
    };

    return (
        <>
            <PageTitle title={`${item?.name || "NewNFT"} - ${"NFT"}`} />

            {!loading ? (
                <CommonPageBlockPad
                    className="dark-mode-body"
                    style={{ minHeight: "100vh" }}
                >
                    {item && (
                        <Container className="common-container">
                            <ItemMian>
                                <div className="left-common-item">
                                    <ImageLoader
                                        src={
                                            item?.animation_url ||
                                            item?.image ||
                                            "/images/item-details.png"
                                        }
                                        visualizer={item?.asset_type=="audio"}
                                        thumbnail={item?.thumbnail}
                                    />
                                </div>
                                <div className="right-content-block">
                                    <div className="profile-share-block">
                                        <div
                                            className="profile-share-block-inner pointer"
                                            onClick={() =>
                                                handleCollectionRoute(
                                                    item?.collectionAddress
                                                )
                                            }
                                        >
                                            <img
                                                src={
                                                    item?.collectionLogo ||
                                                    "/images/item-details.png"
                                                }
                                                alt="item-img"
                                            ></img>
                                            <div className="profile-share-title">
                                                <h4>{item?.collectionName}</h4>
                                            </div>
                                        </div>
                                        <div className="share-block-inner">
                                            <div
                                                onClick={() =>
                                                    handleLike(item?._id)
                                                }
                                                className="share-block-inner-block"
                                            >
                                                <div>
                                                    <Like
                                                        item={item}
                                                        count={true}
                                                    />
                                                </div>
                                            </div>
                                            <div className="share-block-inner-block">
                                                <ShareURLModal
                                                    show={!!url}
                                                    handleClose={onClose}
                                                    url={url}
                                                />
                                                <div
                                                    onClick={onShare}
                                                    className="pointer"
                                                >
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="#191820"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18.3878 17.382C18.3879 17.8134 18.2935 18.2396 18.1113 18.6307C17.9291 19.0217 17.6635 19.3682 17.3332 19.6456C17.0029 19.9231 16.6158 20.1249 16.1992 20.2369C15.7825 20.3488 15.3465 20.3682 14.9215 20.2937C14.4966 20.2192 14.0931 20.0526 13.7395 19.8055C13.3858 19.5585 13.0905 19.237 12.8743 18.8637C12.6581 18.4903 12.5263 18.0742 12.488 17.6445C12.4498 17.2148 12.506 16.7819 12.6529 16.3763L8.30139 13.5806C7.88579 13.9883 7.35906 14.2642 6.78728 14.3736C6.21549 14.483 5.62412 14.4212 5.08736 14.1958C4.55059 13.9705 4.09233 13.5916 3.77006 13.1068C3.4478 12.6219 3.27588 12.0527 3.27588 11.4706C3.27588 10.8884 3.4478 10.3192 3.77006 9.83438C4.09233 9.34955 4.55059 8.97068 5.08736 8.74531C5.62412 8.51994 6.21549 8.45809 6.78728 8.56754C7.35906 8.67698 7.88579 8.95284 8.30139 9.3605L12.6529 6.56898C12.4037 5.88427 12.4156 5.13176 12.6862 4.45523C12.9567 3.7787 13.4671 3.22559 14.1198 2.90159C14.7724 2.57759 15.5215 2.50542 16.224 2.69887C16.9265 2.89231 17.5331 3.33781 17.9279 3.95024C18.3227 4.56266 18.4779 5.29908 18.3641 6.01876C18.2502 6.73844 17.8751 7.39094 17.3106 7.85156C16.746 8.31219 16.0315 8.54865 15.3036 8.51576C14.5757 8.48287 13.8855 8.18294 13.3647 7.67327L9.01323 10.4689C9.24841 11.1188 9.24841 11.8306 9.01323 12.4804L13.3647 15.2761C13.7802 14.8695 14.3063 14.5944 14.8773 14.4853C15.4483 14.3762 16.0388 14.4379 16.5749 14.6626C17.1111 14.8874 17.569 15.2653 17.8914 15.749C18.2139 16.2327 18.3866 16.8007 18.3878 17.382Z"
                                                            fill="#191820"
                                                        />
                                                    </svg>

                                                    <h4>Share</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wicked-block-inner">
                                        <div className="wicked-block-inner-title">
                                            <h2>{item?.name}</h2>
                                            <p>{item?.description}</p>
                                        </div>
                                        <CurrentSelectedItem />
                                        <div className="tab-custom-block tab-custom-items">
                                            <Tabs
                                                defaultActiveKey={
                                                    ITEM_LISTING_STATUS.LISTING
                                                }
                                                id="uncontrolled-tab-example"
                                                className="mb-3"
                                                onSelect={(e) =>
                                                    setSelectedTab(e)
                                                }
                                            >
                                                <Tab
                                                    eventKey={
                                                        ITEM_LISTING_STATUS.LISTING
                                                    }
                                                    title="Listing"
                                                >
                                                    <ListingList
                                                        selectedtab={
                                                            selectedTab
                                                        }
                                                        item={item}
                                                    />
                                                </Tab>
                                                <Tab
                                                    eventKey="Auction"
                                                    title="Auction"
                                                >
                                                    <AuctionList
                                                        selectedtab={
                                                            selectedTab
                                                        }
                                                        item={item}
                                                    />
                                                </Tab>
                                                <Tab
                                                    eventKey="Offer"
                                                    title="Offers"
                                                >
                                                    <OfferList
                                                        selectedtab={
                                                            selectedTab
                                                        }
                                                        item={item}
                                                    />
                                                </Tab>
                                                <Tab
                                                    eventKey="history"
                                                    title="History"
                                                >
                                                    <ItemHistory
                                                        selectedtab={
                                                            selectedTab
                                                        }
                                                        item={item}
                                                    />
                                                </Tab>
                                            </Tabs>
                                            <div className="">
                                                {/* <div className='button-block-tabs-inner'>
                    <Button onClick={handleShow}>Make Offer</Button>
                  </div>
                  <div className='button-block-tabs-inner'>
                    <Button className='no-border'>Save for later</Button>
                  </div> */}

                                                {/* <CretePriceModal show={show} onHide={handleClose} aria-labelledby='contained-modal-title-vcenter'>
                    <Modal.Header closeButton>
                      <Modal.Title>Select a token</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                  </CretePriceModal> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ItemMian>
                            <ItemDetailsSection item={item} />
                            <MoreItems item={item} />
                        </Container>
                    )}
                </CommonPageBlockPad>
            ) : (
                <>
                    <div className="d-flex justify-content-center align-items-center items-center vh-100">
                        <Spinner size="md" />
                    </div>
                </>
            )}
        </>
    );
};

export default details;
