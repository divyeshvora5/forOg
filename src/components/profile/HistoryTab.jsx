import { EVENT_NAMES } from "@/constant";
import { useHistoryItems } from "@/hooks/useProfileHook";
import { Button } from "@/styles/pages/main.style";
import { CountParser } from "@/utils";
import moment from "moment";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import LikeSvg from "/public/images/eventSvgs/like.svg";
import PurchaseSvg from "/public/images/eventSvgs/purchase.svg";
import BidSvg from "/public/images/eventSvgs/bid.svg";
import FollowingSvg from "/public/images/eventSvgs/following.svg";
import OfferSvg from "/public/images/eventSvgs/offer.svg";
import MintSvg from "/public/images/eventSvgs/mint.svg";

const HistoryTab = () => {
    const {
        account,
        loading,
        events,
        count,
        totalPages,
        page,
        limit,
        hasMore,
        payload,
        eventsNames,
        filterChange,
        handlePageChange,
        handleSearch,
        resetHandler
    } = useHistoryItems();

    const EventName = {
        Purchase: "Purchase",
        Offer: "Offer",
        Bids: "Bid",
        Following: "Following",
        Like: "Like",
        Minted: "Minted",
    };

    const EventText = {
        Purchase: "Purchased by",
        Offer: "Offered by",
        Bids: "Bided by",
        Following: "Started Following",
        Like: "Liked by",
        Minted: "Mint by",
    };

    const EventSVG = {
      //   Purchase: <img src={PurchaseSvg.src} alt='purchase' />,
      Purchase: (
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M8.35393 7.09367C8.35393 6.43063 8.61732 5.79474 9.08616 5.3259C9.555 4.85706 10.1909 4.59367 10.8539 4.59367C11.517 4.59367 12.1529 4.85706 12.6217 5.3259C13.0905 5.79474 13.3539 6.43063 13.3539 7.09367H8.35393ZM6.68726 7.09367C6.68726 5.9886 7.12625 4.92879 7.90765 4.14739C8.68905 3.36599 9.74886 2.927 10.8539 2.927C11.959 2.927 13.0188 3.36599 13.8002 4.14739C14.5816 4.92879 15.0206 5.9886 15.0206 7.09367H17.5206C17.6364 7.09366 17.7509 7.11777 17.8568 7.16447C17.9627 7.21116 18.0577 7.27941 18.1358 7.36487C18.2139 7.45033 18.2733 7.55112 18.3103 7.66081C18.3473 7.77051 18.361 7.88671 18.3506 8.002L17.6548 15.6537C17.5982 16.2748 17.3115 16.8524 16.851 17.273C16.3904 17.6936 15.7893 17.9269 15.1656 17.927H6.54226C5.91855 17.9269 5.31742 17.6936 4.85688 17.273C4.39633 16.8524 4.10965 16.2748 4.0531 15.6537L3.35726 8.002C3.34685 7.88671 3.36056 7.77051 3.39754 7.66081C3.43452 7.55112 3.49394 7.45033 3.57203 7.36487C3.65012 7.27941 3.74516 7.21116 3.85108 7.16447C3.95701 7.11777 4.0715 7.09366 4.18726 7.09367H6.68726Z'
            fill='black'
          />
        </svg>
      ),
      //   Offer: <img src={OfferSvg.src} alt='offer' />,
      Offer: (
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_577_5648)'>
            <path
              d='M17.5609 9.93627L8.81087 19.3113C8.71814 19.4102 8.59574 19.4763 8.46215 19.4996C8.32855 19.5229 8.191 19.5021 8.07026 19.4404C7.94952 19.3787 7.85213 19.2793 7.7928 19.1574C7.73346 19.0354 7.7154 18.8975 7.74133 18.7644L8.88665 13.0355L4.3843 11.3449C4.28761 11.3087 4.20138 11.2491 4.13332 11.1715C4.06526 11.0939 4.01749 11.0006 3.99428 10.9C3.97106 10.7994 3.97313 10.6946 4.00029 10.595C4.02745 10.4954 4.07886 10.4041 4.14993 10.3292L12.8999 0.954242C12.9927 0.855286 13.115 0.789173 13.2486 0.765881C13.3822 0.742588 13.5198 0.76338 13.6405 0.825118C13.7613 0.886857 13.8587 0.986192 13.918 1.10813C13.9773 1.23008 13.9954 1.36801 13.9695 1.50112L12.821 7.23627L17.3234 8.92455C17.4193 8.96097 17.5049 9.02046 17.5724 9.09778C17.6399 9.1751 17.6874 9.26786 17.7106 9.36787C17.7337 9.46787 17.7319 9.57205 17.7052 9.67118C17.6786 9.77032 17.6279 9.86137 17.5577 9.93627H17.5609Z'
              fill='black'
            />
          </g>
          <defs>
            <clipPath id='clip0_577_5648'>
              <rect width='20' height='20' fill='white' transform='translate(0.853882 0.134766)' />
            </clipPath>
          </defs>
        </svg>
      ),
      //   Bids: <img src={BidSvg.src} alt='bid' />,
      Bids: (
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_577_5620)'>
            <path
              d='M2.5922 9.14533C2.39869 9.3388 2.24518 9.56848 2.14045 9.82128C2.03572 10.0741 1.98181 10.345 1.98181 10.6187C1.98181 10.8923 2.03572 11.1633 2.14045 11.416C2.24518 11.6688 2.39869 11.8985 2.5922 12.092L4.9497 14.4487C5.28815 14.7871 5.73281 14.9987 6.20892 15.0478C6.68503 15.097 7.16354 14.9807 7.56399 14.7185C7.96444 14.4564 8.2624 14.0643 8.40777 13.6083C8.55313 13.1522 8.53704 12.6601 8.3622 12.2145L9.02137 11.5553L14.3605 17.7153C14.5699 17.9567 14.8268 18.1523 15.1151 18.2901C15.4034 18.4279 15.7169 18.5048 16.0363 18.5161C16.3556 18.5275 16.6738 18.4729 16.9711 18.3559C17.2685 18.2388 17.5385 18.0618 17.7644 17.8359C17.9904 17.61 18.1674 17.3399 18.2844 17.0426C18.4014 16.7453 18.456 16.427 18.4447 16.1077C18.4334 15.7884 18.3564 15.4748 18.2187 15.1865C18.0809 14.8982 17.8852 14.6414 17.6439 14.432L11.4839 9.09283L12.143 8.4345C12.5887 8.60977 13.0812 8.62612 13.5376 8.48079C13.9939 8.33547 14.3863 8.03735 14.6486 7.63663C14.9109 7.23591 15.0271 6.75705 14.9776 6.28068C14.9282 5.8043 14.7162 5.35951 14.3772 5.02117L12.0205 2.66367C11.6821 2.32522 11.2374 2.11363 10.7613 2.06448C10.2852 2.01533 9.80669 2.13163 9.40625 2.3938C9.0058 2.65597 8.70784 3.04804 8.56247 3.50407C8.4171 3.9601 8.43319 4.45227 8.60803 4.89783L4.8272 8.67867C4.44967 8.53046 4.03709 8.49567 3.64008 8.57856C3.24306 8.66146 2.87888 8.85844 2.5922 9.14533Z'
              fill='black'
            />
          </g>
          <defs>
            <clipPath id='clip0_577_5620'>
              <rect width='20' height='20' fill='white' transform='translate(0.353882 0.427002)' />
            </clipPath>
          </defs>
        </svg>
      ),
      //   Following: <img src={FollowingSvg.src} alt='following' />,
      Following: (
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M13.3334 9.16675C14.7167 9.16675 15.825 8.05008 15.825 6.66675C15.825 5.28341 14.7167 4.16675 13.3334 4.16675C11.95 4.16675 10.8334 5.28341 10.8334 6.66675C10.8334 8.05008 11.95 9.16675 13.3334 9.16675ZM6.66671 9.16675C8.05004 9.16675 9.15837 8.05008 9.15837 6.66675C9.15837 5.28341 8.05004 4.16675 6.66671 4.16675C5.28337 4.16675 4.16671 5.28341 4.16671 6.66675C4.16671 8.05008 5.28337 9.16675 6.66671 9.16675ZM6.66671 10.8334C4.72504 10.8334 0.833374 11.8084 0.833374 13.7501V15.8334H12.5V13.7501C12.5 11.8084 8.60837 10.8334 6.66671 10.8334ZM13.3334 10.8334C13.0917 10.8334 12.8167 10.8501 12.525 10.8751C13.4917 11.5751 14.1667 12.5167 14.1667 13.7501V15.8334H19.1667V13.7501C19.1667 11.8084 15.275 10.8334 13.3334 10.8334Z'
            fill='black'
          />
        </svg>
      ),
      //   Like: <img src={LikeSvg.src} alt='like' />,
      Like: (
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10.8538 17.7809L9.64551 16.6976C8.24273 15.4337 7.08301 14.3434 6.16634 13.4268C5.24967 12.5101 4.52051 11.687 3.97884 10.9576C3.43717 10.2287 3.05884 9.5587 2.84384 8.94759C2.62884 8.33648 2.52106 7.71148 2.52051 7.07259C2.52051 5.76704 2.95801 4.67676 3.83301 3.80176C4.70801 2.92676 5.79829 2.48926 7.10384 2.48926C7.82606 2.48926 8.51356 2.64204 9.16634 2.94759C9.81912 3.25315 10.3816 3.6837 10.8538 4.23926C11.3261 3.6837 11.8886 3.25315 12.5413 2.94759C13.1941 2.64204 13.8816 2.48926 14.6038 2.48926C15.9094 2.48926 16.9997 2.92676 17.8747 3.80176C18.7497 4.67676 19.1872 5.76704 19.1872 7.07259C19.1872 7.71148 19.0794 8.33648 18.8638 8.94759C18.6483 9.5587 18.27 10.2287 17.7288 10.9576C17.1872 11.687 16.458 12.5101 15.5413 13.4268C14.6247 14.3434 13.465 15.4337 12.0622 16.6976L10.8538 17.7809Z'
            fill='black'
          />
        </svg>
      ),
      //   Minted: <img src={MintSvg.src} alt='mint' />
      Minted: (
        <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_577_5620)'>
            <path
              d='M2.5922 9.14533C2.39869 9.3388 2.24518 9.56848 2.14045 9.82128C2.03572 10.0741 1.98181 10.345 1.98181 10.6187C1.98181 10.8923 2.03572 11.1633 2.14045 11.416C2.24518 11.6688 2.39869 11.8985 2.5922 12.092L4.9497 14.4487C5.28815 14.7871 5.73281 14.9987 6.20892 15.0478C6.68503 15.097 7.16354 14.9807 7.56399 14.7185C7.96444 14.4564 8.2624 14.0643 8.40777 13.6083C8.55313 13.1522 8.53704 12.6601 8.3622 12.2145L9.02137 11.5553L14.3605 17.7153C14.5699 17.9567 14.8268 18.1523 15.1151 18.2901C15.4034 18.4279 15.7169 18.5048 16.0363 18.5161C16.3556 18.5275 16.6738 18.4729 16.9711 18.3559C17.2685 18.2388 17.5385 18.0618 17.7644 17.8359C17.9904 17.61 18.1674 17.3399 18.2844 17.0426C18.4014 16.7453 18.456 16.427 18.4447 16.1077C18.4334 15.7884 18.3564 15.4748 18.2187 15.1865C18.0809 14.8982 17.8852 14.6414 17.6439 14.432L11.4839 9.09283L12.143 8.4345C12.5887 8.60977 13.0812 8.62612 13.5376 8.48079C13.9939 8.33547 14.3863 8.03735 14.6486 7.63663C14.9109 7.23591 15.0271 6.75705 14.9776 6.28068C14.9282 5.8043 14.7162 5.35951 14.3772 5.02117L12.0205 2.66367C11.6821 2.32522 11.2374 2.11363 10.7613 2.06448C10.2852 2.01533 9.80669 2.13163 9.40625 2.3938C9.0058 2.65597 8.70784 3.04804 8.56247 3.50407C8.4171 3.9601 8.43319 4.45227 8.60803 4.89783L4.8272 8.67867C4.44967 8.53046 4.03709 8.49567 3.64008 8.57856C3.24306 8.66146 2.87888 8.85844 2.5922 9.14533Z'
              fill='black'
            />
          </g>
          <defs>
            <clipPath id='clip0_577_5620'>
              <rect width='20' height='20' fill='white' transform='translate(0.353882 0.427002)' />
            </clipPath>
          </defs>
        </svg>
      )
    };

    // ["Purchase", "Offer", "Bids", "Following", "Like"]

    const NewRender = ({ event }) => {
        if (
            event.name === EventName.Purchase ||
            event.name === EventName.Minted
        ) {
            return (
                <>
                    <h3>{event?.itemName || ""}</h3>
                    <p className="text-title-name">
                        {EventText[event.name] || ""}{" "}
                        <span>
                            {event?.toUsername
                                ? event?.toUseraddress !== account
                                    ? event?.toUsername
                                    : "You"
                                : "unknown"}
                        </span>{" "}
                        {event?.price ? CountParser(event?.price, 4) : ""}{" "}
                        {event?.price ? event?.symbol : ""}
                    </p>
                </>
            );
        } else if (event.name !== EventName.Following) {
            return (
                <>
                    <h3>{event?.itemName || ""}</h3>
                    <p className="text-title-name">
                        {EventText[event.name] || ""}{" "}
                        <span>
                            {event?.fromUsername
                                ? event?.fromUseraddress !== account
                                    ? event?.fromUsername
                                    : "You"
                                : "unknown"}
                        </span>{" "}
                        {event?.price ? CountParser(event?.price, 4) : ""}{" "}
                        {event?.price ? event?.symbol : ""}
                    </p>
                </>
            );
        } else {
            return (
                <>
                    <h3>
                        {event?.fromUsername
                            ? event?.fromUseraddress !== account
                                ? event?.fromUsername
                                : "You"
                            : "unknown"}
                    </h3>
                    <p className="text-title-name">
                        Started Following{" "}
                        <span>
                            {event?.toUsername
                                ? event?.toUseraddress !== account
                                    ? event?.toUsername
                                    : "You"
                                : "unknown"}
                        </span>
                    </p>
                </>
            );
        }
    };

    return (
      <div className='tab-block-right'>
        <h2 className='title-text-right'>History</h2>
        <div className='tab-block-right-history-left'>
          <div className='tab-block-right-history-profile'>
            {events?.length
              ? events?.map((event, index) => (
                  <div className='tab-block-right-history-profile-inner' key={index}>
                    <div className='tab-block-right-history-profile-left'>
                      <img
                        src={event?.itemImage || event?.fromUserlogo || '../../images/profile-img-new.png'}
                        alt='img'></img>
                      <div className='tab-block-right-history-content-left'>
                        <NewRender event={event} />
                        <p className='text-date-time'>
                          {moment(new Date(event.date)).format('LT')} <span>•</span>{' '}
                          {moment(new Date(event.date)).format('L')}
                        </p>
                      </div>
                    </div>

                    <div className='tab-block-right-history-profile-right'>
                      <button>
                        {EventSVG[event.name]}
                        <span>{EventName[event.name]}</span>
                      </button>
                    </div>
                  </div>
                ))
              : ''}
            {loading ? (
              <>
                <div className='d-flex justify-content-center align-items-center items-center mt-3'>
                  <Spinner size='md' />
                </div>
              </>
            ) : (
              !events?.length && <p className='text-center mt-5'>
              {/* No events found */}
              </p>
            )}
            {!loading && hasMore && (
              <div className='load-more-btn'>
                <Button className='border-dark-button' isBorderBtn={true} onClick={handlePageChange}>
                  Load More
                </Button>
              </div>
            )}
          </div>
          <div className='tab-block-right-history-search'>
            <div className='search-box-inner'>
              {/* <form> */}
              <div className='search-box-form'>
                <input
                  type='text'
                  name='GlobalSearch'
                  autoComplete='off'
                  placeholder='Search'
                  value={payload.search}
                  onChange={handleSearch}
                />
                <button>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18.125 17.2411L13.405 12.5211C14.5393 11.1595 15.1049 9.41291 14.9842 7.64483C14.8635 5.87675 14.0658 4.22326 12.757 3.02834C11.4483 1.83341 9.72922 1.18906 7.95748 1.22932C6.18574 1.26958 4.49773 1.99134 3.2446 3.24448C1.99147 4.49761 1.2697 6.18562 1.22944 7.95736C1.18918 9.7291 1.83354 11.4482 3.02846 12.7569C4.22338 14.0657 5.87687 14.8634 7.64495 14.9841C9.41303 15.1047 11.1596 14.5391 12.5213 13.4049L17.2413 18.1249L18.125 17.2411ZM2.50001 8.12489C2.50001 7.01237 2.82991 5.92483 3.44799 4.99981C4.06608 4.07478 4.94458 3.35381 5.97242 2.92807C7.00025 2.50232 8.13125 2.39093 9.22239 2.60797C10.3135 2.82501 11.3158 3.36074 12.1025 4.14741C12.8892 4.93408 13.4249 5.93636 13.6419 7.02751C13.859 8.11865 13.7476 9.24965 13.3218 10.2775C12.8961 11.3053 12.1751 12.1838 11.2501 12.8019C10.3251 13.42 9.23753 13.7499 8.12501 13.7499C6.63368 13.7482 5.2039 13.1551 4.14936 12.1005C3.09483 11.046 2.50167 9.61622 2.50001 8.12489Z'
                      fill='#9E9E9E'
                    />
                  </svg>
                </button>
              </div>
              {/* </form> */}
            </div>
            <div className='search-filter-block'>
              <div className='search-filter-block-title'>
                <h4>Filter</h4>
                <p onClick={resetHandler} className='pointer'>
                  Reset
                </p>
              </div>
              <div className='search-filter-block-button'>
              {Object.keys(EventName).map((eventName, index)=>(
                <button onClick={() => filterChange(EVENT_NAMES[eventName])} key={index} className={`${payload?.event === EVENT_NAMES[eventName]? "selected" :""}`}>
                  {EventSVG[eventName]}
                  <span>{EVENT_NAMES[eventName]}</span>
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HistoryTab;

// {
//     _id,
//     name,
//     fromUsername,
//     fromUserlogo,
//     fromUseraddress,
//     toUsername,
//     toUserlogo,
//     toUseraddress,
//     itemName,
//     itemImage,
//     collectionName,
//     collectionImage,
//     symbol,
//     price,
//     date,
// }
