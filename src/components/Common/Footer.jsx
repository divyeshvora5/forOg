"use client";
import Link from "next/link";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import { FooterMian } from "@/styles/pages/footer.style";
import { PATH_DASHBOARD } from "@/routes/paths";
import { STORAGE_KEYS, THEME_MODES } from "@/constant";
import { Toast, saveStorageData, usdParser } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { globalState, toggleThemeMode } from "@/redux/reducer/globalSlice";
import LightLogo from "./LightLogo";
import { subscribeService } from "@/redux/services/globalServices";
import { useState } from "react";
import { useIntercom } from "react-use-intercom";
import { InfiniteSlider } from "@/components/ui/InfiniteSlider";
import { useTheme } from "next-themes";

const Footer = () => {
  const { themeMode, walletBalance } = useSelector(globalState);
  const { boot, shutdown, hide, show, update } = useIntercom();
  const [isLoading, setIsLoading] = useState(false);
  const [email,setemail]  = useState("") 
  const { systemTheme, theme, setTheme } = useTheme();

  const dispatch = useDispatch();
  const handleThemeChange = (e) => {
    const newThemeMode =
      themeMode === "light-Theme" ? "dark-Theme" : "light-Theme";
      const newThemeMode_tailwindcss =
      themeMode === "light-Theme" ? "dark" : "light";  
      setTheme(newThemeMode_tailwindcss);

    dispatch(
      toggleThemeMode({
        themeMode: newThemeMode,
      })
    );
  };
  const handleSubscribe = async (event) => {
    setIsLoading(true);
    try {
      const { data } = await subscribeService({ email });
      if (!data.success) {
        return Toast.error(data?.message || "Failed to subscribe");
      }
      setemail("");
      setIsLoading(false);

      return Toast.success(data?.message);
    } catch (error) {
      setIsLoading(false);
      Toast.error(error?.response?.data?.message || "Failed to subscribe");
      console.log("error", error);
    }
  };

  return (
    <FooterMian className='common-block-color'>
      <div className='f-top-block'>
        <Container>
          <Row>
            <Col lg={12} xl={4}>
              <div className='logo-block-footer'>
                <Link href={PATH_DASHBOARD.root}>
                  <LightLogo />
                </Link>
                <p>
                The ultimate rewarding, community-centric<br></br> NFT marketplace
                </p>
                <div className='socil-block-login'>
                  <ul>
                    <li>
                      <Link href={''}>
                        <i>
                          {/* <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              clip-path="url(#clip0_4_28207)"
                              filter="url(#filter0_i_4_28207)"
                            >
                              <path
                                d="M27.6863 5.62595C26.7978 6.00865 25.8638 6.27514 24.9073 6.41883C25.3545 6.3421 26.0125 5.53643 26.2744 5.21033C26.6723 4.71843 26.9756 4.15689 27.1688 3.55423C27.1688 3.50947 27.2135 3.44553 27.1688 3.41356C27.1463 3.40125 27.121 3.39479 27.0953 3.39479C27.0697 3.39479 27.0444 3.40125 27.0219 3.41356C25.9832 3.97652 24.8778 4.40619 23.7318 4.6924C23.6918 4.70461 23.6493 4.70571 23.6088 4.69557C23.5683 4.68543 23.5313 4.66444 23.5018 4.63485C23.4126 4.52853 23.3166 4.42815 23.2143 4.33432C22.7469 3.91515 22.2166 3.57208 21.6427 3.31765C20.8682 2.99958 20.0315 2.86184 19.1959 2.91481C18.3852 2.96606 17.5936 3.18371 16.8705 3.55423C16.1584 3.94487 15.5326 4.47556 15.0306 5.11442C14.5026 5.77196 14.1214 6.53506 13.9126 7.35239C13.7405 8.12983 13.721 8.93334 13.8551 9.71824C13.8551 9.85252 13.8551 9.8717 13.7401 9.85252C9.18512 9.18113 5.44783 7.5634 2.39412 4.09134C2.25996 3.93788 2.18968 3.93788 2.08108 4.09134C0.752267 6.11191 1.39751 9.30901 3.05852 10.8884C3.28212 11.0994 3.51211 11.304 3.75487 11.4958C2.99331 11.4417 2.25034 11.2352 1.57 10.8884C1.44223 10.8053 1.37195 10.85 1.36556 11.0035C1.34745 11.2162 1.34745 11.4301 1.36556 11.6429C1.49887 12.6625 1.90033 13.6284 2.52891 14.4418C3.1575 15.2552 3.99064 15.8869 4.94314 16.2723C5.17533 16.3718 5.41728 16.4468 5.66504 16.4961C4.96002 16.635 4.23693 16.6566 3.52489 16.56C3.37156 16.5281 3.31406 16.6112 3.37156 16.7583C4.31067 19.3159 6.34861 20.096 7.84353 20.5308C8.04796 20.5628 8.25239 20.5628 8.48238 20.614C8.48238 20.614 8.48238 20.614 8.44405 20.6523C8.00324 21.458 6.22084 22.0015 5.40311 22.2828C3.91054 22.8194 2.31919 23.0245 0.73949 22.8839C0.490337 22.8455 0.432841 22.8519 0.368955 22.8839C0.30507 22.9159 0.368955 22.9862 0.439229 23.0501C0.758655 23.2612 1.07808 23.4466 1.41028 23.6256C2.39926 24.1655 3.4448 24.5944 4.52788 24.9045C10.137 26.4519 16.4489 25.3137 20.6589 21.1255C23.9682 17.8389 25.1309 13.3054 25.1309 8.7655C25.1309 8.59286 25.3417 8.49055 25.4631 8.40104C26.3003 7.74812 27.0384 6.97704 27.6543 6.11191C27.761 5.98295 27.8157 5.81876 27.8077 5.65153C27.8077 5.55562 27.8077 5.5748 27.6863 5.62595Z"
                                fill="#191820"
                              />
                            </g>
                          </svg> */}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            enable-background='new 0 0 72 72'
                            viewBox='0 0 72 72'
                            id='twitter-x'>
                            <switch>
                              <g>
                                <path
                                  d='M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z'></path>
                              </g>
                            </switch>
                          </svg>
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href={''}>
                        <i>
                          <svg
                            width='22'
                            height='23'
                            viewBox='0 0 22 23'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clip-path='url(#clip0_243_1519)'>
                              <rect x='-0.000106812' y='0.666016' width='22' height='22' rx='11' fill='#191820' />
                              <path
                                d='M18.5999 11.9623V12.592C18.5986 13.6573 18.2119 14.6862 17.5111 15.4886C16.8104 16.291 15.843 16.8128 14.7875 16.9576C15.2184 17.5089 15.4522 18.1886 15.4518 18.8882V22.0364C15.4518 22.2034 15.3855 22.3635 15.2674 22.4816C15.1493 22.5997 14.9892 22.666 14.8222 22.666H9.78513C9.61814 22.666 9.45799 22.5997 9.33991 22.4816C9.22183 22.3635 9.1555 22.2034 9.1555 22.0364V20.7771H7.26661C6.43167 20.7771 5.63092 20.4455 5.04053 19.8551C4.45014 19.2647 4.11846 18.4639 4.11846 17.629C4.11846 17.128 3.91945 16.6476 3.56522 16.2933C3.21098 15.9391 2.73054 15.7401 2.22957 15.7401C2.06258 15.7401 1.90243 15.6738 1.78436 15.5557C1.66628 15.4376 1.59994 15.2775 1.59994 15.1105C1.59994 14.9435 1.66628 14.7833 1.78436 14.6653C1.90243 14.5472 2.06258 14.4808 2.22957 14.4808C2.64299 14.4808 3.05236 14.5623 3.43432 14.7205C3.81627 14.8787 4.16332 15.1106 4.45565 15.4029C4.74798 15.6952 4.97987 16.0423 5.13808 16.4242C5.29629 16.8062 5.37772 17.2156 5.37772 17.629C5.37772 18.13 5.57673 18.6104 5.93096 18.9646C6.2852 19.3189 6.76564 19.5179 7.26661 19.5179H9.1555V18.8882C9.15509 18.1886 9.38894 17.5089 9.81976 16.9576C8.76431 16.8128 7.79689 16.291 7.09615 15.4886C6.39541 14.6862 6.00867 13.6573 6.00735 12.592V11.9623C6.01519 11.1798 6.22357 10.4124 6.61258 9.73343C6.42013 9.11262 6.35839 8.45866 6.43127 7.81279C6.50415 7.16692 6.71005 6.54316 7.03601 5.98084C7.09128 5.8851 7.17078 5.80561 7.26653 5.75034C7.36227 5.69508 7.47088 5.666 7.58142 5.66603C8.31479 5.66449 9.03836 5.8345 9.69431 6.16248C10.3503 6.49045 10.9204 6.9673 11.3592 7.55491H13.2481C13.6869 6.9673 14.257 6.49045 14.913 6.16248C15.5689 5.8345 16.2925 5.66449 17.0259 5.66603C17.1364 5.666 17.245 5.69508 17.3408 5.75034C17.4365 5.80561 17.516 5.8851 17.5713 5.98084C17.8973 6.54315 18.1032 7.16695 18.1759 7.81284C18.2486 8.45874 18.1867 9.1127 17.9939 9.73343C18.3837 10.4122 18.5924 11.1797 18.5999 11.9623Z'
                                fill='white'
                              />
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href={''}>
                        <i>
                          <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g filter='url(#filter0_i_4_28209)'>
                              <path
                                d='M3.86302 13.0143C3.86302 13.0143 14.6608 8.22566 18.4056 6.53945C19.8412 5.86502 24.7095 3.70666 24.7095 3.70666C24.7095 3.70666 26.9565 2.76246 26.7692 5.05562C26.7067 5.99991 26.2074 9.30475 25.7082 12.8795C24.9591 17.938 24.1477 23.4686 24.1477 23.4686C24.1477 23.4686 24.0229 25.0199 22.9619 25.2897C21.9009 25.5595 20.1532 24.3455 19.8412 24.0756C19.5914 23.8734 15.1601 20.8382 13.5373 19.3543C13.1004 18.9497 12.6011 18.1404 13.5997 17.1961C15.8466 14.9703 18.5304 12.205 20.1532 10.4514C20.9022 9.64201 21.6511 7.75352 18.5304 10.0467C14.099 13.3516 9.73 16.4542 9.73 16.4542C9.73 16.4542 8.73134 17.1286 6.85892 16.5216C4.98642 15.9146 2.80191 15.1052 2.80191 15.1052C2.80191 15.1052 1.30404 14.0935 3.86302 13.0143Z'
                                fill='#191820'
                              />
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href={''}>
                        <i>
                          <svg
                            width='23'
                            height='17'
                            viewBox='0 0 23 17'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M21.7954 3.00789C21.589 1.87115 20.6055 1.04333 19.4641 0.784893C17.7561 0.42348 14.5952 0.165039 11.1751 0.165039C7.75715 0.165039 4.54557 0.42348 2.83556 0.784893C1.69623 1.04333 0.710694 1.81866 0.504278 3.00789C0.29584 4.30009 0.0894241 6.10918 0.0894241 8.43514C0.0894241 10.7611 0.29584 12.5702 0.554871 13.8624C0.763309 14.9991 1.74682 15.827 2.88615 16.0854C4.69937 16.4468 7.80774 16.7052 11.2278 16.7052C14.6478 16.7052 17.7561 16.4468 19.5694 16.0854C20.7087 15.827 21.6922 15.0516 21.9006 13.8624C22.1071 12.5702 22.3661 10.7086 22.4187 8.43514C22.3135 6.10918 22.0544 4.30009 21.7954 3.00789ZM8.37842 12.0533V4.81697L14.6984 8.43514L8.37842 12.0533Z'
                              fill='#191820'
                            />
                          </svg>
                        </i>
                      </Link>
                    </li>
                    <li>
                      <Link href={''}>
                        <i>
                          <svg
                            width='33'
                            height='33'
                            viewBox='0 0 33 33'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clip-path='url(#clip0_4_28199)'>
                              <path
                                d='M25.6609 7.18734C23.9407 6.35888 22.0961 5.74851 20.1672 5.39893C20.1321 5.39218 20.097 5.40904 20.0789 5.44276C19.8417 5.88565 19.5788 6.46341 19.3949 6.91754C17.3202 6.59157 15.2564 6.59157 13.2244 6.91754C13.0403 6.45332 12.768 5.88565 12.5297 5.44276C12.5116 5.41016 12.4765 5.3933 12.4414 5.39893C10.5137 5.74739 8.66891 6.35776 6.94757 7.18734C6.93268 7.19409 6.91991 7.20534 6.91142 7.21994C3.41235 12.7066 2.45381 18.0584 2.92404 23.3438C2.92617 23.3697 2.93999 23.3944 2.95915 23.4102C5.26773 25.1895 7.50399 26.2698 9.69873 26.9858C9.73386 26.997 9.77108 26.9836 9.79343 26.9532C10.3126 26.2091 10.7754 25.4245 11.1722 24.5994C11.1956 24.551 11.1732 24.4937 11.1254 24.4747C10.3913 24.1824 9.69235 23.8261 9.01998 23.4214C8.96681 23.3888 8.96254 23.3089 9.01148 23.2708C9.15296 23.1594 9.29448 23.0436 9.4296 22.9268C9.45404 22.9054 9.4881 22.9009 9.51683 22.9144C13.934 25.0311 18.716 25.0311 23.0811 22.9144C23.1098 22.8998 23.144 22.9042 23.1695 22.9257C23.3045 23.0426 23.446 23.1594 23.5886 23.2708C23.6375 23.3089 23.6344 23.3888 23.5812 23.4214C22.9087 23.8339 22.2098 24.1824 21.4747 24.4734C21.4268 24.4926 21.4055 24.551 21.429 24.5994C21.8342 25.4234 22.297 26.208 22.8066 26.9521C22.8279 26.9836 22.8662 26.997 22.9013 26.9858C25.1067 26.2698 27.343 25.1895 29.6516 23.4102C29.6717 23.3944 29.6845 23.3708 29.6867 23.345C30.2494 17.2344 28.7441 11.9265 25.696 7.22106C25.6886 7.20534 25.6759 7.19409 25.6609 7.18734ZM11.8318 20.1256C10.502 20.1256 9.40617 18.8441 9.40617 17.2704C9.40617 15.6966 10.4807 14.4152 11.8318 14.4152C13.1935 14.4152 14.2787 15.7079 14.2574 17.2704C14.2574 18.8441 13.1829 20.1256 11.8318 20.1256ZM20.8002 20.1256C19.4703 20.1256 18.3746 18.8441 18.3746 17.2704C18.3746 15.6966 19.4491 14.4152 20.8002 14.4152C22.1619 14.4152 23.2471 15.7079 23.2259 17.2704C23.2259 18.8441 22.1619 20.1256 20.8002 20.1256Z'
                                fill='#191820'
                              />
                            </g>
                          </svg>
                        </i>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="partner-block">
                                    <p>Partners with </p>
                                    <a href="">
                                        <img
                                            src="../../images/thirdweb-logo.svg"
                                            alt="logo"
                                        ></img>
                                        <img
                                            src="../../images/thirdweb-img-logo.svg"
                                            alt="logo"
                                            className="dark-webnir-logo"
                                        ></img>
                                    </a>
                                </div> */}
              </div>
            </Col>
            <Col lg={12} xl={8}>
              <div className='footer-right-block'>
                <div className='f-menu-block'>
                  <h3>Marketplace</h3>
                  <ul>
                    <li>
                      <Link href={PATH_DASHBOARD.explore.collectionRoot}>Collections</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.explore.nfts}>Items</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.explore.auctions}>Auctions</Link>
                    </li>
                    <li>
                      <Link href={''}>Advertise Here</Link>
                    </li>
                    {/* <li>
                      <Link href={'/collection/all-collections'}>Explore</Link>
                    </li>
                    <li>
                      <Link href={''}>Item Detail</Link>
                    </li> */}
                  </ul>
                </div>
                <div className='f-menu-block'>
                  <h3>Stats</h3>
                  <ul>
                    <li>
                      <Link href={PATH_DASHBOARD.explore.auctions}>Auctions</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.stats.ranking}>Ranking</Link>
                    </li>
                  </ul>
                </div>
                <div className='f-menu-block'>
                  <h3>Account</h3>
                  <ul>
                    <li>
                      <Link href={PATH_DASHBOARD.profile.root}>Profile</Link>
                    </li>
                    <li>
                      <Link href={''}>Wallet</Link>
                    </li>
                  </ul>
                </div>
                <div className='f-menu-block'>
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <Link href={PATH_DASHBOARD.blog.root}>Blog</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.helpCenter.root}>Help Center</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.faqs.root}>FAQ</Link>
                    </li>
                    <li>
                      <Link href={PATH_DASHBOARD.contact.root}>Contact</Link>
                    </li>
                    <li>
                      <Link href={'https://tesseractx.medium.com/tesseractx-audits-c6b6141510f5'}>Audits</Link>
                    </li>
                  </ul>
                </div>
                <div className='f-menu-block f-sub-block'>
                  <h3>Subscribe</h3>
                  <p>Get The Alpha</p>
                  <div className='f-input-block'>
                    {/* <form> */}
                    <div className='input-group'>
                      <input
                        type='email'
                        name='Subscribe-email'
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        // placeholder="Info@yourgmail.com"
                      ></input>
                      <button disabled={isLoading} className='' onClick={(e) => handleSubscribe(e)}>
                        <svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M3.33294 2.34362C3.58433 2.16243 3.91946 2.14832 4.18518 2.30776L15.815 9.28566C16.0485 9.42578 16.1914 9.67815 16.1914 9.95049C16.1914 10.2228 16.0485 10.4752 15.815 10.6153L4.18518 17.5932C3.91946 17.7527 3.58433 17.7386 3.33294 17.5574C3.08156 17.3762 2.9622 17.0627 3.02942 16.7602L4.3704 10.7258L8.43818 10.7258C8.86638 10.7258 9.2135 10.3787 9.2135 9.95049C9.2135 9.52229 8.86638 9.17517 8.43818 9.17517L4.3704 9.17517L3.02942 3.14078C2.9622 2.83828 3.08156 2.5248 3.33294 2.34362Z'
                            fill='white'
                          />
                        </svg>
                      </button>
                    </div>
                    {/* </form> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='footer-middle'>
        <Container>
          <InfiniteSlider speed='30' direction='left'>
            <div className='footer-middle-main'>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-12.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-2.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-6.svg'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-11.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-5.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-10.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-8.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-13.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-1.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-3.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-7.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-4.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-9.png'} alt='footer-img'></img>
              </div>
            </div>

            <div className='footer-middle-main dark-mode'>
              <div className='footer-middle-inner'>
                <img src={'../../images/w_third.png'} style={{ height: '30px', width: 'auto' }} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-2.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-3.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-4.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-5.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-6.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-7.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-8.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-9.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-10.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-11.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-12.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-13.png'} alt='footer-img'></img>
              </div>
              <div className='footer-middle-inner'>
                <img src={'../../images/footer-icon-dark-14.png'} alt='footer-img'></img>
              </div>
            </div>
          </InfiniteSlider>
        </Container>

        {/* <Container>
          <Row>
            <div className="footer-middle-main">
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-12.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-2.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-6.svg"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-11.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-5.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-10.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-8.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-13.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-1.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-3.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-7.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-4.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-9.png"}
                  alt="footer-img"
                ></img>
              </div>
            </div>

            <div className="footer-middle-main dark-mode">
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-1.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-2.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-3.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-4.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-5.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-6.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-7.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-8.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-9.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-10.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-11.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-12.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-13.png"}
                  alt="footer-img"
                ></img>
              </div>
              <div className="footer-middle-inner">
                <img
                  src={"../../images/footer-icon-dark-14.png"}
                  alt="footer-img"
                ></img>
              </div>
            </div>
          </Row>
        </Container> */}
      </div>

      <div className='f-top-bottom'>
        <Container>
          <div className='f-top-bottom-inner'>
            <div className='f-top-bottom-menu'>
              <p>
                Copyright © 2024 <a href='#'>TesseractX</a>. All Rights Reserved.
              </p>
            </div>
            <div className='f-top-bottom-menu'>
              <ul>
                <li>
                  <Link href={PATH_DASHBOARD.termsAndConditions.root}>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href={PATH_DASHBOARD.privacyPolicy.root}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className='f-top-bottom-menu'>
              {/* <Select
                                    </ul>
                                </div>
                                <div className="f-menu-block">
                                    <h3>Stats</h3>
                                    <ul>
                                        <li>
                                            <Link
                                                href={
                                                    PATH_DASHBOARD.explore
                                                        .auctions
                                                }
                                            >
                                                Auctions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={
                                                    PATH_DASHBOARD.stats.ranking
                                                }
                                            >
                                                Ranking
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="f-menu-block">
                                    <h3>My account</h3>
                                    <ul>
                                        <li>
                                            <Link
                                                href={
                                                    PATH_DASHBOARD.profile.root
                                                }
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>My wallet</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="f-menu-block">
                                    <h3>Resources</h3>
                                    <ul>
                                        <li>
                                            <Link
                                                href={PATH_DASHBOARD.blog.root}
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={
                                                    PATH_DASHBOARD.helpCenter
                                                        .root
                                                }
                                            >
                                                Help and Center
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={PATH_DASHBOARD.faqs.root}
                                            >
                                                FaQs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={
                                                    PATH_DASHBOARD.contact.root
                                                }
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={""}>Audits</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="f-menu-block f-sub-block">
                                    <h3>Subscribe</h3>
                                    <p>
                                        Signup for our newsletter to get the
                                        latest news in your inbox.
                                    </p>
                                    <div className="f-input-block">
                                        <form onSubmit={handleSubscribe}>
                                            <div className="input-group">
                                                <input
                                                    type="email"
                                                    name="Subscribe-email"
                                                    // placeholder="Info@yourgmail.com"
                                                ></input>
                                                <button
                                                    className=""
                                                    disabled={isLoading}
                                                    type="submit"
                                                >
                                                    <svg
                                                        width="19"
                                                        height="20"
                                                        viewBox="0 0 19 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.33294 2.34362C3.58433 2.16243 3.91946 2.14832 4.18518 2.30776L15.815 9.28566C16.0485 9.42578 16.1914 9.67815 16.1914 9.95049C16.1914 10.2228 16.0485 10.4752 15.815 10.6153L4.18518 17.5932C3.91946 17.7527 3.58433 17.7386 3.33294 17.5574C3.08156 17.3762 2.9622 17.0627 3.02942 16.7602L4.3704 10.7258L8.43818 10.7258C8.86638 10.7258 9.2135 10.3787 9.2135 9.95049C9.2135 9.52229 8.86638 9.17517 8.43818 9.17517L4.3704 9.17517L3.02942 3.14078C2.9622 2.83828 3.08156 2.5248 3.33294 2.34362Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="f-top-bottom">
                <Container>
                    <div className="f-top-bottom-inner">
                        <div className="f-top-bottom-menu">
                            <p>
                                Copyright © 2024 <a href="#">TesseractX</a>. All
                                rights reserved.
                            </p>
                        </div>
                        <div className="f-top-bottom-menu">
                            <ul>
                                <li>
                                    <Link
                                        href={
                                            PATH_DASHBOARD.termsAndConditions
                                                .root
                                        }
                                    >
                                        Terms and conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={PATH_DASHBOARD.privacyPolicy.root}
                                    >
                                        Privacy and Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="f-top-bottom-menu">
                            {/* <Select
                                name="theme"
                                options={THEME_MODES}
                                className="TX-select2-wrapper"
                                classNamePrefix="TX-fix-select"
                                defaultValue={THEME_MODES.find(
                                    (option) => option.value === themeMode
                                )}
                                onChange={handleThemeChange}
                            /> */}
              <label className='switch'>
                <input
                  className='switch__input'
                  type='checkbox'
                  checked={themeMode !== 'dark-Theme'}
                  onChange={handleThemeChange}></input>
                <span className='switch__background'>
                  <span className='switch__toggle'>
                    <span className='switch__moon'></span>
                  </span>
                  <span className='switch__stars'></span>
                  <span className='switch__clouds'></span>
                </span>
              </label>
            </div>
          </div>
        </Container>
      </div>

      <div className='f-bottom-block !hidden md:!flex md:flex-row !gap-[5px] md:justify-between '>
        <div className='f-bottom-block-inner-left'>
          <Link href=''>
            {/* <img src={'../../images/green-img.png'} alt='green-img'></img> */}
            <span id='menuBarPriceLbl' className=''>
              <p className='!text-[10px] md:!text-lg'>Live Data</p>
            </span>
          </Link>
        </div>
        <div className='f-bottom-block-inner-right flex flex-row'>
          <ul className='flex flex-row gap-[5px] md:!gap-[40px] items-center'>
            <li>
              <Link href=''>
                <img src={'../../images/icon-total-table.png'} alt='green-img'></img>
                <span>{usdParser(walletBalance[369].tokenRate || 0, 2, 7)}</span>
              </Link>
            </li>
            <li>
              <Link href=''>
                <img src={'../../images/footer-icon-7.png'} alt='footer-img'></img>
                <span>{usdParser(walletBalance[11155111].tokenRate || 0, 2, 7)}</span>
              </Link>
            </li>
            <li className='last-img'>
              <img
                onClick={() => {
                  boot({
                    hideDefaultLauncher: true
                  });
                  show();
                }}
                src={'../../images/botchat.png'}
                alt='footer-img'></img>
            </li>
          </ul>
        </div>
      </div>
    </FooterMian>
  );
};

export default Footer;
