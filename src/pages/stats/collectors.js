/** @format */

import { Container, Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { useCollectors } from "@/hooks/useFetchHooks";
import PaginationCustom from "@/components/Common/PaginationCustom";
import { fixDecimal, usdFormatter } from "@/utils";
import PageTitle from "@/components/Common/PageTitle";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
const collectorPage = () => {
    const { push } = useRouter();
    const {
        loading,
        collectors,
        count,
        totalPages,
        page,
        limit,
        handlePageChange,
    } = useCollectors();
    const userRouteHandler = (address) => {
        push(PATH_DASHBOARD.user.detail(address));
    };

    return (
      <>
        <PageTitle title={'Collectors'} />
        <CommonPageBlockPad className='dark-mode-body'>
          <Container>
            <div className='graphics-inner-diff diff-img-graphics'>
              {/* <img src={'../../images/graphics-img-ranking.svg'} alt='graphics-img'></img> */}
            </div>
            <div className='graphics-inner-shape-two diff-ranking'>
              {/* <img src={'../../images/graphics-block-inner-2.png'} alt='graphics-img'></img> */}
            </div>
            {/* <div className='common-title-page'>
              <h1>Collectors</h1>
            </div> */}
            <div className='ranking-table-block'>
              <div className='ranking-table-block'>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Collector</th>
                      <th>Volume</th>
                      <th>Buy</th>
                      <th>Sell</th>
                      <th>Trade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={6} className='text-center'>
                          <Spinner size='md' />
                        </td>
                      </tr>
                    ) : !collectors?.length > 0 ? (
                      <tr>
                        <td colSpan={6} className='text-center'>
                          {/* No data found */}
                        </td>
                      </tr>
                    ) : (
                      collectors?.map(
                        ({ address, userLogo, userName, tradingVolume, buyNumber, sellAmount, trade }, index) => (
                          <tr key={index}>
                            <td>{(page - 1) * limit + index + 1}</td>
                            <td>
                              <div className='collection-name'>
                                <div className='collection-profile'>
                                  <img
                                    src={userLogo || '/images/user.svg'}
                                    alt='product-img'
                                    className='pointer'
                                    onClick={() => userRouteHandler(address)}></img>
                                  {/* <div className="verify-dots">
                                                                    <img
                                                                        src={
                                                                            "../../images/check-verfy.png"
                                                                        }
                                                                        alt="check-img"
                                                                    ></img>
                                                                </div> */}
                                </div>
                                <h3>{userName || '-'}</h3>
                              </div>
                            </td>
                            <td>{usdFormatter.format(tradingVolume || 0)}</td>
                            <td>{buyNumber || 0}</td>
                            <td>{sellAmount || 0}</td>
                            <td>{trade || 0}</td>
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

export default collectorPage;
