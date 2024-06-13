import { useUserCollections } from "@/hooks/useProfileHook";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { CHAIN_LOGO } from "@/constant";
import { CountParser, getNameByChainId } from "@/utils";
import { Button } from "@/styles/pages/main.style";

const UserCollectionTab = () => {
    const {
        loading,
        items,
        limit,
        hasMore,
        handlePageChange,
        handleRouteChange,
        handleLimitChange,
        handleFilterChange,
    } = useUserCollections();
    const [sortedItems, setSortedItems] = useState([]);
    const [sortBy, setSortBy] = useState();
    const [sortOrder, setSortOrder] = useState("ASC");

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
        { label: "Category", id: "category", isSortable: true },
        { label: "Blockchain", id: "symbol", isSortable: true },
        { label: "Items", id: "totalItemCount", isSortable: true },
        { label: "Collectors", id: "totalOwners", isSortable: true },
        { label: "Volume", id: "tradingVolume", isSortable: true },
    ];

    const limits = [10, 50, 100];
    return (
      <>
        <div className='tab-block-right'>
          <h2 className='title-text-right'>Collections</h2>
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
            {/* <Select
                        name="colors"
                        options={options}
                        className="TX-select2-wrapper"
                        classNamePrefix="TX-fix-select"
                    /> */}
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
                {!loading && !sortedItems?.length > 0 ? (
                  <tr>
                    <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                      {/* No data found */}
                    </td>
                  </tr>
                ) : (
                  sortedItems?.map(
                    (
                      { address, image, name, category, chainId, totalOwners, totalItemCount, tradingVolume },
                      index
                    ) => (
                      <>
                        <tr key={index} onClick={() => handleRouteChange(address)} style={{ cursor: 'pointer' }}>
                          <td>
                            <div className='collection-name'>
                              <div className='collection-profile'>
                                <img src={image || '../../images/profile-img-new.png'} alt='profile-img'></img>
                              </div>
                              <h3>{name || ''}</h3>
                            </div>
                          </td>
                          <td>{category || ''}</td>
                          <td>
                            <div className='total-volume-block'>
                              <img src={CHAIN_LOGO[chainId]} alt='img' />
                              <p>{getNameByChainId(chainId)}</p>
                            </div>
                          </td>
                          <td>{CountParser(totalItemCount, 2)}</td>
                          <td>{CountParser(totalOwners, 2)}</td>
                          <td>{CountParser(tradingVolume, 4)}</td>
                        </tr>
                      </>
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
          {hasMore ? (
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

export default UserCollectionTab;

// {
//     _id,
//         timestamp,
//         creatorName,
//         creatorLogo,
//         creatorAddress,
//         address,
//         image,
//         name,
//         category,
//         type,
//         likes,
//         chainId,
//         description,
//         liked,
//         floorPrice,
//         symbol,
//         decimal,
//         currency,
//         totalOwners,
//         totalItemCount,
//         tradingVolume,
// }
