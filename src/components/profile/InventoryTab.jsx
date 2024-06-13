import { useInventory } from "@/hooks/useProfileHook";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { CHAIN_LOGO, edges } from "@/constant";
import { getItemDetailsQueryParams, getNameByChainId } from "@/utils";
import Select from "react-select";
import { Button } from "@/styles/pages/main.style";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";

const InventoryTab = () => {
    const {
        loading,
        items,
        count,
        totalPages,
        page,
        limit,
        hasMore,
        payload,
        handlePageChange,
        handleLimitChange,
        handleFilterChange,
    } = useInventory();
    const [sortedItems, setSortedItems] = useState([]);
    const [sortBy, setSortBy] = useState();
    const [sortOrder, setSortOrder] = useState("ASC");

    const router = useRouter();
    const handleRoute = (address = "", tokenid) => {
        router.push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                itemCollection: address?.toLowerCase(),
                tokenId: tokenid,
            },
        });
    };
    getItemDetailsQueryParams;
    useEffect(() => {
        if (!sortBy) {
            setSortedItems(items);
            return;
        }
        const sorted = [...items].sort((a, b) => {
            let result;
            if (a[sortBy] < b[sortBy]) result = -1;
            if (a[sortBy] > b[sortBy]) result = 1;
            return sortOrder === "ASC" ? result : -result;
        });
        setSortedItems(sorted);
    }, [items, sortBy, sortOrder]);

    const handleSortButtonClick = (sortKey) => {
        if (sortBy === sortKey) {
            setSortOrder((prevOrder) => (prevOrder === "ASC" ? "DESC" : "ASC"));
        } else {
            setSortOrder("ASC");
        }
        setSortBy(sortKey);
    };
    const TABLE_HEADINGS = [
        { label: "Name", id: "name", isSortable: true },
        { label: "Collection", id: "collectionName", isSortable: true },
        { label: "Category", id: "category", isSortable: true },
        { label: "Blockchain", id: "symbol", isSortable: true },
        { label: "Bid", id: "", isSortable: true },
        { label: "Views", id: "", isSortable: true },
        { label: "Type", id: "listingType", isSortable: true },
        { label: "", id: "", isSortable: false },
    ];

    const limits = [10, 50, 100];

    const options = [
        { value: "All", label: "All" },
        { value: "Listing", label: "On Sale" },
        { value: "Auction", label: "On Auction" },
        { value: "NOT_FOR_SALE", label: "Not for Sale" },
    ];
    return (
      <>
        <div className='tab-block-right'>
          <h2 className='title-text-right'>Inventory</h2>
          <div className='search-select d-flex-right'>
            <div className='btn-showing-block'>
              <p> Showing:</p>
              {limits.map((limitPerPage, i) => (
                <button
                  key={i}
                  className={limit === limitPerPage ? 'selected' : 'limitButton'}
                  onClick={() => handleLimitChange(limitPerPage)}>
                  {limitPerPage}
                </button>
              ))}
            </div>
            <Select
              name='TypeFilter'
              options={options}
              className='TX-select2-wrapper'
              classNamePrefix='TX-fix-select'
              onChange={handleFilterChange}
              defaultValue={options[0]}
            />
          </div>
          <div className='table-block-scroll'>
            <Table>
              <thead>
                <tr>
                  {TABLE_HEADINGS.map(({ label, id, isSortable }, index) => (
                    <th key={index}>
                      {label}{' '}
                      {isSortable ? (
                        <button className='btn' onClick={() => handleSortButtonClick(id)}>
                          {/* <img src={'../../images/sorting-icon.svg'} alt='sorting-img'></img> */}
                          <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M8.44531 0.433594L5 3.87891L1.55469 0.433594L0.5 1.48828L5 5.98828L9.5 1.48828L8.44531 0.433594Z'
                              fill='#191820'
                            />
                          </svg>
                        </button>
                      ) : (
                        ''
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!loading && !sortedItems.length ? (
                  <tr>
                    <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                      {/* No data found */}
                    </td>
                  </tr>
                ) : (
                  sortedItems?.map(
                    (
                      {
                        category,
                        name,
                        image,
                        chainId,
                        collectionName,
                        symbol,
                        listingType,
                        latestBid,
                        itemCollection,
                        tokenId,
                        viewsCount
                      },
                      index
                    ) => (
                      <tr key={index}>
                        <td>
                          <div className='collection-name'>
                            <div className='collection-profile'>
                              <img src={image || '../../images/profile-img-new.png'} alt='profile-img'></img>
                            </div>
                            <h3>{name || ''}</h3>
                          </div>
                        </td>
                        <td>{collectionName || ''}</td>
                        <td>{category || ''}</td>
                        <td>
                          <div className='total-volume-block'>
                            <img src={CHAIN_LOGO[chainId]} alt='img' />
                            <p>{getNameByChainId(chainId)}</p>
                          </div>
                        </td>
                        <td>{latestBid || '-'}</td>
                        <td>{viewsCount}</td>
                        <td>
                          <div className='auction-link-block-left'>{listingType || ''}</div>
                        </td>
                        <td>
                          <div className='auction-link-block-left'>
                            <div className='auction-link-block'>
                              <p onClick={() => handleRoute(itemCollection, tokenId)} className='pointer'>
                                <svg
                                  width='20'
                                  height='20'
                                  viewBox='0 0 20 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M5.00016 11.6666C4.54183 11.6666 4.14933 11.5033 3.82266 11.1766C3.496 10.8499 3.33294 10.4577 3.3335 9.99992C3.3335 9.54159 3.49683 9.14909 3.8235 8.82242C4.15016 8.49575 4.54239 8.3327 5.00016 8.33325C5.4585 8.33325 5.851 8.49659 6.17766 8.82325C6.50433 9.14992 6.66739 9.54214 6.66683 9.99992C6.66683 10.4583 6.5035 10.8508 6.17683 11.1774C5.85016 11.5041 5.45794 11.6671 5.00016 11.6666ZM10.0002 11.6666C9.54183 11.6666 9.14933 11.5033 8.82266 11.1766C8.496 10.8499 8.33294 10.4577 8.3335 9.99992C8.3335 9.54159 8.49683 9.14909 8.8235 8.82242C9.15016 8.49575 9.54239 8.3327 10.0002 8.33325C10.4585 8.33325 10.851 8.49659 11.1777 8.82325C11.5043 9.14992 11.6674 9.54214 11.6668 9.99992C11.6668 10.4583 11.5035 10.8508 11.1768 11.1774C10.8502 11.5041 10.4579 11.6671 10.0002 11.6666ZM15.0002 11.6666C14.5418 11.6666 14.1493 11.5033 13.8227 11.1766C13.496 10.8499 13.3329 10.4577 13.3335 9.99992C13.3335 9.54159 13.4968 9.14909 13.8235 8.82242C14.1502 8.49575 14.5424 8.3327 15.0002 8.33325C15.4585 8.33325 15.851 8.49659 16.1777 8.82325C16.5043 9.14992 16.6674 9.54214 16.6668 9.99992C16.6668 10.4583 16.5035 10.8508 16.1768 11.1774C15.8502 11.5041 15.4579 11.6671 15.0002 11.6666Z'
                                    fill='black'
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  )
                )}
                {loading ? (
                  <tr>
                    <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                      <Spinner size='md' />
                    </td>
                  </tr>
                ) : (
                  ''
                )}
              </tbody>
            </Table>
          </div>
          {!loading && hasMore ? (
            <div className='load-more-btn'>
              <Button isBorderBtn={true} onClick={handlePageChange} className='border-dark-button'>
                Load More
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
};

export default InventoryTab;

// {
//     _id,
//     id,
//     timestamp,
//     itemCollection,
//     category,
//     tokenId,
//     type,
//     uri,
//     supply,
//     name,
//     description,
//     image,
//     animation_url,
//     asset_type,
//     attributes,
//     marketPrice,
//     likeCount,
//     likes,
//     favourite,
//     isSynced,
//     isThumbSynced,
//     isAnimSynced,
//     chainId,
//     lock,
//     lastListedTimestamp,
//     lastSaleTimestamp,
//     hourVolume,
//     dayVolume,
//     weekVolume,
//     monthVolume,
//     createdAt,
//     updatedAt,
//     __v,
//     collectionName,
//     collectionLogo,
//     collectionAddress,
//     price,
//     currency,
//     decimal,
//     symbol,
//     liked,
//     totalBalance
//     }
