import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { globalState } from "@/redux/reducer/globalSlice";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { getGlobalSearchResultService } from "@/redux/services/globalServices";
import { PATH_DASHBOARD } from "@/routes/paths";

const GlobalSerach = ({ setShowDropdown, showDropdown }) => {
	const {
		walletDetalis: { chainId, account },
	} = useSelector(globalState);
	const router = useRouter();

	const searchRef = useRef(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [active, setActive] = useState(false);

	const [loading, setLoading] = useState(false);
	const [records, setRecords] = useState({
		users: [],
		collections: [],
		items: [],
	});
	const [trackrecords, setTrackrecords] = useState(true);

	const searchRecords = async () => {
		try {
			setLoading(true);
			const { data } = await getGlobalSearchResultService({
				account: account,
				chainId: chainId,
				search: searchQuery,
			});
			setRecords((state) => ({
				...state,
				collections: data?.collection || [],
				items: data?.items || [],
				users: data?.users || [],
			}));
			setTrackrecords(false);
		} catch (err) {
			console.log("err", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// console.log("chainId", chainId);
		// console.log("searchQuery", searchQuery);
		if (!searchQuery || !chainId) return;
		setTrackrecords(true);
		const timer = setTimeout(() => {
			searchRecords();
		}, 500);

		return () => clearTimeout(timer);
	}, [searchQuery, chainId, account]);

	const onFocus = useCallback(() => {
		setActive(true);
		window.addEventListener("click", onClick);
	}, []);

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false);
			window.removeEventListener("click", onClick);
		}
	}, []);

	const collectionRouteHandler = (item) => {
		console.log("item", item);
		router.push({
			pathname: PATH_DASHBOARD.explore.collection(item?.address),
			// query: {
			// type: item?.type,
			// 	itemCollection: item?.address,
			// },
		});
		setActive(false);
	};

	const itemRouteHandler = (item) => {
		router.push({
			pathname: PATH_DASHBOARD.item.details,
			query: {
				itemCollection: item?.itemCollection,
				tokenId: item?.tokenId,
			},
		});
		setActive(false);
	};

	const userRouteHandler = (user) => {
    let path =
      user?.address !== account
        ? PATH_DASHBOARD.user.detail(user?.address)
        : PATH_DASHBOARD.profile.root;
    router.push({
        pathname: path,
    });
    setActive(false);
	};

	return (
    <div
      className='search-box'
      onMouseEnter={() => {
        showDropdown != 'search' && setShowDropdown(null);
      }}
      ref={searchRef}>
      <div className='search-box-inner'>
        <form>
          <div className='search-box-form'>
            <input
              type='text'
              name='GlobalSearch'
              autoComplete='off'
              placeholder='Search items, collections, and accounts'
              value={searchQuery}
              onFocus={onFocus}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g opacity='0.4' clip-path='url(#clip0_73_3465)'>
                  <path
                    d='M11.1555 18C15.2977 18 18.6555 14.6421 18.6555 10.5C18.6555 6.35786 15.2977 3 11.1555 3C7.01338 3 3.65552 6.35786 3.65552 10.5C3.65552 14.6421 7.01338 18 11.1555 18Z'
                    stroke='#191820'
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M16.459 15.8037L21.6555 21.0003'
                    stroke='#191820'
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_73_3465'>
                    <rect width='24' height='24' fill='white' transform='translate(0.655518)' />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          {active && searchQuery && (
            <div className={`search-box-open-block`}>
              {loading ? (
                <p style={{ textAlign: 'center' }}>
                  <Spinner animation='border' size='md' />
                </p>
              ) : !trackrecords && !records.collections.length && !records.items.length && !records.users.length ? (
                <p style={{ textAlign: 'center' }}>No Record Found!</p>
              ) : (
                <>
                  <div className='search-box-open-inner'>
                    <h4>Collection</h4>
                    <div className='search-box-block'>
                      {records.collections?.map((ele, index) => (
                        <div
                          className='product-profile'
                          key={index}
                          style={{
                            cursor: 'pointer'
                          }}
                          onClick={() => {
                            console.log('call');
                            collectionRouteHandler(ele);
                          }}>
                          <img src={ele?.lowLogo || '../../images/profile-img-product.png'} alt='collection-img'></img>
                          <div className='product-profile-details'>
                            <h5>{ele?.name}</h5>
                            <p>
                              {/* <img
													src={
														"../../images/ethe-icon-blue.svg"
													}
													alt="icon-img"
												></img>{" "} */}
                              <span>
                                {ele?.totalItemCount} {+ele?.totalItemCount <= 1 ? 'item' : 'items'}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='search-box-open-inner'>
                    <h4>Accounts</h4>
                    <div className='search-box-block'>
                      {records.users?.map((ele, index) => (
                        <div
                          style={{
                            cursor: 'pointer'
                          }}
                          className='product-profile'
                          key={index}
                          onClick={() => userRouteHandler(ele)}>
                          <img src={ele?.lowLogo || '/images/user.svg'} alt='user-img'></img>
                          <div className='product-profile-details'>
                            <h5>{ele?.name}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='search-box-open-inner'>
                    <h4>Nfts</h4>
                    <div className='search-box-block'>
                      {records.items?.map((ele, index) => (
                        <div
                          className='product-profile'
                          key={index}
                          style={{
                            cursor: 'pointer'
                          }}
                          onClick={() => itemRouteHandler(ele)}>
                          <img src={ele?.image || '../../images/profile-img-product.png'} alt='collection-img'></img>
                          <div className='product-profile-details'>
                            <h5>{ele?.name}</h5>
                            <p>
                              {/* <img
												src={
													"../../images/ethe-icon-blue.svg"
												}
												alt="icon-img"
											></img>{" "} */}
                              <span>{ele?.ownerName}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default GlobalSerach;
