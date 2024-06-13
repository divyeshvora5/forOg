/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad, ChatBoxWrapper } from '@/styles/pages/profile-page';
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";

const homepage = () => {
    const options = [
        { value: "chocolate", label: "Recently Listed" },
        { value: "strawberry", label: "Recently Sold" },
        { value: "vanilla", label: "Recently Received" },
        { value: "strawberry", label: "Recently Soon" },
        { value: "strawberry", label: "Recently Low to Hight" },
        { value: "strawberry", label: "Recently Last Sale" },
        { value: "strawberry", label: "Oldest" },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <CommonPageBlockPad>
        <div className='common-center-graphics-block'>
          <svg width='385' height='460' viewBox='0 0 385 460' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M103.78 0.868164C163.583 3.04284 215.558 13.9162 253.18 92.6395C290.802 171.363 396.962 191.152 382.791 268.788C362.784 378.392 263.401 438.195 158.147 454.723C73.9432 467.945 59.5614 447.619 62.8959 435.803'
              stroke='url(#paint0_radial_552_25442)'
            />
            <path
              d='M83.3375 0.868164C143.141 3.04284 195.116 13.9162 232.738 92.6395C270.36 171.363 376.52 191.152 362.348 268.788C342.341 378.392 242.959 438.195 137.704 454.723C53.5009 467.945 39.1191 447.619 42.4536 435.803'
              stroke='url(#paint1_radial_552_25442)'
            />
            <path
              d='M62.8951 0.868164C122.699 3.04284 174.673 13.9162 212.295 92.6395C249.917 171.363 356.078 191.152 341.906 268.788C321.899 378.392 222.516 438.195 117.262 454.723C33.0586 467.945 18.6767 447.619 22.0112 435.803'
              stroke='url(#paint2_radial_552_25442)'
            />
            <path
              d='M42.4528 0.868164C102.256 3.04284 154.231 13.9162 191.853 92.6395C229.475 171.363 335.635 191.152 321.464 268.788C301.457 378.392 202.074 438.195 96.8196 454.723C12.6162 467.945 -1.76565 447.619 1.56886 435.803'
              stroke='url(#paint3_radial_552_25442)'
            />
            <defs>
              <radialGradient
                id='paint0_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(223.273 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint1_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(202.83 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint2_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(182.388 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint3_radial_552_25442'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(161.946 229.951) rotate(90) scale(229.083 160.811)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className='common-center-graphics-block-two'>
          <svg width='1055' height='1087' viewBox='0 0 1055 1087' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M428.067 414.183C362.466 436.275 308.443 465.335 292.928 564.135C277.414 662.936 166.264 719.635 207.83 800.176C266.511 913.882 396.644 946.774 518.88 930.233C616.669 917.001 625.852 889.953 618.219 878.083'
              stroke='url(#paint0_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M450.739 407.448C385.138 429.54 331.115 458.6 315.6 557.4C300.086 656.2 188.937 712.9 230.502 793.441C289.183 907.146 419.316 940.039 541.552 923.498C639.341 910.266 648.524 883.218 640.892 871.348'
              stroke='url(#paint1_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M473.411 400.712C407.809 422.804 353.786 451.863 338.272 550.664C322.757 649.464 211.608 706.164 253.174 786.705C311.855 900.41 441.987 933.302 564.223 916.762C662.012 903.529 671.195 876.481 663.563 864.611'
              stroke='url(#paint2_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <path
              d='M496.083 393.976C430.482 416.068 376.459 445.128 360.944 543.928C345.43 642.729 234.28 699.428 275.846 779.969C334.527 893.675 464.66 926.567 586.896 910.026C684.685 896.794 693.868 869.746 686.235 857.876'
              stroke='url(#paint3_radial_2523_6045)'
              stroke-width='1.08296'
            />
            <g opacity='0.1' filter='url(#filter0_f_2523_6045)'>
              <path
                d='M327.943 412.449C330.811 321.868 183.29 411.532 210.274 282.017L349.723 206.65L428.7 277.05L735.931 550.914L1033.27 815.958C1041.56 826.462 1060.94 878.566 984.854 859.088C889.746 834.74 855.234 910.508 806.281 866.871C755.076 821.227 707.357 698.637 636.002 715.086C578.918 728.245 541.502 615.274 494.661 611.211C443.228 575.956 409.997 701.647 357.584 633.246C292.068 547.744 325.074 503.029 327.943 412.449Z'
                fill='url(#paint4_linear_2523_6045)'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_2523_6045'
                x='0.975525'
                y='0.650391'
                width='1246.74'
                height='1086.05'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='103' result='effect1_foregroundBlur_2523_6045' />
              </filter>
              <radialGradient
                id='paint0_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(371.814 704.99) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint1_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(394.487 698.254) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint2_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(417.158 691.518) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <radialGradient
                id='paint3_radial_2523_6045'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(439.83 684.783) rotate(73.1249) scale(262.748 186.051)'>
                <stop stop-color='#48BC65' />
                <stop offset='1' stop-color='#48BC65' stop-opacity='0' />
              </radialGradient>
              <linearGradient
                id='paint4_linear_2523_6045'
                x1='374.503'
                y1='382.93'
                x2='469.513'
                y2='766.972'
                gradientUnits='userSpaceOnUse'>
                <stop offset='0.0364583' stop-color='#5D35FF' />
                <stop offset='0.0625' stop-color='#1888EF' />
                <stop offset='0.473958' stop-color='#1888EF' />
                <stop offset='1' stop-color='#3AF4BC' stop-opacity='0.58' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='common-center-graphics-block-three'>
          <svg width='508' height='467' viewBox='0 0 508 467' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g opacity='0.3' filter='url(#filter0_f_552_25431)'>
              <path
                d='M340.317 238.415C376.293 173.675 316.498 211.378 211.05 157.304C65.4074 167.226 262.161 214.602 262.161 295.961C262.161 326.807 304.34 303.155 340.317 238.415Z'
                fill='url(#paint0_linear_552_25431)'
              />
            </g>
            <defs>
              <filter
                id='filter0_f_552_25431'
                x='0.349426'
                y='0.303711'
                width='507.462'
                height='466.073'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'>
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='78.5' result='effect1_foregroundBlur_552_25431' />
              </filter>
              <linearGradient
                id='paint0_linear_552_25431'
                x1='314.058'
                y1='212.913'
                x2='143.523'
                y2='240.538'
                gradientUnits='userSpaceOnUse'>
                <stop stop-color='#6946F5' />
                <stop offset='0.466146' stop-color='#1861EF' />
                <stop offset='1' stop-color='#29E9AF' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Container>
          <div className='help-center-block'>
            <div className='help-center-block-title'>
              <h2>Chat</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <ChatBoxWrapper>
              <div className='userlist-body-wrapper'>
                <div className='search-header-bar'>
                  <div className='search-input-wrapper'>
                    <i>
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g opacity='0.4' clip-path='url(#clip0_3512_7084)'>
                          <path
                            d='M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z'
                            stroke='black'
                            stroke-width='3'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M15.8037 15.8047L21.0003 21.0012'
                            stroke='black'
                            stroke-width='3'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_3512_7084'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </i>
                    <input type='text' placeholder='Search' className='' />
                  </div>
                </div>
                <div className='userlist-wrapper-div'>
                  {/* <div className="user-detail-list-wrapper">
                  <div className="user-img-dost-wrapper">
                    <div className="user-img-div">
                      <img src="/images/photo1.png" alt="frontend" />
                    </div>
                    <span className="dost-icon dost-active"></span>
                  </div>
                  <div className="user-detail-wrapper-div">
                    <div className="user-detail">
                      <h5>Olive Yew</h5>
                      <p>Hey congrats! you got a new match!</p>
                    </div>
                    <div className="time-and-date-detail">
                      <span>Now</span>
                      <div>
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-detail-list-wrapper">
                  <div className="user-img-dost-wrapper">
                    <div className="user-img-div">
                      <img src="/images/photo1.png" alt="frontend" />
                    </div>
                    <span className="dost-icon "></span>
                  </div>
                  <div className="user-detail-wrapper-div">
                    <div className="user-detail">
                      <h5>Olive Yew</h5>
                      <p>Hey congrats! you got a new match!</p>
                    </div>
                    <div className="time-and-date-detail">
                      <span>Now</span>
                      <div>
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-detail-list-wrapper user-active-tab">
                  <div className="user-img-dost-wrapper">
                    <div className="user-img-div">
                      <img src="/images/photo1.png" alt="frontend" />
                    </div>
                    <span className="dost-icon "></span>
                  </div>
                  <div className="user-detail-wrapper-div">
                    <div className="user-detail">
                      <h5>Olive Yew</h5>
                      <p>Hey congrats! you got a new match!</p>
                    </div>
                    <div className="time-and-date-detail">
                      <span>Now</span>
                      <div>
                        <p>2</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon dost-active'></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon '></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon dost-active'></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon '></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon dost-active'></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon '></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon dost-active'></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon '></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon dost-active'></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='user-detail-list-wrapper'>
                    <div className='user-img-dost-wrapper'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <span className='dost-icon '></span>
                    </div>
                    <div className='user-detail-wrapper-div'>
                      <div className='user-detail'>
                        <h5>Olive Yew</h5>
                        <p>Hey congrats! you got a new match!</p>
                      </div>
                      <div className='time-and-date-detail'>
                        <span>Now</span>
                        <div>
                          <p>2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='chat-body-wrapper'>
                <form>
                  <div className='chat-body-header-wrapper'>
                    <div className='chat-user-header'>
                      <div className='user-img-div'>
                        <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                      </div>
                      <div className='user-detail'>
                        <h5>Benjamin</h5>
                        <p>
                          <i className='dost-icon dost-active'></i>Online
                        </p>
                      </div>
                    </div>
                    <div>
                      <i className='dost-menu-icon'>
                        <svg width='6' height='28' viewBox='0 0 6 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M0.0124768 3.80075C0.0124816 3.20688 0.188382 2.62637 0.517895 2.13275C0.847409 1.63914 1.31571 1.25463 1.86347 1.02794C2.41124 0.801251 3.01382 0.742576 3.59489 0.859348C4.17597 0.97612 4.70938 1.26309 5.12756 1.68389C5.54575 2.1047 5.82988 2.64042 5.94399 3.22318C6.05809 3.80595 5.99702 4.40954 5.76852 4.95749C5.54001 5.50545 5.15435 5.97311 4.66039 6.30125C4.16643 6.62939 3.5864 6.80323 2.99376 6.80075C2.19977 6.80075 1.43829 6.48468 0.876854 5.92207C0.315415 5.35946 2.67981e-06 4.5964 2.7178e-06 3.80075'
                            fill='#333333'
                          />
                          <path
                            d='M0.0124773 13.4023C0.0124821 12.8084 0.188382 12.2279 0.517896 11.7343C0.847409 11.2407 1.31571 10.8562 1.86347 10.6295C2.41124 10.4028 3.01382 10.3441 3.59489 10.4609C4.17597 10.5777 4.70938 10.8646 5.12756 11.2855C5.54575 11.7063 5.82988 12.242 5.94399 12.8247C6.05809 13.4075 5.99702 14.0111 5.76852 14.5591C5.54001 15.107 5.15435 15.5747 4.66039 15.9028C4.16643 16.2309 3.5864 16.4048 2.99376 16.4023C2.19977 16.4023 1.43829 16.0862 0.876855 15.5236C0.315416 14.961 2.67981e-06 14.198 2.7178e-06 13.4023'
                            fill='#333333'
                          />
                          <path
                            d='M0.0124773 24.1992C0.0124821 23.6053 0.188382 23.0248 0.517896 22.5312C0.847409 22.0376 1.31571 21.6531 1.86347 21.4264C2.41124 21.1997 3.01382 21.141 3.59489 21.2578C4.17597 21.3746 4.70938 21.6615 5.12756 22.0823C5.54575 22.5031 5.82988 23.0389 5.94399 23.6216C6.05809 24.2044 5.99702 24.808 5.76852 25.3559C5.54001 25.9039 5.15435 26.3716 4.66039 26.6997C4.16643 27.0278 3.5864 27.2017 2.99376 27.1992C2.19977 27.1992 1.43829 26.8831 0.876855 26.3205C0.315416 25.7579 2.67981e-06 24.9948 2.7178e-06 24.1992'
                            fill='#333333'
                          />
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className='chat-messages-body-wrapper'>
                    <div className='chat-messages-body'>
                      <div className='user-message-list-div'>
                        <div>
                          <div className='user-imgdiv'>
                            <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                          </div>
                        </div>
                        <div className='message-box-time-text'>
                          <div className='message-box'>
                            <div>
                              <div className='message-boxgrey'>
                                <p>omg, this is amazing</p>
                              </div>
                            </div>
                            <div>
                              <div className='message-boxgrey'>
                                <p>perfect!</p>
                              </div>
                            </div>
                            <div>
                              <div className='message-boxgrey'>perfect!</div>
                            </div>
                          </div>
                          <span className='msg-title-text'>11:52pm, Tuesday, November 20 2022</span>
                        </div>
                      </div>
                      <div className='user-message-list-div right-side-user'>
                        <div className='message-box-time-text'>
                          <div className='message-box'>
                            <div>
                              <div className='message-boxgrey'>
                                <p>lorem</p>
                              </div>
                            </div>
                          </div>
                          <span className='msg-title-text'>11:52pm, Tuesday, November 20 2022</span>
                        </div>
                      </div>
                      <div className='user-message-list-div'>
                        <div>
                          <div className='user-imgdiv'>
                            <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                          </div>
                        </div>
                        <div className='message-box-time-text'>
                          <div className='message-box'>
                            <div>
                              <div className='message-boxgrey'>
                                <p>woohoooo</p>
                              </div>
                            </div>
                          </div>
                          <span className='msg-title-text'>11:52pm, Tuesday, November 20 2022</span>
                        </div>
                      </div>
                      <div className='user-message-list-div right-side-user'>
                        <div className='message-box-time-text'>
                          <div className='message-box'>
                            <div>
                              <div className='message-boxgrey'>
                                <p>Hey, Thanks</p>
                              </div>
                            </div>
                          </div>
                          <span className='msg-title-text'>11:52pm, Tuesday, November 20 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='chat-footer-wrapper-div'>
                    <button className='upload-file-duc'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id='upload'>
                        <path d='M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Z'></path>
                      </svg>
                    </button>
                    <div className='chat-textarea-wrapper'>
                      <textarea class='form-control' id='exampleFormControlTextarea1' rows='2'></textarea>
                      <button type='submit' className='send-icon'>
                        <svg width='56' height='56' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_3512_7114)'>
                            <path
                              d='M43.3899 22.2889L29.3696 15.2612C19.9296 10.5529 16.0719 14.4105 20.792 23.8389L22.8781 27.9995L20.792 32.1601C16.0719 41.5886 19.9412 45.4578 29.3696 40.7378L43.3899 33.7335C49.6716 30.5751 49.6833 25.4355 43.3899 22.2889ZM37.4928 28.9319L28.6121 28.9552C28.2625 28.9552 27.9594 28.8153 27.738 28.5939C27.5166 28.3725 27.3767 28.0694 27.3767 27.7198C27.3787 27.3928 27.5094 27.0797 27.7407 26.8484C27.972 26.6172 28.2851 26.4864 28.6121 26.4844L37.4928 26.4611C38.1687 26.4611 38.7281 27.0205 38.7281 27.6965C38.7281 28.3725 38.1687 28.9319 37.4928 28.9319Z'
                              fill='#FB4EF1'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_3512_7114'>
                              <rect
                                width='39.5564'
                                height='39.5564'
                                fill='white'
                                transform='translate(28.0293 0.0292969) rotate(45)'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </ChatBoxWrapper>
          </div>
        </Container>
      </CommonPageBlockPad>
    );
};

export default homepage;
