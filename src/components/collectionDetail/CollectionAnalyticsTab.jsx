import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import React, { useState } from "react";
import { Accordion, ProgressBar, Spinner, Table } from "react-bootstrap";
import {
    useFloorAnalyticsChart,
    useOwnerDistributionChart,
    usePriceDistributionChart,
    useTopOwnersOfCollection,
} from "@/hooks/useFetchHooks";
import dynamic from "next/dynamic";
import { TIME_FILTER_BUTTON } from "@/constant";
import { CountParser, shortenText } from "@/utils";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
// import LineChart from "./LineChart";

const CandleChart = dynamic(() => import("./CandleChart"), {
    ssr: false,
    loading: () => <Spinner animation="border" size="lg" />,
});

const LineChart = dynamic(() => import("./LineChart"), {
    ssr: false,
    loading: () => <Spinner animation="border" size="lg" />,
});

const ScatterChart = dynamic(() => import("./ScatterChart"), {
    ssr: false,
    loading: () => <Spinner animation="border" size="lg" />,
});

const PriceDistributionChart = dynamic(
    () => import("./PriceDistributionChart"),
    {
        ssr: false,
        loading: () => <Spinner animation="border" size="lg" />,
    }
);

const CollectionAnalyticsTab = ({ collectionDetails = {} }) => {
    const { push } = useRouter();
    const {
        loading: priceLoading,
        data: priceData,
        handleTimeChange: handleTimeChangePrice,
    } = usePriceDistributionChart({
        itemCollection: collectionDetails?.address,
        chainId: collectionDetails?.chainId,
    });

    const {
        loading: floorLoading,
        data: floorData,
        handleTimeChange: handleTimeChangeFloor,
    } = useFloorAnalyticsChart({
        itemCollection: collectionDetails?.address,
        chainId: collectionDetails?.chainId,
    });
    const {
        loading: topOwnersLoading,
        items: topOwnersData,
        page: topOwnersPage,
        limit: topOwnersLimit,
        hasMore: topAuctionHasMore,
        handlePageChange: handlePageChangeTopOwners,
        handleLimitChange: handleLimitChangeTopOwners,
    } = useTopOwnersOfCollection({
        itemCollection: collectionDetails?.address,
        chainId: collectionDetails?.chainId,
    });

    const { loading: ownerLoading, data: ownerData } =
        useOwnerDistributionChart({
            itemCollection: collectionDetails?.address,
            chainId: collectionDetails?.chainId,
        });

    function ScreenreaderLabelExample({ percentage = 0 }) {
        return <ProgressBar now={percentage} label={`${percentage}%`} />;
    }
    const ChartTypes = ["Line", "Candle", "Pro"];
    const [currentChart, setCurrentChart] = useState(ChartTypes[0]);
    const handleChart = (value) => {
        if (!value) return;
        setCurrentChart(value);
    };

    let tabRenderer = (value) => {
        switch (value) {
            case ChartTypes[0]:
                return <LineChart data={floorData} loading={floorLoading} />;
            case ChartTypes[1]:
                return <CandleChart data={floorData} loading={floorLoading} />;
            case ChartTypes[2]:
                return <ScatterChart data={floorData} loading={floorLoading} />;
            default:
                break;
        }
    };

    return (
        <>
            <div className="filter-block-data-block justify-content-center">
                {/* <div className="filter-block-data-block-left">
                </div> */}
                <div
                    className="filter-block-data-block-right"
                    style={{ width: "70%" }}
                >
                    <div className="left-activity-tab">
                        <div className="left-activity-tab-block">
                            <h3 className="title-activity-tab">Floor Price</h3>
                            <div>
                                {ChartTypes.map((item, index) => (
                                    <button
                                        type="button"
                                        key={index}
                                        className="btn"
                                        onClick={() => handleChart(item)}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                            {TIME_FILTER_BUTTON?.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleTimeChangeFloor(item.value)
                                    }
                                    key={index}
                                    className="btn"
                                >
                                    {item.label}
                                </button>
                            ))}
                            {tabRenderer(currentChart)}
                        </div>
                        <div className="left-activity-tab-block">
                            <h3 className="title-activity-tab">
                                Price Distribution
                            </h3>
                            {TIME_FILTER_BUTTON?.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleTimeChangePrice(item.value)
                                    }
                                    key={index}
                                    className="btn"
                                >
                                    {item.label}
                                </button>
                            ))}
                            {!priceLoading ? (
                                priceData?.timePeriod?.length > 0 ? (
                                    <PriceDistributionChart
                                        data={priceData}
                                        loading={priceLoading}
                                    />
                                ) : (
                                    ""
                                )
                            ) : (
                                <Spinner animation="border" size="lg" />
                            )}
                        </div>
                        <div className="left-activity-tab-block">
                            <h3 className="title-activity-tab">
                                Owner Distribution
                            </h3>
                            {!ownerLoading ? (
                                Object.keys(ownerData)?.map((key, index) => (
                                    <div
                                        className="progress-bar-block"
                                        key={index}
                                    >
                                        <h3>{index + 1}</h3>
                                        <ScreenreaderLabelExample
                                            percentage={CountParser(
                                                ownerData[key].percentage,
                                                2
                                            )}
                                        />
                                        <h4>{key}</h4>
                                    </div>
                                ))
                            ) : (
                                <div className="d-flex justify-content-center m-3">
                                    <Spinner size="lg" />
                                </div>
                            )}
                        </div>
                        <div className="filter-block-data-block-right-table">
                            <h3 className="title-activity-tab">
                                Owners (top 100)
                            </h3>
                            <div className="btn-showing-block">
                                <p> Showing:</p>
                                {[10, 50, 100].map((limitPerPage, i) => (
                                    <button
                                        key={i}
                                        className={`btn ${
                                            topOwnersLimit === limitPerPage
                                                ? "selected"
                                                : "limitButton"
                                        }`}
                                        onClick={() =>
                                            handleLimitChangeTopOwners(
                                                limitPerPage
                                            )
                                        }
                                    >
                                        {limitPerPage}
                                    </button>
                                ))}
                            </div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Owned</th>
                                        <th>% Owned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topOwnersLoading && topOwnersPage == 1 ? (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="text-center"
                                            >
                                                <Spinner
                                                    size="md"
                                                    animation="border"
                                                />
                                            </td>
                                        </tr>
                                    ) : !topOwnersData?.length > 0 ? (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="text-center"
                                            ></td>
                                        </tr>
                                    ) : (
                                        <>
                                            {topOwnersData?.map(
                                                (
                                                    {
                                                        _id: address,
                                                        balance,
                                                        percentage,
                                                        name,
                                                        image,
                                                    },
                                                    index
                                                ) => (
                                                    <tr
                                                        key={index}
                                                        className="pointer"
                                                        onClick={() =>
                                                            push(
                                                                PATH_DASHBOARD.user.detail(
                                                                    address
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <td>
                                                            <div className="profile-img-block diff-img-radius">
                                                                <span>
                                                                    {index + 1}#
                                                                </span>
                                                                <img
                                                                    src={
                                                                        image ||
                                                                        "../../images/item-img.png"
                                                                    }
                                                                    alt="item-img"
                                                                ></img>
                                                                <div className="text-img-block">
                                                                    <h3>
                                                                        {name ||
                                                                            "NoName"}
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {shortenText(
                                                                address || "",
                                                                4,
                                                                3
                                                            )}
                                                        </td>
                                                        <td>{balance || 0}</td>
                                                        <td>
                                                            {CountParser(
                                                                percentage || 0,
                                                                3
                                                            )}
                                                            %
                                                        </td>
                                                    </tr>
                                                )
                                            )}

                                            {topOwnersLoading &&
                                                topOwnersPage > 1 && (
                                                    <tr>
                                                        <td
                                                            colSpan={4}
                                                            className="text-center"
                                                        >
                                                            <div className="d-flex justify-content-center m-3">
                                                                <Spinner
                                                                    size="md"
                                                                    animation="border"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            {!topOwnersLoading &&
                                                topAuctionHasMore && (
                                                    <tr>
                                                        <td
                                                            colSpan={4}
                                                            className="text-center"
                                                        >
                                                            <div className="common-btn-block">
                                                                <Button
                                                                    className="border-dark-button"
                                                                    isBorderBtn={
                                                                        true
                                                                    }
                                                                    onClick={
                                                                        handlePageChangeTopOwners
                                                                    }
                                                                >
                                                                    Load more
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                        </>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CollectionAnalyticsTab;
