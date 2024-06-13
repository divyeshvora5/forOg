/** @format */

import { Container, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { useRanking } from "@/hooks/useFetchHooks";
import {
    CountParser,
    ResolvePercentage,
    fixDecimal,
    usdFormatter,
} from "@/utils";
import { CHAIN_LOGO, CHAIN_SYMBOL, NATIVE_CURRENCY } from "@/constant";
import PaginationCustom from "@/components/Common/PaginationCustom";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";
import PageTitle from "@/components/Common/PageTitle";

const rankingPage = () => {
    const {
        loading,
        categorys,
        ranking,
        count,
        totalPages,
        page,
        limit,
        payload,
        categoryChange,
        handlePageChange,
    } = useRanking();

    const router = useRouter();
    const handleRoute = (address) => {
        if (!address) return;
        router.push(PATH_DASHBOARD.explore.collection(address));
    };

    const TABLE_HEADINGS = [
        { label: "#", isSortable: true },
        { label: "Collection", isSortable: true },
        { label: "Volume", isSortable: true },
        { label: "Chain", isSortable: true },
        { label: "24h %", isSortable: true },
        { label: "7d %", isSortable: true },
        { label: "Floor Price", isSortable: true },
        { label: "Owners", isSortable: true },
        { label: "Assets", isSortable: true },
    ];

    return (
      <>
        {' '}
        <PageTitle title={'Ranking'} />
        <CommonPageBlockPad className='dark-mode-body'>
          <Container>
            <div className='graphics-inner-diff diff-img-graphics'>
              {/* <img src={'../../images/graphics-img-ranking.svg'} alt='graphics-img'></img> */}
            </div>
            <div className='graphics-inner-shape-two diff-ranking'>
              {/* <img src={'../../images/graphics-block-inner-2.png'} alt='graphics-img'></img> */}
            </div>
            {/* <div className='graphics-inner-shape-three'>
          <img src={'../../images/graphics-block-inner-3.png'} alt='graphics-img'></img>
        </div> */}
            <div className='ranking-table-block'>
              <div className='ranking-table-block-top-button'>
                <button
                  onClick={() => {
                    categoryChange(null);
                  }}
                  className={`${payload.stateCategory[0] == null ? 'selected' : ''}`}>
                  All
                </button>
                {[...categorys]
                  ?.sort((a, b) => a.label.localeCompare(b.label))
                  ?.map(({ value, label }, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        categoryChange(value);
                      }}
                      className={`${payload.stateCategory[0] == value ? 'selected' : ''}`}>
                      {label}
                    </button>
                  ))}
              </div>
              <div className='ranking-table-block'>
                <Table>
                  <thead>
                    <tr>
                      {TABLE_HEADINGS.map(({ label }, index) => (
                        <th key={index}>{label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                          <Spinner size='md' />
                        </td>
                      </tr>
                    ) : !ranking?.length > 0 ? (
                      <tr>
                        <td colSpan={TABLE_HEADINGS.length} className='text-center'>
                          {/* No data found */}
                        </td>
                      </tr>
                    ) : (
                      ranking?.map(
                        (
                          {
                            address,
                            collectionImage,
                            collectionName,
                            tradingVolume,
                            dayPercentage,
                            weekPercentage,
                            floorPrice,
                            chainId,
                            totalOwners,
                            totalItemCount
                          },
                          index
                        ) => (
                          <tr key={index} className='pointer' onClick={() => handleRoute(address)}>
                            <td>{(page - 1) * limit + index + 1}</td>
                            <td>
                              <div className='collection-name'>
                                <div className='collection-profile'>
                                  <img
                                    src={collectionImage || '../../images/collection-img.png'}
                                    alt='product-img'></img>
                                  {/* <div className="verify-dots">
                                                                    <img
                                                                        src={
                                                                            "../../images/check-verify-img.svg"
                                                                        }
                                                                        alt="check-img"
                                                                    ></img>
                                                                </div> */}
                                </div>
                                <h3>{collectionName || '-'}</h3>
                              </div>
                            </td>
                            <td>{usdFormatter.format(tradingVolume || 0)}</td>
                            <td>
                              <div className="puls-chin-logo">
                              <img src={CHAIN_LOGO[chainId]} alt='chainLogo' /> {CHAIN_SYMBOL[chainId]}
                              </div>
                            </td>
                            {ResolvePercentage(dayPercentage)}
                            {ResolvePercentage(weekPercentage)}
                            <td>
                              {CountParser(floorPrice, 4)} {NATIVE_CURRENCY[chainId]}
                            </td>
                            <td>{CountParser(totalOwners || 0)}</td>
                            <td>{CountParser(totalItemCount || 0)}</td>
                          </tr>
                        )
                      )
                    )}
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

export default rankingPage;
