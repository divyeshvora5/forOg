import { ITEM_LISTING_STATUS } from "@/constant";
import { globalState } from "@/redux/reducer/globalSlice";
import {
    marketState,
    setRefetchAction,
    setSelectedItem,
} from "@/redux/reducer/marketSlice";
import { GetNftListingService } from "@/redux/services/itemServices";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Button } from "@/styles/pages/main.style";
import { CountParser, usdFormatter } from "@/utils";
import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

const ListingList = ({ item, selectedtab }) => {
    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);
    const { contractLoading } = useSelector(marketState);

    const dispatch = useDispatch();

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedRow, setSelectedRow] = useState();

    //pagination
    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const TABLE_HEADINGS = [
        { label: "Price", center: true },
        { label: "USD Price", center: true },
        { label: "Quantity", center: true },
        { label: "Expiration", center: true },
        { label: "From", center: true },
        { label: "Buy Now", center: true },
    ];

    const fetchListing = async (reset = false) => {
        const localPage = reset ? 1 : page + 1;
        try {
            setLoading(true);
            const { data } = await GetNftListingService({
                itemCollection: item?.itemCollection?.toLowerCase(),
                tokenId: item?.tokenId,
                // chainId: chainId,
                listingType: ITEM_LISTING_STATUS.LISTING,
                limit: 10,
                page: localPage,
            });
        
            setPage(localPage);
            setTotalPages(data?.totalPages);
            setCount(data?.count);
            setListings((prev) =>
                reset ? data?.data : [...prev, ...data?.data]
            );
            setHasMore(data?.totalPages > localPage);
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
            // if (refetch === "Listing") {
            // 	dispatch(setRefetchAction(null));
            // }
        }
    };

    const FromNow = (date) => {
        if (!date) return;
        let diff = date - Date.now();
        let d = moment(new Date(date), "YYYYMMDD").fromNow();
        if (diff > 63072000000){               //2*365*24*60*60*1000 (2 years)
            return "> 2 years";
        }
        return d;
    };

    const setCurrentItem = (currentItem) => {
        if (contractLoading) return;
        dispatch(setSelectedItem(currentItem));
        setSelectedRow(currentItem?.uniqueId);
    };

    useEffect(() => {
        if (!item) return;
        fetchListing(true);
    }, [item]);

    // useEffect(() => {
    // 	if (refetch === "Listing") {
    // 		fetchListing(true);
    // 	}
    // }, [refetch]);

    useEffect(() => {
        if (selectedtab !== ITEM_LISTING_STATUS.LISTING) return;
        if (listings?.length) return setCurrentItem(listings[0]);
        setCurrentItem({});
    }, [listings, selectedtab]);

    return (
      <div className='offer-table-block new-table-block'>
        {/* <InfiniteScroll
				dataLength={listings.length}
				next={fetchListing}
				hasMore={hasMore}
				style={{ overflow: "hidden" }}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p
						style={{
							textAlign: "center",
						}}
					></p>
				}
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3
						style={{
							textAlign: "center",
						}}
					>
						&#8595; Pull down to refresh
					</h3>
				}
				releaseToRefreshContent={
					<h3
						style={{
							textAlign: "center",
						}}
					>
						&#8593; Release to refresh
					</h3>
				}
			> */}
        <table>
          <thead>
            <tr>
              {TABLE_HEADINGS.map(({ label, center }, index) => (
                <th key={index} className={`${center && 'th-center'}`}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!listings.length ? (
              <tr>
                <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                  {/* No data found */}
                </td>
              </tr>
            ) : (
              listings?.map((listing) => (
                <tr onClick={() => setCurrentItem(listing)} className='pointer' key={listing?.uniqueId}>
                  <td className='td-center'>
                    {CountParser(listing?.price || 0, 4)} {listing?.symbol}
                  </td>
                  <td className='td-center'>
                    {usdFormatter.format(listing?.usdPrice || 0)}
                    {/* ${CountParser(listing?.usdPrice || 0, 4)} */}
                  </td>
                  <td className='td-center'>{listing?.quantity}</td>
                  <td className='td-center'>{FromNow(listing?.endTime)}</td>
                  <td className='td-center'>
                    <Link href={PATH_DASHBOARD.user.detail(listing?.lister)}>{listing?.listingCreatorName}</Link>
                  </td>
                  <td className='td-center'>
                    <Button
                      // onClick={handleShow}
                      className='button-bid'
                      disabled={listing?.uniqueId === selectedRow || contractLoading}>
                      {listing?.uniqueId === selectedRow ? 'Selected' : 'Select'}
                    </Button>
                  </td>
                </tr>
              ))
            )}
            {loading ? (
              <tr>
                <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                  <Spinner size='sm' />
                </td>
              </tr>
            ) : (
              ''
            )}
          </tbody>
        </table>
        {!loading && hasMore ? (
          <div className='load-more-btn d-flex justify-content-center mt-3'>
            <Button
              className='border-dark-button'
              isBorderBtn={true}
              onClick={() => fetchListing(false)}
              style={{ width: '10rem' }}>
              Load More
            </Button>
          </div>
        ) : (
          ''
        )}
        {/* </InfiniteScroll> */}
      </div>
    );
};

export default ListingList;
