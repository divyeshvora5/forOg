import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import { usePublicProfile } from "../PublicProfile/PublicProfileProvider";
import { useCollectionItems } from "@/hooks/useFetchHooks";
import { useLikeItem } from "@/hooks/useHome";
import { Spinner } from "react-bootstrap";
import { Histogram, ItemCard } from "..";
import Accordion from "react-bootstrap/Accordion";
import { COLLECTION_DETAILS_FILTER } from "@/constant";


const NFTsTab = ({ collectionDetails = {}, defaultPriceArray = [] }) => {
    const { search, sort, grid } = usePublicProfile();
    const [traits, setTraits] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAttribute, setSelectedAttribute] = useState([]);
    const [itemStatus, setItemStatus] = useState([]);
    const [priceArray, setPriceArray] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);
    const [price, setPrice] = useState({
        min: "",
        max: "",
    });
    const { loading, page, items, hasMore, handlePageChange } =
        useCollectionItems({
            limit: 20,
            search,
            sort,
            itemStatus,
            selectedAttribute,
            price,
        });
    const { handleLike } = useLikeItem();

    useEffect(() => {
        setPriceArray(defaultPriceArray);
    }, [priceArray, defaultPriceArray]);

    useEffect(() => {
        setTraits(collectionDetails?.traitsTypes);
    }, [collectionDetails?.traitsTypes]);

    useEffect(() => {
        const filteredTraits = collectionDetails?.traitsTypes?.filter(
            (trait) => {
                const lowerCaseSearchQuery = searchQuery.toLowerCase();
                return (
                    trait.traitsValues.some((tv) =>
                        tv.value.toLowerCase().includes(lowerCaseSearchQuery)
                    ) || trait.name.toLowerCase().includes(lowerCaseSearchQuery)
                );
            }
        );
        setTraits(filteredTraits);
    }, [searchQuery]);

    const handleAttributeSelect = (e) => {
        let attributeArry;
        if (e.target.checked) {
            attributeArry = [...(selectedAttribute || []), e.target.value];
        } else {
            attributeArry = (selectedAttribute || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        setSelectedAttribute(attributeArry);
    };

    const filterChange = (value) => {
        let stateArray;
        if (value == "All") {
            stateArray = [];
        } else {
            stateArray = [value];
        }
        setItemStatus(stateArray);
    };
    const handlePriceChange = (value) => {
        if (!value.length) {
            setPrice({
                min: "",
                max: "",
            });
            setPriceArray([]);
            return;
        }
        setPrice({
            min: value[0],
            max: value[1],
        });
    };

    return (
        <>
            <div className="filter-block-data-block">
                <div className="filter-block-data-block-left">
                    <div className="filter-block-data-block-left-inner">
                        <Accordion defaultActiveKey={["0"]} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Status</Accordion.Header>
                                <Accordion.Body>
                                    <div className="status-button">
                                        {COLLECTION_DETAILS_FILTER.map(
                                            ({ label, value }, index) => (
                                                <div
                                                    className="checkbox-filter-block"
                                                    key={index}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            filterChange(value)
                                                        }
                                                        className={
                                                            itemStatus[0] ==
                                                                value ||
                                                            (value == "All" &&
                                                                itemStatus.length ==
                                                                    0)
                                                                ? "selected"
                                                                : ""
                                                        }
                                                    >
                                                        {label}
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                {/* <Accordion.Header>
                                                Price
                                            </Accordion.Header>
                                            <Accordion.Body></Accordion.Body> */}
                                <h5 className="fw-bold">Price</h5>
                                {priceArray?.length > 1 && (
                                    <>
                                        <div className="d-flex mb-1">
                                            <div className="d-flex w-100">
                                                <Histogram
                                                    barMargin={1}
                                                    data={[...priceArray]}
                                                    getBoundries={(values) => {
                                                        let newArr = [
                                                            priceArray.find(
                                                                (item) =>
                                                                    item.value ===
                                                                    values?.selectionMin
                                                            )?.price,
                                                            priceArray.find(
                                                                (item) =>
                                                                    item.value ===
                                                                    values?.selectionMax
                                                            )?.price,
                                                            // values?.selectionMin,
                                                            // values?.selectionMax,
                                                        ];
                                                        setPriceFilter(newArr);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around">
                                            <Button
                                                onClick={() => {
                                                    handlePriceChange([]);
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
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Attributes</Accordion.Header>
                                <Accordion.Body>
                                    <div className="search-form-block">
                                        <div className="search-box-form">
                                            <input
                                                type="text"
                                                placeholder="Search Attributes"
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value
                                                    )
                                                }
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
                            {traits?.length > 0 &&
                                traits?.map((type, index) => (
                                    <Accordion.Item
                                        eventKey={index + 3}
                                        key={index}
                                    >
                                        <Accordion.Header>
                                            {type?.name}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="checkbox-block-custom-filter">
                                                {type?.traitsValues?.map(
                                                    (
                                                        { value, count },
                                                        index
                                                    ) => (
                                                        <div
                                                            className="checkbox-filter-block"
                                                            key={index}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                id={
                                                                    value ||
                                                                    "trait[]"
                                                                }
                                                                name="attributes"
                                                                value={value}
                                                                onChange={
                                                                    handleAttributeSelect
                                                                }
                                                            ></input>
                                                            <label
                                                                for={
                                                                    value ||
                                                                    "trait[]"
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
                                                                <div className="flex-block-check">
                                                                    <h4>
                                                                        {value ||
                                                                            ""}
                                                                    </h4>
                                                                    <h4>
                                                                        {count ||
                                                                            0}
                                                                    </h4>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                        </Accordion>
                    </div>
                </div>
                <div className="filter-block-data-block-right">
                    <CommonProductBLock className="explore-block-product">
                        {loading && page == 1 ? (
                            <>
                                <div className="d-flex justify-content-center vh-100 align-items-center">
                                    <Spinner animation="border" size="lg" />
                                </div>
                            </>
                        ) : !items?.length > 0 ? (
                            <>
                                <div className="d-flex justify-content-center">
                                </div>
                            </>
                        ) : (
                            <div
                                className={`common-product-block  ${
                                    grid === "five" && "flex-width-five"
                                }`}
                            >
                                {items?.map((item, index) => (
                                    <ItemCard
                                        key={index}
                                        item={item}
                                        handleLike={handleLike}
                                    />
                                ))}
                                {/* <div className="common-product-block-inner">
                        <div className="common-product-block-inner-width">
                            <div className="top-block-product">
                                <h4>Sweet Baby #1</h4>
                                <Link href="{}">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                            fill="#B9B8BB"
                                        />
                                    </svg>
                                </Link>
                            </div>
                            <div className="product-details-profile full-width">
                                <div className="product-profile">
                                    <img
                                        src={
                                            "../../images/profile-img-product.png"
                                        }
                                        alt=""
                                    ></img>
                                    <div className="product-profile-details">
                                        <p>Creator</p>
                                        <h5>Hakunamatata</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="product-img-time">
                                <img
                                    src={"../../images/product-img-block.png"}
                                    alt=""
                                ></img>
                            </div>
                            <div className="product-details-profile">
                                <div className="product-profile">
                                    <img
                                        src={
                                            "../../images/profile-img-product.png"
                                        }
                                        alt=""
                                    ></img>
                                    <div className="product-profile-details">
                                        <p>Collection</p>
                                        <h5>Hakunamatata</h5>
                                    </div>
                                </div>
                                <div className="product-profile">
                                    <div className="product-profile-details">
                                        <p>Price</p>
                                        <h5>
                                            <span className="img-price-text">
                                                0.0041
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt=""
                                                    className="eth-price"
                                                ></img>
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details-profile">
                                <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            </div>
                            <div className="btn-product">
                                <button>
                                    <span>Purchase</span>
                                </button>
                            </div>
                        </div>
                    </div> */}
                            </div>
                        )}
                        {loading && page > 1 && (
                            <div className="d-flex justify-content-center m-3">
                                <Spinner size="lg" />
                            </div>
                        )}
                        {!loading && hasMore && (
                            <div className="common-btn-block">
                                <Button
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
        </>
    );
};

export default NFTsTab;
