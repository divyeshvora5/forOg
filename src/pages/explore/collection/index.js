import PageTitle from "@/components/Common/PageTitle";
import PaginationCustom from "@/components/Common/PaginationCustom";
import { CHAIN_LOGO } from "@/constant";
import { usePopularCollection } from "@/hooks/useFetchHooks";
import { PATH_DASHBOARD } from "@/routes/paths";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { CountParser, ResolvePercentage } from "@/utils";
import { useRouter } from "next/router";
import React from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import Select from "react-select";

const popularCollectionsPage = () => {
    const {
        loading,
        popularCollections,
        count,
        totalPages,
        page,
        limit,
        payload,
        TimePeriod,
        timePeriodChange,
        handlePageChange,
        handleSearch,
    } = usePopularCollection();
    const router = useRouter();

    const handleRouteChange = (collection) => {
        router.push({
            pathname: PATH_DASHBOARD.explore.collection(collection),
        });
    };

    return (
      <>
        <PageTitle title={'Popular-Collections'} />
        <CommonPageBlockPad className='dark-mode-body'>
          <Container>
            <div className='graphics-inner-diff diff-img-graphics'>
              {/* <img src={'../../images/graphics-img-ranking.svg'} alt='graphics-img'></img> */}
            </div>
            <div className='graphics-inner-shape-two diff-ranking'>
              {/* <img src={'../../images/graphics-block-inner-2.png'} alt='graphics-img'></img> */}
            </div>
            <div className='common-title-page text-center-space'>
              <h1>Popular Collections</h1>
            </div>
            <div className='search-select'>
              <div className='search-box-inner'>
                {/* <form> */}
                <div className='search-box-form'>
                  <input
                    type='text'
                    name='GlobalSearch'
                    autoComplete='off'
                    placeholder='Filter by Collection Name'
                    onChange={handleSearch}
                  />
                  <button>
                    <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g opacity='0.4' clip-path='url(#clip0_73_3465)'>
                        <path
                          d='M11.1555 18C15.2977 18 18.6555 14.6421 18.6555 10.5C18.6555 6.35786 15.2977 3 11.1555 3C7.01338 3 3.65552 6.35786 3.65552 10.5C3.65552 14.6421 7.01338 18 11.1555 18Z'
                          stroke='#191820'
                          stroke-width='3'
                          stroke-linecap='round'
                          stroke-linejoin='round'></path>
                        <path
                          d='M16.459 15.8037L21.6555 21.0003'
                          stroke='#191820'
                          stroke-width='3'
                          stroke-linecap='round'
                          stroke-linejoin='round'></path>
                      </g>
                      <defs>
                        <clipPath id='clip0_73_3465'>
                          <rect width='24' height='24' fill='white' transform='translate(0.655518)'></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                {/* </form> */}
              </div>
              <Select
                name='colors'
                options={TimePeriod}
                className='TX-select2-wrapper'
                classNamePrefix='TX-fix-select'
                defaultValue={TimePeriod[1]}
                onChange={timePeriodChange}
              />
            </div>
            <div className='ranking-table-block'>
              <div className='ranking-table-block'>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Collection</th>
                      <th>Floor</th>
                      <th>24h Vol</th>
                      <th>24h % Vol</th>
                      <th>Sales</th>
                      <th>Total Vol</th>
                      <th>Owners</th>
                      <th>Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={9} className='text-center'>
                          <Spinner size='md' />
                        </td>
                      </tr>
                    ) : !popularCollections?.length > 0 ? (
                      <tr>
                        <td colSpan={9} className='text-center'>
                          {/* No data found */}
                        </td>
                      </tr>
                    ) : (
                      popularCollections?.map(
                        (
                          {
                            _id,
                            image,
                            name,
                            floor,
                            sales,
                            totalVolume,
                            owners,
                            address,
                            chainId,
                            type,
                            dayVolume,
                            dayPercentage,
                            supply
                          },
                          index
                        ) => (
                          <tr
                            key={index}
                            onClick={() => handleRouteChange(address)}
                            style={{
                              cursor: 'pointer'
                            }}>
                            <td>{(page - 1) * limit + index + 1}</td>
                            <td>
                              <div className='collection-name'>
                                <div className='collection-profile'>
                                  <img src={image || '../../images/collection-img.png'} alt='product-img'></img>
                                  {/* <div className="verify-dots">
                                                                    <img
                                                                        src={
                                                                            "../../images/check-verify-img.svg"
                                                                        }
                                                                        alt="check-img"
                                                                    ></img>
                                                                </div> */}
                                </div>
                                <h3 className='flex-reward'>
                                  {name}{' '}
                                  {/* <div className="reward-block">
                                                                    <svg
                                                                        width="11"
                                                                        height="10"
                                                                        viewBox="0 0 11 10"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            x="5.65674"
                                                                            y="0.757964"
                                                                            width="6"
                                                                            height="6"
                                                                            rx="1"
                                                                            transform="rotate(45 5.65674 0.757964)"
                                                                            stroke="white"
                                                                            stroke-width="2"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        Rewards
                                                                    </span>
                                                                </div> */}
                                </h3>
                              </div>
                            </td>
                            <td>{CountParser(floor, 4)}</td>
                            <td>{CountParser(dayVolume, 4)}</td>
                            {ResolvePercentage(dayPercentage)}
                            <td>{sales}</td>
                            <td>
                              <div className='total-volume-block'>
                                <img src={CHAIN_LOGO[chainId]} alt='icon-img'></img>
                                <p>{CountParser(totalVolume, 4)}</p>
                              </div>
                            </td>
                            <td>{owners}</td>
                            <td>{CountParser(supply, 4)}</td>
                          </tr>
                        )
                      )
                    )}
                    {/* <tr>
                                        <td>1(Static)</td>
                                        <td>
                                            <div className="collection-name">
                                                <div className="collection-profile">
                                                    <img
                                                        src={
                                                            "../../images/collection-img.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="verify-dots">
                                                        <img
                                                            src={
                                                                "../../images/check-verify-img.svg"
                                                            }
                                                            alt="check-img"
                                                        ></img>
                                                    </div>
                                                </div>
                                                <h3>Abstraction</h3>
                                            </div>
                                        </td>
                                        <td>102.53</td>
                                        <td>23.7K</td>
                                        <td className="green-text">+3456%</td>
                                        <td>226</td>
                                        <td>
                                            <div className="total-volume-block">
                                                <img
                                                    src={
                                                        "../../images/icon-total-table.png"
                                                    }
                                                    alt="icon-img"
                                                ></img>
                                                <p>2M</p>
                                            </div>
                                        </td>
                                        <td>3.3k</td>
                                        <td>23k</td>
                                    </tr> */}
                  </tbody>
                </Table>
                <PaginationCustom totalPages={totalPages || 1} page={page || 1} onPageChange={handlePageChange} />
              </div>
            </div>
          </Container>
        </CommonPageBlockPad>
      </>
    );
};

export default popularCollectionsPage;
