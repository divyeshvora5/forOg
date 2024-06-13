import { Histogram, ItemCard } from "@/components";
import ChainSelector from "@/components/Common/ChainSelector";
import PageTitle from "@/components/Common/PageTitle";
import ShowRecoredCount from "@/components/Common/ShowRecoredCount";
import CollectionFilter from "@/components/exploreNfts/CollectionFilter";
import { useItems } from "@/hooks/useFetchHooks";
import { useLikeItem } from "@/hooks/useHome";
import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import Link from "next/link";
import { Accordion, Spinner } from "react-bootstrap";
import Select from "react-select";

const exploreNFTS = () => {
    const {
        loading,
        categorys,
        priceArray,
        page,
        items,
        count,
        hasMore,
        filterOptions,
        orderOptions,
        filterChange,
        priceFilter,
        setPriceFilter,
        orderChange,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
        typeChange,
        handlePriceChange,
        handleCollectionChange,
    } = useItems();
    const { handleLike } = useLikeItem();

    const options = [
        { value: "chocolate", label: "Recently Listed" },
        { value: "strawberry", label: "Recently Sold" },
        { value: "vanilla", label: "Recently Received" },
        { value: "strawberry", label: "Recently Soon" },
        { value: "strawberry", label: "Recently Low to Hight" },
        { value: "strawberry", label: "Recently Last Sale" },
        { value: "strawberry", label: "Oldest" },
    ];
    return (
      <>
        <PageTitle title={"NFT's"} />
        <CommonPageBlockPad className='no-container-padding dark-mode-body'>
          <div className='graphics-inner-shape'>
            {/* <img src={'../../images/graphics-block-inner.png'} alt='graphics-img'></img> */}
          </div>
          <div className='graphics-inner-shape-two'>
            {/* <img src={'../../images/graphics-block-inner-2.png'} alt='graphics-img'></img> */}
          </div>
          <div className='graphics-inner-shape-three'>
            {/* <img src={'../../images/graphics-block-inner-3.png'} alt='graphics-img'></img> */}
          </div>
          <div className='explore-block-main'>
            <div className='common-title-page text-center-space'>
              <h1>Explore Items</h1>
            </div>
            <div className='filter-block-data-block'>
              <div className='filter-block-data-block-left'>
                <div className='filter-block-data-block-left-inner'>
                  <Accordion defaultActiveKey={["0","1","2","3","4","5"]} alwaysOpen>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>Search</Accordion.Header>
                      <Accordion.Body>
                        <div className='search-form-block'>
                          <div className='search-box-form'>
                            <input type='text' placeholder='Search NFT' name='Search-NFT' onChange={handleSearch} />
                            <button>
                              <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                  fill='#9E9E9E'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                      <Accordion.Header>Status</Accordion.Header>
                      <Accordion.Body>
                        <div className='checkbox-block-custom-filter'>
                          <div className='checkbox-filter-block'>
                            <input type='checkbox' id='buy' name='Listing' value='Listing' onChange={filterChange} />
                            <label for='buy'>
                              <span>
                                <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                              </span>
                              <h4>Buy Now</h4>
                            </label>
                          </div>
                          <div className='checkbox-filter-block'>
                            <input
                              type='checkbox'
                              id='auctions'
                              name='Auction'
                              value='Auction'
                              onChange={filterChange}></input>
                            <label for='auctions'>
                              <span>
                                <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                              </span>
                              <h4>On Auctions</h4>
                            </label>
                          </div>
                          <div className='checkbox-filter-block'>
                            <input
                              type='checkbox'
                              id='offers'
                              name='Offer'
                              value='Offer'
                              onChange={filterChange}></input>
                            <label for='offers'>
                              <span>
                                <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                              </span>
                              <h4>Has Offers</h4>
                            </label>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                      <Accordion.Header>Collections</Accordion.Header>
                      <Accordion.Body>
                        <CollectionFilter handleSelect={handleCollectionChange} />
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                      <Accordion.Header>Type</Accordion.Header>
                      <Accordion.Body>
                        <div className='checkbox-block-custom-filter'>
                          {categorys?.map((category) => (
                            <div className='checkbox-filter-block' key={category?.value}>
                              <input
                                type='checkbox'
                                id={category?.value}
                                value={category?.value}
                                name={category?.value}
                                onChange={handleCategorySelect}
                              />
                              <label for={category?.value}>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <h4>{category?.label}</h4>
                              </label>
                            </div>
                          ))}
                        </div>
                        {/* <div className="checkbox-block-custom-filter">
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="buy"
                                                    ></input>
                                                    <label for="buy">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <div className="flex-block-check">
                                                            <h4>Alien</h4>
                                                            <h4>68</h4>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="buy"
                                                    ></input>
                                                    <label for="buy">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <div className="flex-block-check">
                                                            <h4>Alien</h4>
                                                            <h4>68</h4>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="buy"
                                                    ></input>
                                                    <label for="buy">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <div className="flex-block-check">
                                                            <h4>Alien</h4>
                                                            <h4>68</h4>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="buy"
                                                    ></input>
                                                    <label for="buy">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <div className="flex-block-check">
                                                            <h4>Alien</h4>
                                                            <h4>68</h4>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div> */}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='4'>
                      {/* <Accordion.Header>
                                            Price
                                        </Accordion.Header> */}
                      <h5 className='fw-bold'>Price</h5>
                      {priceArray?.length > 1 && (
                        <>
                          <div className='d-flex mb-1'>
                            <div className='d-flex w-100'>
                              <Histogram
                                barMargin={1}
                                data={[...priceArray]}
                                getBoundries={(values) => {
                                  let newArr = [
                                    priceArray.find((item) => item.value === values?.selectionMin)?.price,
                                    priceArray.find((item) => item.value === values?.selectionMax)?.price
                                    // values?.selectionMin,
                                    // values?.selectionMax,
                                  ];
                                  setPriceFilter(newArr);
                                }}
                              />
                            </div>
                          </div>
                          <div className='d-flex justify-content-around'>
                            <Button
                              onClick={() => {
                                handlePriceChange([]);
                              }}
                              className='mt-2'
                              style={{
                                padding: '8px 12px',
                                width: '40%'
                              }}>
                              Reset
                            </Button>
                            <Button
                              onClick={() => {
                                handlePriceChange(priceFilter);
                              }}
                              className='mt-2'
                              style={{
                                padding: '8px 12px',
                                width: '40%'
                              }}>
                              Apply
                            </Button>
                          </div>
                        </>
                      )}
                      <Accordion.Body></Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='5'>
                      <Accordion.Header>Chains</Accordion.Header>
                      <Accordion.Body>
                        <div className='radio-last'>
                          <ChainSelector />
                          {/* <div className="radio-filter-block">
                                                    <input
                                                        type="radio"
                                                        id="test1"
                                                        name="radio-group"
                                                        checked
                                                    ></input>
                                                    <label for="test1">
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon.svg"
                                                            }
                                                            alt="check-icon"
                                                        ></img>
                                                        <h4>Ethereum (ETH)</h4>
                                                    </label>
                                                </div>
                                                <div className="radio-filter-block">
                                                    <input
                                                        type="radio"
                                                        id="test2"
                                                        name="radio-group"
                                                    ></input>
                                                    <label for="test2">
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon.svg"
                                                            }
                                                            alt="check-icon"
                                                        ></img>
                                                        <h4>Ethereum (ETH)</h4>
                                                    </label>
                                                </div>
                                                <div className="radio-filter-block">
                                                    <input
                                                        type="radio"
                                                        id="test3"
                                                        name="radio-group"
                                                    ></input>
                                                    <label for="test3">
                                                        <img
                                                            src={
                                                                "../../images/filter-icon.svg"
                                                            }
                                                            alt="check-icon"
                                                        ></img>
                                                        <h4>
                                                            PulseChain (PLS)
                                                        </h4>
                                                    </label>
                                                </div> */}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className='filter-block-data-block-right'>
                {/* <div className='addvertise-block'>
                  <img src={'../../images/addvertise-img.png'} alt='addvertise-icon'></img>
                </div> */}
                <div className='top-showing-result-block'>
                  <p>
                    <ShowRecoredCount page={page} data={items} count={count} />
                  </p>
                  <div className='select-block-explore'>
                    <div className='form-group'>
                      <Select
                        name='filter1'
                        options={filterOptions}
                        className='TX-select2-wrapper'
                        classNamePrefix='TX-fix-select'
                        onChange={typeChange}
                        defaultValue={filterOptions[0]}
                      />
                    </div>
                    <div className='form-group'>
                      <Select
                        name='filter2'
                        options={orderOptions}
                        className='TX-select2-wrapper'
                        classNamePrefix='TX-fix-select'
                        onChange={orderChange}
                        defaultValue={orderOptions[0]}
                      />
                    </div>
                  </div>
                </div>
                <CommonProductBLock className='explore-block-product'>
                  {loading && page == 1 ? (
                    <>
                      <div className='d-flex justify-content-center vh-100 align-items-center'>
                        <Spinner animation='border' size='lg' />
                      </div>
                    </>
                  ) : !items?.length > 0 ? (
                    <>
                      {/* <div className='d-flex justify-content-center'>No NFTs Found!</div> */}
                    </>
                  ) : (
                    <div className='common-product-block flex-width-five'>
                      {items?.map((item, index) => (
                        <ItemCard key={index} item={item} handleLike={handleLike} />
                      ))}
                    </div>
                  )}
                  {loading && page > 1 && (
                    <div className='d-flex justify-content-center mt-3'>
                      <Spinner size='lg' />
                    </div>
                  )}
                  {!loading && hasMore && (
                    <div className='common-btn-block'>
                      <Button className='border-dark-button' isBorderBtn={true} onClick={handlePageChange}>
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

export default exploreNFTS;
