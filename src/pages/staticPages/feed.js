/** @format */

import Link from "next/link";
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
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
        <div className='three-block-inner'>
          <div className='feed-page-block'>
            <div className='feed-page-block-left'>
              <div className='feed-page-block-left-inner'>
                <div className='following-block'>
                  <div className='top-block'>
                    <h5>Following</h5>
                    <a href=''>
                      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8508 2.70833 14.0525 2.625C14.2542 2.54167 14.4658 2.5 14.6875 2.5C14.9092 2.5 15.1244 2.54167 15.3333 2.625C15.5422 2.70833 15.7228 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.3092 4.5 17.3858 4.70833C17.4625 4.91667 17.5006 5.125 17.5 5.33333C17.5 5.55556 17.4619 5.7675 17.3858 5.96917C17.3097 6.17083 17.1881 6.35472 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z'
                          fill='black'
                        />
                      </svg>
                    </a>
                  </div>
                  <h3>
                    Accounts <span>25</span>
                  </h3>
                  <h3>
                    Addresses <span>19</span>
                  </h3>
                </div>
                <div className='filter-check'>
                  <h2>Filter</h2>
                  <div className='checkbox-block-custom-filter'>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Listings</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Mints</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Transfers</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Sales</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Offers</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Canceled Listings</h4>
                        </div>
                      </label>
                    </div>
                    <div className='checkbox-filter-block'>
                      <input type='checkbox' id='check'></input>
                      <label for='check'>
                        <span>
                          <svg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                              stroke='black'
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </span>
                        <div className='flex-block-check'>
                          <h4>Canceled Offers</h4>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className='acco-block-custom'>
                  <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>Following</Accordion.Header>
                      <Accordion.Body>
                        <div className='search-form-block'>
                          <div className='search-box-form'>
                            <input type='text' placeholder='Search by Collections' />
                            <button>
                              <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                  fill='#9E9E9E'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className='search-collection-block'>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nigel</span>
                                  <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                      fill='#FB4EF1'
                                    />
                                  </svg>
                                </h4>
                                <p>Followers: 4</p>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nigel</span>
                                  <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                      fill='#FB4EF1'
                                    />
                                  </svg>
                                </h4>
                                <p>Followers: 4</p>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nigel</span>
                                  <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                      fill='#FB4EF1'
                                    />
                                  </svg>
                                </h4>
                                <p>Followers: 4</p>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nigel</span>
                                  <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                      fill='#FB4EF1'
                                    />
                                  </svg>
                                </h4>
                                <p>Followers: 4</p>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nigel</span>
                                  <svg
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                      fill='#FB4EF1'
                                    />
                                  </svg>
                                </h4>
                                <p>Followers: 4</p>
                              </div>
                            </div>
                          </div>
                          <div className='load-more'>
                            <button>Load More</button>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='acco-block-custom'>
                  <Accordion defaultActiveKey='1'>
                    <Accordion.Item eventKey='1'>
                      <Accordion.Header>Marketplaces</Accordion.Header>
                      <Accordion.Body>
                        <div className='search-form-block'>
                          <div className='search-box-form'>
                            <input type='text' placeholder='Search by Collections' />
                            <button>
                              <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                  fill='#9E9E9E'
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className='search-collection-block'>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>TesseractX</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Rarible</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>LooksRare</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Magic Eden</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Nifty Gateway</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='search-collection-block-inner'>
                            <div className='search-collection-block-left'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='content-block'>
                                <h4>
                                  <span>Opensea</span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='load-more'>
                            <button>Load More</button>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className='acco-block-custom'>
                  <Accordion defaultActiveKey='2'>
                    <Accordion.Item eventKey='2'>
                      <Accordion.Header>Chains</Accordion.Header>
                      <Accordion.Body>
                        <div className='radio-last'>
                          <div className='radio-filter-block'>
                            <input type='radio' id='test1' name='radio-group' checked></input>
                            <label for='test1'>
                              <img src={'../../images/ethe-icon.svg'} alt='check-icon'></img>
                              <h4>Ethereum (ETH)</h4>
                            </label>
                          </div>
                          <div className='radio-filter-block'>
                            <input type='radio' id='test2' name='radio-group'></input>
                            <label for='test2'>
                              <img src={'../../images/ethe-icon.svg'} alt='check-icon'></img>
                              <h4>Ethereum (ETH)</h4>
                            </label>
                          </div>
                          <div className='radio-filter-block'>
                            <input type='radio' id='test3' name='radio-group'></input>
                            <label for='test3'>
                              <img src={'../../images/filter-icon.svg'} alt='check-icon'></img>
                              <h4>PulseChain (PLS)</h4>
                            </label>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className='feed-page-block-middle'>
              <div className='feed-page-block-middle-inner'>
                <div className='feed-page-block-middle-inner-block'>
                  <div className='feed-page-block-middle-inner-block-top'>
                    <div className='left-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                    </div>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                  </div>
                  <div className='bottom-feed-block'>
                    <div className='text-discription'>
                      <p>
                        Purchased <span>"Avidlines #14843"</span> from collection <span>"Avidlines club"</span>
                      </p>
                    </div>
                    <div className='bottom-feed-block-three-block'>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Price:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/eth-icon.svg'} alt='img' className='img-eth'></img>
                          <h4>14 ETH</h4>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Marketplace:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          {/* <img src={'../../images/eth-icon.svg'} alt='img'></img> */}
                          <svg
                            width='178'
                            height='40'
                            viewBox='0 0 178 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14.416 10.2812L9.85547 18.1801H19.0198L23.5801 10.2812H14.416Z'
                              fill='white'></path>
                            <path
                              d='M12.8192 7.5127L6.66016 18.1804H9.85749L14.4178 10.2815H23.5822L25.1806 7.5127H12.8192Z'
                              fill='#073FB8'></path>
                            <path
                              d='M11.7777 5.64258L4.53906 18.1803H6.65925L12.8183 7.51265H25.1797L26.2593 5.64258H11.7777Z'
                              fill='#5302C2'></path>
                            <path
                              d='M10.4945 3.42188L0.902344 20.0363C7.30051 20.0379 13.7127 20.0337 20.1109 20.0315C23.3107 14.5016 26.4746 8.95897 29.6878 3.43676L10.4945 3.42188ZM11.7773 5.64375H26.2589L19.0211 18.1803H4.53933L11.7773 5.64375Z'
                              fill='url(#paint0_linear_5_10458)'></path>
                            <path
                              d='M4.53516 21.8887L11.7755 34.4291H26.256L25.2025 32.6041H12.8166L6.63012 21.8887H4.53516Z'
                              fill='url(#paint1_linear_5_10458)'></path>
                            <path
                              d='M6.63281 21.8887L12.8193 32.6041H25.2051L23.6065 29.8353H14.418L9.83014 21.8887H6.63281Z'
                              fill='url(#paint2_linear_5_10458)'></path>
                            <path
                              d='M9.82812 21.8887L14.4162 29.8353H23.6044L19.0164 21.8887H9.82812Z'
                              fill='white'></path>
                            <path
                              d='M0.90625 20.0293L10.4941 36.6511H29.6787L20.0935 20.0293H0.90625ZM4.53662 21.8888H19.0172L26.2575 34.4292H11.7769L4.53662 21.8888Z'
                              fill='url(#paint3_linear_5_10458)'></path>
                            <path
                              d='M29.4601 7.4834L28.375 9.36306L34.5499 20.0582L28.3911 30.7257L29.4639 32.5844L36.7078 20.0371L29.4601 7.4834Z'
                              fill='url(#paint4_linear_5_10458)'></path>
                            <path
                              d='M26.7752 12.1318L22.2148 20.0307L26.7911 27.9572L31.3514 20.0584L26.7752 12.1318Z'
                              fill='white'></path>
                            <path
                              d='M28.3719 9.36328L26.7734 12.1321L31.3497 20.0585L26.7894 27.9571L28.388 30.7259L34.5468 20.0585L28.3719 9.36328Z'
                              fill='url(#paint5_linear_5_10458)'></path>
                            <path
                              d='M29.6853 3.43262C26.481 8.96597 23.2921 14.5082 20.0977 20.0472C23.2941 25.5787 26.4818 31.1152 29.6836 36.6436L39.2717 20.0367L29.6853 3.43262ZM29.4587 7.48384L36.7061 20.0367L29.462 32.5837L22.2147 20.0309L29.4587 7.48384Z'
                              fill='url(#paint6_linear_5_10458)'></path>
                            <path
                              class='app_logo_text'
                              d='M49.5323 28V13.672H44.6363V11.2H57.5243V13.672H52.6043V28H49.5323ZM63.3557 28.288C62.1557 28.288 61.0917 28.032 60.1637 27.52C59.2357 27.008 58.5077 26.288 57.9797 25.36C57.4517 24.432 57.1877 23.36 57.1877 22.144C57.1877 20.912 57.4437 19.816 57.9557 18.856C58.4837 17.896 59.2037 17.152 60.1157 16.624C61.0437 16.08 62.1317 15.808 63.3797 15.808C64.5477 15.808 65.5797 16.064 66.4757 16.576C67.3717 17.088 68.0677 17.792 68.5637 18.688C69.0757 19.568 69.3317 20.552 69.3317 21.64C69.3317 21.816 69.3237 22 69.3077 22.192C69.3077 22.384 69.2997 22.584 69.2837 22.792H60.2357C60.2997 23.72 60.6197 24.448 61.1957 24.976C61.7877 25.504 62.4997 25.768 63.3317 25.768C63.9557 25.768 64.4757 25.632 64.8917 25.36C65.3237 25.072 65.6437 24.704 65.8517 24.256H68.9717C68.7477 25.008 68.3717 25.696 67.8437 26.32C67.3317 26.928 66.6917 27.408 65.9237 27.76C65.1717 28.112 64.3157 28.288 63.3557 28.288ZM63.3797 18.304C62.6277 18.304 61.9637 18.52 61.3877 18.952C60.8117 19.368 60.4437 20.008 60.2837 20.872H66.2117C66.1637 20.088 65.8757 19.464 65.3477 19C64.8197 18.536 64.1637 18.304 63.3797 18.304ZM76.8355 28.288C75.7795 28.288 74.8515 28.12 74.0515 27.784C73.2515 27.432 72.6115 26.952 72.1315 26.344C71.6515 25.736 71.3635 25.032 71.2675 24.232H74.3635C74.4595 24.696 74.7155 25.096 75.1315 25.432C75.5635 25.752 76.1155 25.912 76.7875 25.912C77.4595 25.912 77.9475 25.776 78.2515 25.504C78.5715 25.232 78.7315 24.92 78.7315 24.568C78.7315 24.056 78.5075 23.712 78.0595 23.536C77.6115 23.344 76.9875 23.16 76.1875 22.984C75.6755 22.872 75.1555 22.736 74.6275 22.576C74.0995 22.416 73.6115 22.216 73.1635 21.976C72.7315 21.72 72.3795 21.4 72.1075 21.016C71.8355 20.616 71.6995 20.128 71.6995 19.552C71.6995 18.496 72.1155 17.608 72.9475 16.888C73.7955 16.168 74.9795 15.808 76.4995 15.808C77.9075 15.808 79.0275 16.136 79.8595 16.792C80.7075 17.448 81.2115 18.352 81.3715 19.504H78.4675C78.2915 18.624 77.6275 18.184 76.4755 18.184C75.8995 18.184 75.4515 18.296 75.1315 18.52C74.8275 18.744 74.6755 19.024 74.6755 19.36C74.6755 19.712 74.9075 19.992 75.3715 20.2C75.8355 20.408 76.4515 20.6 77.2195 20.776C78.0515 20.968 78.8115 21.184 79.4995 21.424C80.2035 21.648 80.7635 21.992 81.1795 22.456C81.5955 22.904 81.8035 23.552 81.8035 24.4C81.8195 25.136 81.6275 25.8 81.2275 26.392C80.8275 26.984 80.2515 27.448 79.4995 27.784C78.7475 28.12 77.8595 28.288 76.8355 28.288ZM89.4448 28.288C88.3888 28.288 87.4608 28.12 86.6608 27.784C85.8608 27.432 85.2208 26.952 84.7408 26.344C84.2608 25.736 83.9728 25.032 83.8768 24.232H86.9728C87.0688 24.696 87.3248 25.096 87.7408 25.432C88.1728 25.752 88.7248 25.912 89.3968 25.912C90.0688 25.912 90.5568 25.776 90.8608 25.504C91.1808 25.232 91.3408 24.92 91.3408 24.568C91.3408 24.056 91.1168 23.712 90.6688 23.536C90.2208 23.344 89.5968 23.16 88.7968 22.984C88.2848 22.872 87.7648 22.736 87.2368 22.576C86.7088 22.416 86.2208 22.216 85.7728 21.976C85.3408 21.72 84.9888 21.4 84.7168 21.016C84.4448 20.616 84.3088 20.128 84.3088 19.552C84.3088 18.496 84.7248 17.608 85.5568 16.888C86.4048 16.168 87.5888 15.808 89.1088 15.808C90.5168 15.808 91.6368 16.136 92.4688 16.792C93.3168 17.448 93.8208 18.352 93.9808 19.504H91.0768C90.9008 18.624 90.2368 18.184 89.0848 18.184C88.5088 18.184 88.0608 18.296 87.7408 18.52C87.4368 18.744 87.2848 19.024 87.2848 19.36C87.2848 19.712 87.5168 19.992 87.9808 20.2C88.4448 20.408 89.0608 20.6 89.8288 20.776C90.6608 20.968 91.4208 21.184 92.1088 21.424C92.8128 21.648 93.3728 21.992 93.7888 22.456C94.2048 22.904 94.4128 23.552 94.4128 24.4C94.4288 25.136 94.2368 25.8 93.8368 26.392C93.4368 26.984 92.8608 27.448 92.1088 27.784C91.3568 28.12 90.4688 28.288 89.4448 28.288ZM102.918 28.288C101.718 28.288 100.654 28.032 99.7262 27.52C98.7982 27.008 98.0702 26.288 97.5422 25.36C97.0142 24.432 96.7502 23.36 96.7502 22.144C96.7502 20.912 97.0062 19.816 97.5182 18.856C98.0462 17.896 98.7662 17.152 99.6782 16.624C100.606 16.08 101.694 15.808 102.942 15.808C104.11 15.808 105.142 16.064 106.038 16.576C106.934 17.088 107.63 17.792 108.126 18.688C108.638 19.568 108.894 20.552 108.894 21.64C108.894 21.816 108.886 22 108.87 22.192C108.87 22.384 108.862 22.584 108.846 22.792H99.7982C99.8622 23.72 100.182 24.448 100.758 24.976C101.35 25.504 102.062 25.768 102.894 25.768C103.518 25.768 104.038 25.632 104.454 25.36C104.886 25.072 105.206 24.704 105.414 24.256H108.534C108.31 25.008 107.934 25.696 107.406 26.32C106.894 26.928 106.254 27.408 105.486 27.76C104.734 28.112 103.878 28.288 102.918 28.288ZM102.942 18.304C102.19 18.304 101.526 18.52 100.95 18.952C100.374 19.368 100.006 20.008 99.8462 20.872H105.774C105.726 20.088 105.438 19.464 104.91 19C104.382 18.536 103.726 18.304 102.942 18.304ZM111.478 28V16.096H114.214L114.502 18.328C114.934 17.56 115.518 16.952 116.254 16.504C117.006 16.04 117.886 15.808 118.894 15.808V19.048H118.03C117.358 19.048 116.758 19.152 116.23 19.36C115.702 19.568 115.286 19.928 114.982 20.44C114.694 20.952 114.55 21.664 114.55 22.576V28H111.478ZM125.098 28.288C124.074 28.288 123.234 28.128 122.578 27.808C121.922 27.472 121.434 27.032 121.114 26.488C120.794 25.944 120.634 25.344 120.634 24.688C120.634 23.584 121.066 22.688 121.93 22C122.794 21.312 124.09 20.968 125.818 20.968H128.842V20.68C128.842 19.864 128.61 19.264 128.146 18.88C127.682 18.496 127.106 18.304 126.418 18.304C125.794 18.304 125.25 18.456 124.786 18.76C124.322 19.048 124.034 19.48 123.922 20.056H120.922C121.002 19.192 121.29 18.44 121.786 17.8C122.298 17.16 122.954 16.672 123.754 16.336C124.554 15.984 125.45 15.808 126.442 15.808C128.138 15.808 129.474 16.232 130.45 17.08C131.426 17.928 131.914 19.128 131.914 20.68V28H129.298L129.01 26.08C128.658 26.72 128.162 27.248 127.522 27.664C126.898 28.08 126.09 28.288 125.098 28.288ZM125.794 25.888C126.674 25.888 127.354 25.6 127.834 25.024C128.33 24.448 128.642 23.736 128.77 22.888H126.154C125.338 22.888 124.754 23.04 124.402 23.344C124.05 23.632 123.874 23.992 123.874 24.424C123.874 24.888 124.05 25.248 124.402 25.504C124.754 25.76 125.218 25.888 125.794 25.888ZM140.677 28.288C139.461 28.288 138.389 28.024 137.461 27.496C136.533 26.968 135.797 26.232 135.253 25.288C134.725 24.344 134.461 23.264 134.461 22.048C134.461 20.832 134.725 19.752 135.253 18.808C135.797 17.864 136.533 17.128 137.461 16.6C138.389 16.072 139.461 15.808 140.677 15.808C142.197 15.808 143.477 16.208 144.517 17.008C145.557 17.792 146.221 18.88 146.509 20.272H143.269C143.109 19.696 142.789 19.248 142.309 18.928C141.845 18.592 141.293 18.424 140.653 18.424C139.805 18.424 139.085 18.744 138.493 19.384C137.901 20.024 137.605 20.912 137.605 22.048C137.605 23.184 137.901 24.072 138.493 24.712C139.085 25.352 139.805 25.672 140.653 25.672C141.293 25.672 141.845 25.512 142.309 25.192C142.789 24.872 143.109 24.416 143.269 23.824H146.509C146.221 25.168 145.557 26.248 144.517 27.064C143.477 27.88 142.197 28.288 140.677 28.288ZM154.376 28C153.128 28 152.128 27.696 151.376 27.088C150.624 26.48 150.248 25.4 150.248 23.848V18.664H148.208V16.096H150.248L150.608 12.904H153.32V16.096H156.536V18.664H153.32V23.872C153.32 24.448 153.44 24.848 153.68 25.072C153.936 25.28 154.368 25.384 154.976 25.384H156.464V28H154.376ZM158.429 28L163.685 19.504L158.357 11.2H161.885L165.653 17.056L169.109 11.2H172.565L167.309 19.648L172.685 28H169.157L165.341 22.072L161.885 28H158.429Z'
                              fill='#191820'></path>
                            <defs>
                              <linearGradient
                                id='paint0_linear_5_10458'
                                x1='13.1699'
                                y1='8.00726'
                                x2='18.4084'
                                y2='17.3617'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#8122E2'></stop>
                                <stop offset='1' stop-color='#FF56EF'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint1_linear_5_10458'
                                x1='13.168'
                                y1='22.376'
                                x2='18.4813'
                                y2='34.0503'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint2_linear_5_10458'
                                x1='13.9939'
                                y1='22.2263'
                                x2='20.6543'
                                y2='34.7238'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint3_linear_5_10458'
                                x1='20.1291'
                                y1='19.1582'
                                x2='10.9244'
                                y2='36.071'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF56EF'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint4_linear_5_10458'
                                x1='25.4445'
                                y1='15.2663'
                                x2='32.7784'
                                y2='26.0426'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint5_linear_5_10458'
                                x1='25.4415'
                                y1='14.7427'
                                x2='32.925'
                                y2='25.519'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint6_linear_5_10458'
                                x1='19.1569'
                                y1='19.9813'
                                x2='38.4645'
                                y2='20.2058'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF55F3'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>BlockChain:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/pluschain-img-feed.png'} alt='img'></img>
                        </div>
                      </div>
                    </div>
                    <div className='img-block-last-feed'>
                      <img src='../../images/trending-img-new.png' alt='img'></img>
                      <div className='share-block'>
                        <h2>6 May 2024 2:35PM</h2>
                        <a href=''>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M15 18.3327C14.3056 18.3327 13.7153 18.0896 13.2292 17.6035C12.7431 17.1174 12.5 16.5271 12.5 15.8327C12.5 15.7355 12.5069 15.6346 12.5208 15.5302C12.5347 15.4257 12.5556 15.3321 12.5833 15.2493L6.70833 11.8327C6.47222 12.041 6.20833 12.2043 5.91667 12.3227C5.625 12.441 5.31944 12.4999 5 12.4993C4.30556 12.4993 3.71528 12.2563 3.22917 11.7702C2.74306 11.2841 2.5 10.6938 2.5 9.99935C2.5 9.3049 2.74306 8.71463 3.22917 8.22852C3.71528 7.7424 4.30556 7.49935 5 7.49935C5.31944 7.49935 5.625 7.55852 5.91667 7.67685C6.20833 7.79518 6.47222 7.95824 6.70833 8.16602L12.5833 4.74935C12.5556 4.66602 12.5347 4.5724 12.5208 4.46852C12.5069 4.36463 12.5 4.26379 12.5 4.16602C12.5 3.47157 12.7431 2.88129 13.2292 2.39518C13.7153 1.90907 14.3056 1.66602 15 1.66602C15.6944 1.66602 16.2847 1.90907 16.7708 2.39518C17.2569 2.88129 17.5 3.47157 17.5 4.16602C17.5 4.86046 17.2569 5.45074 16.7708 5.93685C16.2847 6.42296 15.6944 6.66602 15 6.66602C14.6806 6.66602 14.375 6.60713 14.0833 6.48935C13.7917 6.37157 13.5278 6.20824 13.2917 5.99935L7.41667 9.41602C7.44444 9.49935 7.46528 9.59324 7.47917 9.69768C7.49306 9.80213 7.5 9.90268 7.5 9.99935C7.5 10.096 7.49306 10.1968 7.47917 10.3018C7.46528 10.4068 7.44444 10.5005 7.41667 10.5827L13.2917 13.9993C13.5278 13.791 13.7917 13.628 14.0833 13.5102C14.375 13.3924 14.6806 13.3332 15 13.3327C15.6944 13.3327 16.2847 13.5757 16.7708 14.0618C17.2569 14.548 17.5 15.1382 17.5 15.8327C17.5 16.5271 17.2569 17.1174 16.7708 17.6035C16.2847 18.0896 15.6944 18.3327 15 18.3327Z'
                              fill='black'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='feed-page-block-middle-inner-block'>
                  <div className='feed-page-block-middle-inner-block-top'>
                    <div className='left-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                    </div>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                  </div>
                  <div className='bottom-feed-block'>
                    <div className='text-discription'>
                      <p>
                        Purchased <span>"Avidlines #14843"</span> from collection <span>"Avidlines club"</span>
                      </p>
                    </div>
                    <div className='bottom-feed-block-three-block'>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Price:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/eth-icon.svg'} alt='img' className='img-eth'></img>
                          <h4>14 ETH</h4>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Marketplace:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          {/* <img src={'../../images/eth-icon.svg'} alt='img'></img> */}
                          <svg
                            width='178'
                            height='40'
                            viewBox='0 0 178 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14.416 10.2812L9.85547 18.1801H19.0198L23.5801 10.2812H14.416Z'
                              fill='white'></path>
                            <path
                              d='M12.8192 7.5127L6.66016 18.1804H9.85749L14.4178 10.2815H23.5822L25.1806 7.5127H12.8192Z'
                              fill='#073FB8'></path>
                            <path
                              d='M11.7777 5.64258L4.53906 18.1803H6.65925L12.8183 7.51265H25.1797L26.2593 5.64258H11.7777Z'
                              fill='#5302C2'></path>
                            <path
                              d='M10.4945 3.42188L0.902344 20.0363C7.30051 20.0379 13.7127 20.0337 20.1109 20.0315C23.3107 14.5016 26.4746 8.95897 29.6878 3.43676L10.4945 3.42188ZM11.7773 5.64375H26.2589L19.0211 18.1803H4.53933L11.7773 5.64375Z'
                              fill='url(#paint0_linear_5_10458)'></path>
                            <path
                              d='M4.53516 21.8887L11.7755 34.4291H26.256L25.2025 32.6041H12.8166L6.63012 21.8887H4.53516Z'
                              fill='url(#paint1_linear_5_10458)'></path>
                            <path
                              d='M6.63281 21.8887L12.8193 32.6041H25.2051L23.6065 29.8353H14.418L9.83014 21.8887H6.63281Z'
                              fill='url(#paint2_linear_5_10458)'></path>
                            <path
                              d='M9.82812 21.8887L14.4162 29.8353H23.6044L19.0164 21.8887H9.82812Z'
                              fill='white'></path>
                            <path
                              d='M0.90625 20.0293L10.4941 36.6511H29.6787L20.0935 20.0293H0.90625ZM4.53662 21.8888H19.0172L26.2575 34.4292H11.7769L4.53662 21.8888Z'
                              fill='url(#paint3_linear_5_10458)'></path>
                            <path
                              d='M29.4601 7.4834L28.375 9.36306L34.5499 20.0582L28.3911 30.7257L29.4639 32.5844L36.7078 20.0371L29.4601 7.4834Z'
                              fill='url(#paint4_linear_5_10458)'></path>
                            <path
                              d='M26.7752 12.1318L22.2148 20.0307L26.7911 27.9572L31.3514 20.0584L26.7752 12.1318Z'
                              fill='white'></path>
                            <path
                              d='M28.3719 9.36328L26.7734 12.1321L31.3497 20.0585L26.7894 27.9571L28.388 30.7259L34.5468 20.0585L28.3719 9.36328Z'
                              fill='url(#paint5_linear_5_10458)'></path>
                            <path
                              d='M29.6853 3.43262C26.481 8.96597 23.2921 14.5082 20.0977 20.0472C23.2941 25.5787 26.4818 31.1152 29.6836 36.6436L39.2717 20.0367L29.6853 3.43262ZM29.4587 7.48384L36.7061 20.0367L29.462 32.5837L22.2147 20.0309L29.4587 7.48384Z'
                              fill='url(#paint6_linear_5_10458)'></path>
                            <path
                              class='app_logo_text'
                              d='M49.5323 28V13.672H44.6363V11.2H57.5243V13.672H52.6043V28H49.5323ZM63.3557 28.288C62.1557 28.288 61.0917 28.032 60.1637 27.52C59.2357 27.008 58.5077 26.288 57.9797 25.36C57.4517 24.432 57.1877 23.36 57.1877 22.144C57.1877 20.912 57.4437 19.816 57.9557 18.856C58.4837 17.896 59.2037 17.152 60.1157 16.624C61.0437 16.08 62.1317 15.808 63.3797 15.808C64.5477 15.808 65.5797 16.064 66.4757 16.576C67.3717 17.088 68.0677 17.792 68.5637 18.688C69.0757 19.568 69.3317 20.552 69.3317 21.64C69.3317 21.816 69.3237 22 69.3077 22.192C69.3077 22.384 69.2997 22.584 69.2837 22.792H60.2357C60.2997 23.72 60.6197 24.448 61.1957 24.976C61.7877 25.504 62.4997 25.768 63.3317 25.768C63.9557 25.768 64.4757 25.632 64.8917 25.36C65.3237 25.072 65.6437 24.704 65.8517 24.256H68.9717C68.7477 25.008 68.3717 25.696 67.8437 26.32C67.3317 26.928 66.6917 27.408 65.9237 27.76C65.1717 28.112 64.3157 28.288 63.3557 28.288ZM63.3797 18.304C62.6277 18.304 61.9637 18.52 61.3877 18.952C60.8117 19.368 60.4437 20.008 60.2837 20.872H66.2117C66.1637 20.088 65.8757 19.464 65.3477 19C64.8197 18.536 64.1637 18.304 63.3797 18.304ZM76.8355 28.288C75.7795 28.288 74.8515 28.12 74.0515 27.784C73.2515 27.432 72.6115 26.952 72.1315 26.344C71.6515 25.736 71.3635 25.032 71.2675 24.232H74.3635C74.4595 24.696 74.7155 25.096 75.1315 25.432C75.5635 25.752 76.1155 25.912 76.7875 25.912C77.4595 25.912 77.9475 25.776 78.2515 25.504C78.5715 25.232 78.7315 24.92 78.7315 24.568C78.7315 24.056 78.5075 23.712 78.0595 23.536C77.6115 23.344 76.9875 23.16 76.1875 22.984C75.6755 22.872 75.1555 22.736 74.6275 22.576C74.0995 22.416 73.6115 22.216 73.1635 21.976C72.7315 21.72 72.3795 21.4 72.1075 21.016C71.8355 20.616 71.6995 20.128 71.6995 19.552C71.6995 18.496 72.1155 17.608 72.9475 16.888C73.7955 16.168 74.9795 15.808 76.4995 15.808C77.9075 15.808 79.0275 16.136 79.8595 16.792C80.7075 17.448 81.2115 18.352 81.3715 19.504H78.4675C78.2915 18.624 77.6275 18.184 76.4755 18.184C75.8995 18.184 75.4515 18.296 75.1315 18.52C74.8275 18.744 74.6755 19.024 74.6755 19.36C74.6755 19.712 74.9075 19.992 75.3715 20.2C75.8355 20.408 76.4515 20.6 77.2195 20.776C78.0515 20.968 78.8115 21.184 79.4995 21.424C80.2035 21.648 80.7635 21.992 81.1795 22.456C81.5955 22.904 81.8035 23.552 81.8035 24.4C81.8195 25.136 81.6275 25.8 81.2275 26.392C80.8275 26.984 80.2515 27.448 79.4995 27.784C78.7475 28.12 77.8595 28.288 76.8355 28.288ZM89.4448 28.288C88.3888 28.288 87.4608 28.12 86.6608 27.784C85.8608 27.432 85.2208 26.952 84.7408 26.344C84.2608 25.736 83.9728 25.032 83.8768 24.232H86.9728C87.0688 24.696 87.3248 25.096 87.7408 25.432C88.1728 25.752 88.7248 25.912 89.3968 25.912C90.0688 25.912 90.5568 25.776 90.8608 25.504C91.1808 25.232 91.3408 24.92 91.3408 24.568C91.3408 24.056 91.1168 23.712 90.6688 23.536C90.2208 23.344 89.5968 23.16 88.7968 22.984C88.2848 22.872 87.7648 22.736 87.2368 22.576C86.7088 22.416 86.2208 22.216 85.7728 21.976C85.3408 21.72 84.9888 21.4 84.7168 21.016C84.4448 20.616 84.3088 20.128 84.3088 19.552C84.3088 18.496 84.7248 17.608 85.5568 16.888C86.4048 16.168 87.5888 15.808 89.1088 15.808C90.5168 15.808 91.6368 16.136 92.4688 16.792C93.3168 17.448 93.8208 18.352 93.9808 19.504H91.0768C90.9008 18.624 90.2368 18.184 89.0848 18.184C88.5088 18.184 88.0608 18.296 87.7408 18.52C87.4368 18.744 87.2848 19.024 87.2848 19.36C87.2848 19.712 87.5168 19.992 87.9808 20.2C88.4448 20.408 89.0608 20.6 89.8288 20.776C90.6608 20.968 91.4208 21.184 92.1088 21.424C92.8128 21.648 93.3728 21.992 93.7888 22.456C94.2048 22.904 94.4128 23.552 94.4128 24.4C94.4288 25.136 94.2368 25.8 93.8368 26.392C93.4368 26.984 92.8608 27.448 92.1088 27.784C91.3568 28.12 90.4688 28.288 89.4448 28.288ZM102.918 28.288C101.718 28.288 100.654 28.032 99.7262 27.52C98.7982 27.008 98.0702 26.288 97.5422 25.36C97.0142 24.432 96.7502 23.36 96.7502 22.144C96.7502 20.912 97.0062 19.816 97.5182 18.856C98.0462 17.896 98.7662 17.152 99.6782 16.624C100.606 16.08 101.694 15.808 102.942 15.808C104.11 15.808 105.142 16.064 106.038 16.576C106.934 17.088 107.63 17.792 108.126 18.688C108.638 19.568 108.894 20.552 108.894 21.64C108.894 21.816 108.886 22 108.87 22.192C108.87 22.384 108.862 22.584 108.846 22.792H99.7982C99.8622 23.72 100.182 24.448 100.758 24.976C101.35 25.504 102.062 25.768 102.894 25.768C103.518 25.768 104.038 25.632 104.454 25.36C104.886 25.072 105.206 24.704 105.414 24.256H108.534C108.31 25.008 107.934 25.696 107.406 26.32C106.894 26.928 106.254 27.408 105.486 27.76C104.734 28.112 103.878 28.288 102.918 28.288ZM102.942 18.304C102.19 18.304 101.526 18.52 100.95 18.952C100.374 19.368 100.006 20.008 99.8462 20.872H105.774C105.726 20.088 105.438 19.464 104.91 19C104.382 18.536 103.726 18.304 102.942 18.304ZM111.478 28V16.096H114.214L114.502 18.328C114.934 17.56 115.518 16.952 116.254 16.504C117.006 16.04 117.886 15.808 118.894 15.808V19.048H118.03C117.358 19.048 116.758 19.152 116.23 19.36C115.702 19.568 115.286 19.928 114.982 20.44C114.694 20.952 114.55 21.664 114.55 22.576V28H111.478ZM125.098 28.288C124.074 28.288 123.234 28.128 122.578 27.808C121.922 27.472 121.434 27.032 121.114 26.488C120.794 25.944 120.634 25.344 120.634 24.688C120.634 23.584 121.066 22.688 121.93 22C122.794 21.312 124.09 20.968 125.818 20.968H128.842V20.68C128.842 19.864 128.61 19.264 128.146 18.88C127.682 18.496 127.106 18.304 126.418 18.304C125.794 18.304 125.25 18.456 124.786 18.76C124.322 19.048 124.034 19.48 123.922 20.056H120.922C121.002 19.192 121.29 18.44 121.786 17.8C122.298 17.16 122.954 16.672 123.754 16.336C124.554 15.984 125.45 15.808 126.442 15.808C128.138 15.808 129.474 16.232 130.45 17.08C131.426 17.928 131.914 19.128 131.914 20.68V28H129.298L129.01 26.08C128.658 26.72 128.162 27.248 127.522 27.664C126.898 28.08 126.09 28.288 125.098 28.288ZM125.794 25.888C126.674 25.888 127.354 25.6 127.834 25.024C128.33 24.448 128.642 23.736 128.77 22.888H126.154C125.338 22.888 124.754 23.04 124.402 23.344C124.05 23.632 123.874 23.992 123.874 24.424C123.874 24.888 124.05 25.248 124.402 25.504C124.754 25.76 125.218 25.888 125.794 25.888ZM140.677 28.288C139.461 28.288 138.389 28.024 137.461 27.496C136.533 26.968 135.797 26.232 135.253 25.288C134.725 24.344 134.461 23.264 134.461 22.048C134.461 20.832 134.725 19.752 135.253 18.808C135.797 17.864 136.533 17.128 137.461 16.6C138.389 16.072 139.461 15.808 140.677 15.808C142.197 15.808 143.477 16.208 144.517 17.008C145.557 17.792 146.221 18.88 146.509 20.272H143.269C143.109 19.696 142.789 19.248 142.309 18.928C141.845 18.592 141.293 18.424 140.653 18.424C139.805 18.424 139.085 18.744 138.493 19.384C137.901 20.024 137.605 20.912 137.605 22.048C137.605 23.184 137.901 24.072 138.493 24.712C139.085 25.352 139.805 25.672 140.653 25.672C141.293 25.672 141.845 25.512 142.309 25.192C142.789 24.872 143.109 24.416 143.269 23.824H146.509C146.221 25.168 145.557 26.248 144.517 27.064C143.477 27.88 142.197 28.288 140.677 28.288ZM154.376 28C153.128 28 152.128 27.696 151.376 27.088C150.624 26.48 150.248 25.4 150.248 23.848V18.664H148.208V16.096H150.248L150.608 12.904H153.32V16.096H156.536V18.664H153.32V23.872C153.32 24.448 153.44 24.848 153.68 25.072C153.936 25.28 154.368 25.384 154.976 25.384H156.464V28H154.376ZM158.429 28L163.685 19.504L158.357 11.2H161.885L165.653 17.056L169.109 11.2H172.565L167.309 19.648L172.685 28H169.157L165.341 22.072L161.885 28H158.429Z'
                              fill='#191820'></path>
                            <defs>
                              <linearGradient
                                id='paint0_linear_5_10458'
                                x1='13.1699'
                                y1='8.00726'
                                x2='18.4084'
                                y2='17.3617'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#8122E2'></stop>
                                <stop offset='1' stop-color='#FF56EF'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint1_linear_5_10458'
                                x1='13.168'
                                y1='22.376'
                                x2='18.4813'
                                y2='34.0503'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint2_linear_5_10458'
                                x1='13.9939'
                                y1='22.2263'
                                x2='20.6543'
                                y2='34.7238'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint3_linear_5_10458'
                                x1='20.1291'
                                y1='19.1582'
                                x2='10.9244'
                                y2='36.071'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF56EF'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint4_linear_5_10458'
                                x1='25.4445'
                                y1='15.2663'
                                x2='32.7784'
                                y2='26.0426'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint5_linear_5_10458'
                                x1='25.4415'
                                y1='14.7427'
                                x2='32.925'
                                y2='25.519'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint6_linear_5_10458'
                                x1='19.1569'
                                y1='19.9813'
                                x2='38.4645'
                                y2='20.2058'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF55F3'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>BlockChain:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/pluschain-img-feed.png'} alt='img'></img>
                        </div>
                      </div>
                    </div>
                    <div className='img-block-last-feed'>
                      <img src='../../images/trending-img-new.png' alt='img'></img>
                      <div className='share-block'>
                        <h2>6 May 2024 2:35PM</h2>
                        <a href=''>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M15 18.3327C14.3056 18.3327 13.7153 18.0896 13.2292 17.6035C12.7431 17.1174 12.5 16.5271 12.5 15.8327C12.5 15.7355 12.5069 15.6346 12.5208 15.5302C12.5347 15.4257 12.5556 15.3321 12.5833 15.2493L6.70833 11.8327C6.47222 12.041 6.20833 12.2043 5.91667 12.3227C5.625 12.441 5.31944 12.4999 5 12.4993C4.30556 12.4993 3.71528 12.2563 3.22917 11.7702C2.74306 11.2841 2.5 10.6938 2.5 9.99935C2.5 9.3049 2.74306 8.71463 3.22917 8.22852C3.71528 7.7424 4.30556 7.49935 5 7.49935C5.31944 7.49935 5.625 7.55852 5.91667 7.67685C6.20833 7.79518 6.47222 7.95824 6.70833 8.16602L12.5833 4.74935C12.5556 4.66602 12.5347 4.5724 12.5208 4.46852C12.5069 4.36463 12.5 4.26379 12.5 4.16602C12.5 3.47157 12.7431 2.88129 13.2292 2.39518C13.7153 1.90907 14.3056 1.66602 15 1.66602C15.6944 1.66602 16.2847 1.90907 16.7708 2.39518C17.2569 2.88129 17.5 3.47157 17.5 4.16602C17.5 4.86046 17.2569 5.45074 16.7708 5.93685C16.2847 6.42296 15.6944 6.66602 15 6.66602C14.6806 6.66602 14.375 6.60713 14.0833 6.48935C13.7917 6.37157 13.5278 6.20824 13.2917 5.99935L7.41667 9.41602C7.44444 9.49935 7.46528 9.59324 7.47917 9.69768C7.49306 9.80213 7.5 9.90268 7.5 9.99935C7.5 10.096 7.49306 10.1968 7.47917 10.3018C7.46528 10.4068 7.44444 10.5005 7.41667 10.5827L13.2917 13.9993C13.5278 13.791 13.7917 13.628 14.0833 13.5102C14.375 13.3924 14.6806 13.3332 15 13.3327C15.6944 13.3327 16.2847 13.5757 16.7708 14.0618C17.2569 14.548 17.5 15.1382 17.5 15.8327C17.5 16.5271 17.2569 17.1174 16.7708 17.6035C16.2847 18.0896 15.6944 18.3327 15 18.3327Z'
                              fill='black'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='feed-page-block-middle-inner-block'>
                  <div className='feed-page-block-middle-inner-block-top'>
                    <div className='left-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                    </div>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                  </div>
                  <div className='bottom-feed-block'>
                    <div className='text-discription'>
                      <p>
                        Purchased <span>"Avidlines #14843"</span> from collection <span>"Avidlines club"</span>
                      </p>
                    </div>
                    <div className='bottom-feed-block-three-block'>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Price:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/eth-icon.svg'} alt='img' className='img-eth'></img>
                          <h4>14 ETH</h4>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Marketplace:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          {/* <img src={'../../images/eth-icon.svg'} alt='img'></img> */}
                          <svg
                            width='178'
                            height='40'
                            viewBox='0 0 178 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14.416 10.2812L9.85547 18.1801H19.0198L23.5801 10.2812H14.416Z'
                              fill='white'></path>
                            <path
                              d='M12.8192 7.5127L6.66016 18.1804H9.85749L14.4178 10.2815H23.5822L25.1806 7.5127H12.8192Z'
                              fill='#073FB8'></path>
                            <path
                              d='M11.7777 5.64258L4.53906 18.1803H6.65925L12.8183 7.51265H25.1797L26.2593 5.64258H11.7777Z'
                              fill='#5302C2'></path>
                            <path
                              d='M10.4945 3.42188L0.902344 20.0363C7.30051 20.0379 13.7127 20.0337 20.1109 20.0315C23.3107 14.5016 26.4746 8.95897 29.6878 3.43676L10.4945 3.42188ZM11.7773 5.64375H26.2589L19.0211 18.1803H4.53933L11.7773 5.64375Z'
                              fill='url(#paint0_linear_5_10458)'></path>
                            <path
                              d='M4.53516 21.8887L11.7755 34.4291H26.256L25.2025 32.6041H12.8166L6.63012 21.8887H4.53516Z'
                              fill='url(#paint1_linear_5_10458)'></path>
                            <path
                              d='M6.63281 21.8887L12.8193 32.6041H25.2051L23.6065 29.8353H14.418L9.83014 21.8887H6.63281Z'
                              fill='url(#paint2_linear_5_10458)'></path>
                            <path
                              d='M9.82812 21.8887L14.4162 29.8353H23.6044L19.0164 21.8887H9.82812Z'
                              fill='white'></path>
                            <path
                              d='M0.90625 20.0293L10.4941 36.6511H29.6787L20.0935 20.0293H0.90625ZM4.53662 21.8888H19.0172L26.2575 34.4292H11.7769L4.53662 21.8888Z'
                              fill='url(#paint3_linear_5_10458)'></path>
                            <path
                              d='M29.4601 7.4834L28.375 9.36306L34.5499 20.0582L28.3911 30.7257L29.4639 32.5844L36.7078 20.0371L29.4601 7.4834Z'
                              fill='url(#paint4_linear_5_10458)'></path>
                            <path
                              d='M26.7752 12.1318L22.2148 20.0307L26.7911 27.9572L31.3514 20.0584L26.7752 12.1318Z'
                              fill='white'></path>
                            <path
                              d='M28.3719 9.36328L26.7734 12.1321L31.3497 20.0585L26.7894 27.9571L28.388 30.7259L34.5468 20.0585L28.3719 9.36328Z'
                              fill='url(#paint5_linear_5_10458)'></path>
                            <path
                              d='M29.6853 3.43262C26.481 8.96597 23.2921 14.5082 20.0977 20.0472C23.2941 25.5787 26.4818 31.1152 29.6836 36.6436L39.2717 20.0367L29.6853 3.43262ZM29.4587 7.48384L36.7061 20.0367L29.462 32.5837L22.2147 20.0309L29.4587 7.48384Z'
                              fill='url(#paint6_linear_5_10458)'></path>
                            <path
                              class='app_logo_text'
                              d='M49.5323 28V13.672H44.6363V11.2H57.5243V13.672H52.6043V28H49.5323ZM63.3557 28.288C62.1557 28.288 61.0917 28.032 60.1637 27.52C59.2357 27.008 58.5077 26.288 57.9797 25.36C57.4517 24.432 57.1877 23.36 57.1877 22.144C57.1877 20.912 57.4437 19.816 57.9557 18.856C58.4837 17.896 59.2037 17.152 60.1157 16.624C61.0437 16.08 62.1317 15.808 63.3797 15.808C64.5477 15.808 65.5797 16.064 66.4757 16.576C67.3717 17.088 68.0677 17.792 68.5637 18.688C69.0757 19.568 69.3317 20.552 69.3317 21.64C69.3317 21.816 69.3237 22 69.3077 22.192C69.3077 22.384 69.2997 22.584 69.2837 22.792H60.2357C60.2997 23.72 60.6197 24.448 61.1957 24.976C61.7877 25.504 62.4997 25.768 63.3317 25.768C63.9557 25.768 64.4757 25.632 64.8917 25.36C65.3237 25.072 65.6437 24.704 65.8517 24.256H68.9717C68.7477 25.008 68.3717 25.696 67.8437 26.32C67.3317 26.928 66.6917 27.408 65.9237 27.76C65.1717 28.112 64.3157 28.288 63.3557 28.288ZM63.3797 18.304C62.6277 18.304 61.9637 18.52 61.3877 18.952C60.8117 19.368 60.4437 20.008 60.2837 20.872H66.2117C66.1637 20.088 65.8757 19.464 65.3477 19C64.8197 18.536 64.1637 18.304 63.3797 18.304ZM76.8355 28.288C75.7795 28.288 74.8515 28.12 74.0515 27.784C73.2515 27.432 72.6115 26.952 72.1315 26.344C71.6515 25.736 71.3635 25.032 71.2675 24.232H74.3635C74.4595 24.696 74.7155 25.096 75.1315 25.432C75.5635 25.752 76.1155 25.912 76.7875 25.912C77.4595 25.912 77.9475 25.776 78.2515 25.504C78.5715 25.232 78.7315 24.92 78.7315 24.568C78.7315 24.056 78.5075 23.712 78.0595 23.536C77.6115 23.344 76.9875 23.16 76.1875 22.984C75.6755 22.872 75.1555 22.736 74.6275 22.576C74.0995 22.416 73.6115 22.216 73.1635 21.976C72.7315 21.72 72.3795 21.4 72.1075 21.016C71.8355 20.616 71.6995 20.128 71.6995 19.552C71.6995 18.496 72.1155 17.608 72.9475 16.888C73.7955 16.168 74.9795 15.808 76.4995 15.808C77.9075 15.808 79.0275 16.136 79.8595 16.792C80.7075 17.448 81.2115 18.352 81.3715 19.504H78.4675C78.2915 18.624 77.6275 18.184 76.4755 18.184C75.8995 18.184 75.4515 18.296 75.1315 18.52C74.8275 18.744 74.6755 19.024 74.6755 19.36C74.6755 19.712 74.9075 19.992 75.3715 20.2C75.8355 20.408 76.4515 20.6 77.2195 20.776C78.0515 20.968 78.8115 21.184 79.4995 21.424C80.2035 21.648 80.7635 21.992 81.1795 22.456C81.5955 22.904 81.8035 23.552 81.8035 24.4C81.8195 25.136 81.6275 25.8 81.2275 26.392C80.8275 26.984 80.2515 27.448 79.4995 27.784C78.7475 28.12 77.8595 28.288 76.8355 28.288ZM89.4448 28.288C88.3888 28.288 87.4608 28.12 86.6608 27.784C85.8608 27.432 85.2208 26.952 84.7408 26.344C84.2608 25.736 83.9728 25.032 83.8768 24.232H86.9728C87.0688 24.696 87.3248 25.096 87.7408 25.432C88.1728 25.752 88.7248 25.912 89.3968 25.912C90.0688 25.912 90.5568 25.776 90.8608 25.504C91.1808 25.232 91.3408 24.92 91.3408 24.568C91.3408 24.056 91.1168 23.712 90.6688 23.536C90.2208 23.344 89.5968 23.16 88.7968 22.984C88.2848 22.872 87.7648 22.736 87.2368 22.576C86.7088 22.416 86.2208 22.216 85.7728 21.976C85.3408 21.72 84.9888 21.4 84.7168 21.016C84.4448 20.616 84.3088 20.128 84.3088 19.552C84.3088 18.496 84.7248 17.608 85.5568 16.888C86.4048 16.168 87.5888 15.808 89.1088 15.808C90.5168 15.808 91.6368 16.136 92.4688 16.792C93.3168 17.448 93.8208 18.352 93.9808 19.504H91.0768C90.9008 18.624 90.2368 18.184 89.0848 18.184C88.5088 18.184 88.0608 18.296 87.7408 18.52C87.4368 18.744 87.2848 19.024 87.2848 19.36C87.2848 19.712 87.5168 19.992 87.9808 20.2C88.4448 20.408 89.0608 20.6 89.8288 20.776C90.6608 20.968 91.4208 21.184 92.1088 21.424C92.8128 21.648 93.3728 21.992 93.7888 22.456C94.2048 22.904 94.4128 23.552 94.4128 24.4C94.4288 25.136 94.2368 25.8 93.8368 26.392C93.4368 26.984 92.8608 27.448 92.1088 27.784C91.3568 28.12 90.4688 28.288 89.4448 28.288ZM102.918 28.288C101.718 28.288 100.654 28.032 99.7262 27.52C98.7982 27.008 98.0702 26.288 97.5422 25.36C97.0142 24.432 96.7502 23.36 96.7502 22.144C96.7502 20.912 97.0062 19.816 97.5182 18.856C98.0462 17.896 98.7662 17.152 99.6782 16.624C100.606 16.08 101.694 15.808 102.942 15.808C104.11 15.808 105.142 16.064 106.038 16.576C106.934 17.088 107.63 17.792 108.126 18.688C108.638 19.568 108.894 20.552 108.894 21.64C108.894 21.816 108.886 22 108.87 22.192C108.87 22.384 108.862 22.584 108.846 22.792H99.7982C99.8622 23.72 100.182 24.448 100.758 24.976C101.35 25.504 102.062 25.768 102.894 25.768C103.518 25.768 104.038 25.632 104.454 25.36C104.886 25.072 105.206 24.704 105.414 24.256H108.534C108.31 25.008 107.934 25.696 107.406 26.32C106.894 26.928 106.254 27.408 105.486 27.76C104.734 28.112 103.878 28.288 102.918 28.288ZM102.942 18.304C102.19 18.304 101.526 18.52 100.95 18.952C100.374 19.368 100.006 20.008 99.8462 20.872H105.774C105.726 20.088 105.438 19.464 104.91 19C104.382 18.536 103.726 18.304 102.942 18.304ZM111.478 28V16.096H114.214L114.502 18.328C114.934 17.56 115.518 16.952 116.254 16.504C117.006 16.04 117.886 15.808 118.894 15.808V19.048H118.03C117.358 19.048 116.758 19.152 116.23 19.36C115.702 19.568 115.286 19.928 114.982 20.44C114.694 20.952 114.55 21.664 114.55 22.576V28H111.478ZM125.098 28.288C124.074 28.288 123.234 28.128 122.578 27.808C121.922 27.472 121.434 27.032 121.114 26.488C120.794 25.944 120.634 25.344 120.634 24.688C120.634 23.584 121.066 22.688 121.93 22C122.794 21.312 124.09 20.968 125.818 20.968H128.842V20.68C128.842 19.864 128.61 19.264 128.146 18.88C127.682 18.496 127.106 18.304 126.418 18.304C125.794 18.304 125.25 18.456 124.786 18.76C124.322 19.048 124.034 19.48 123.922 20.056H120.922C121.002 19.192 121.29 18.44 121.786 17.8C122.298 17.16 122.954 16.672 123.754 16.336C124.554 15.984 125.45 15.808 126.442 15.808C128.138 15.808 129.474 16.232 130.45 17.08C131.426 17.928 131.914 19.128 131.914 20.68V28H129.298L129.01 26.08C128.658 26.72 128.162 27.248 127.522 27.664C126.898 28.08 126.09 28.288 125.098 28.288ZM125.794 25.888C126.674 25.888 127.354 25.6 127.834 25.024C128.33 24.448 128.642 23.736 128.77 22.888H126.154C125.338 22.888 124.754 23.04 124.402 23.344C124.05 23.632 123.874 23.992 123.874 24.424C123.874 24.888 124.05 25.248 124.402 25.504C124.754 25.76 125.218 25.888 125.794 25.888ZM140.677 28.288C139.461 28.288 138.389 28.024 137.461 27.496C136.533 26.968 135.797 26.232 135.253 25.288C134.725 24.344 134.461 23.264 134.461 22.048C134.461 20.832 134.725 19.752 135.253 18.808C135.797 17.864 136.533 17.128 137.461 16.6C138.389 16.072 139.461 15.808 140.677 15.808C142.197 15.808 143.477 16.208 144.517 17.008C145.557 17.792 146.221 18.88 146.509 20.272H143.269C143.109 19.696 142.789 19.248 142.309 18.928C141.845 18.592 141.293 18.424 140.653 18.424C139.805 18.424 139.085 18.744 138.493 19.384C137.901 20.024 137.605 20.912 137.605 22.048C137.605 23.184 137.901 24.072 138.493 24.712C139.085 25.352 139.805 25.672 140.653 25.672C141.293 25.672 141.845 25.512 142.309 25.192C142.789 24.872 143.109 24.416 143.269 23.824H146.509C146.221 25.168 145.557 26.248 144.517 27.064C143.477 27.88 142.197 28.288 140.677 28.288ZM154.376 28C153.128 28 152.128 27.696 151.376 27.088C150.624 26.48 150.248 25.4 150.248 23.848V18.664H148.208V16.096H150.248L150.608 12.904H153.32V16.096H156.536V18.664H153.32V23.872C153.32 24.448 153.44 24.848 153.68 25.072C153.936 25.28 154.368 25.384 154.976 25.384H156.464V28H154.376ZM158.429 28L163.685 19.504L158.357 11.2H161.885L165.653 17.056L169.109 11.2H172.565L167.309 19.648L172.685 28H169.157L165.341 22.072L161.885 28H158.429Z'
                              fill='#191820'></path>
                            <defs>
                              <linearGradient
                                id='paint0_linear_5_10458'
                                x1='13.1699'
                                y1='8.00726'
                                x2='18.4084'
                                y2='17.3617'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#8122E2'></stop>
                                <stop offset='1' stop-color='#FF56EF'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint1_linear_5_10458'
                                x1='13.168'
                                y1='22.376'
                                x2='18.4813'
                                y2='34.0503'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint2_linear_5_10458'
                                x1='13.9939'
                                y1='22.2263'
                                x2='20.6543'
                                y2='34.7238'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint3_linear_5_10458'
                                x1='20.1291'
                                y1='19.1582'
                                x2='10.9244'
                                y2='36.071'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF56EF'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint4_linear_5_10458'
                                x1='25.4445'
                                y1='15.2663'
                                x2='32.7784'
                                y2='26.0426'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint5_linear_5_10458'
                                x1='25.4415'
                                y1='14.7427'
                                x2='32.925'
                                y2='25.519'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint6_linear_5_10458'
                                x1='19.1569'
                                y1='19.9813'
                                x2='38.4645'
                                y2='20.2058'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF55F3'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>BlockChain:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/pluschain-img-feed.png'} alt='img'></img>
                        </div>
                      </div>
                    </div>
                    <div className='img-block-last-feed'>
                      <img src='../../images/trending-img-new.png' alt='img'></img>
                      <div className='share-block'>
                        <h2>6 May 2024 2:35PM</h2>
                        <a href=''>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M15 18.3327C14.3056 18.3327 13.7153 18.0896 13.2292 17.6035C12.7431 17.1174 12.5 16.5271 12.5 15.8327C12.5 15.7355 12.5069 15.6346 12.5208 15.5302C12.5347 15.4257 12.5556 15.3321 12.5833 15.2493L6.70833 11.8327C6.47222 12.041 6.20833 12.2043 5.91667 12.3227C5.625 12.441 5.31944 12.4999 5 12.4993C4.30556 12.4993 3.71528 12.2563 3.22917 11.7702C2.74306 11.2841 2.5 10.6938 2.5 9.99935C2.5 9.3049 2.74306 8.71463 3.22917 8.22852C3.71528 7.7424 4.30556 7.49935 5 7.49935C5.31944 7.49935 5.625 7.55852 5.91667 7.67685C6.20833 7.79518 6.47222 7.95824 6.70833 8.16602L12.5833 4.74935C12.5556 4.66602 12.5347 4.5724 12.5208 4.46852C12.5069 4.36463 12.5 4.26379 12.5 4.16602C12.5 3.47157 12.7431 2.88129 13.2292 2.39518C13.7153 1.90907 14.3056 1.66602 15 1.66602C15.6944 1.66602 16.2847 1.90907 16.7708 2.39518C17.2569 2.88129 17.5 3.47157 17.5 4.16602C17.5 4.86046 17.2569 5.45074 16.7708 5.93685C16.2847 6.42296 15.6944 6.66602 15 6.66602C14.6806 6.66602 14.375 6.60713 14.0833 6.48935C13.7917 6.37157 13.5278 6.20824 13.2917 5.99935L7.41667 9.41602C7.44444 9.49935 7.46528 9.59324 7.47917 9.69768C7.49306 9.80213 7.5 9.90268 7.5 9.99935C7.5 10.096 7.49306 10.1968 7.47917 10.3018C7.46528 10.4068 7.44444 10.5005 7.41667 10.5827L13.2917 13.9993C13.5278 13.791 13.7917 13.628 14.0833 13.5102C14.375 13.3924 14.6806 13.3332 15 13.3327C15.6944 13.3327 16.2847 13.5757 16.7708 14.0618C17.2569 14.548 17.5 15.1382 17.5 15.8327C17.5 16.5271 17.2569 17.1174 16.7708 17.6035C16.2847 18.0896 15.6944 18.3327 15 18.3327Z'
                              fill='black'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='feed-page-block-middle-inner-block'>
                  <div className='feed-page-block-middle-inner-block-top'>
                    <div className='left-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                    </div>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                  </div>
                  <div className='bottom-feed-block'>
                    <div className='text-discription'>
                      <p>
                        Purchased <span>"Avidlines #14843"</span> from collection <span>"Avidlines club"</span>
                      </p>
                    </div>
                    <div className='bottom-feed-block-three-block'>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Price:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/eth-icon.svg'} alt='img' className='img-eth'></img>
                          <h4>14 ETH</h4>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>Marketplace:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          {/* <img src={'../../images/eth-icon.svg'} alt='img'></img> */}
                          <svg
                            width='178'
                            height='40'
                            viewBox='0 0 178 40'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M14.416 10.2812L9.85547 18.1801H19.0198L23.5801 10.2812H14.416Z'
                              fill='white'></path>
                            <path
                              d='M12.8192 7.5127L6.66016 18.1804H9.85749L14.4178 10.2815H23.5822L25.1806 7.5127H12.8192Z'
                              fill='#073FB8'></path>
                            <path
                              d='M11.7777 5.64258L4.53906 18.1803H6.65925L12.8183 7.51265H25.1797L26.2593 5.64258H11.7777Z'
                              fill='#5302C2'></path>
                            <path
                              d='M10.4945 3.42188L0.902344 20.0363C7.30051 20.0379 13.7127 20.0337 20.1109 20.0315C23.3107 14.5016 26.4746 8.95897 29.6878 3.43676L10.4945 3.42188ZM11.7773 5.64375H26.2589L19.0211 18.1803H4.53933L11.7773 5.64375Z'
                              fill='url(#paint0_linear_5_10458)'></path>
                            <path
                              d='M4.53516 21.8887L11.7755 34.4291H26.256L25.2025 32.6041H12.8166L6.63012 21.8887H4.53516Z'
                              fill='url(#paint1_linear_5_10458)'></path>
                            <path
                              d='M6.63281 21.8887L12.8193 32.6041H25.2051L23.6065 29.8353H14.418L9.83014 21.8887H6.63281Z'
                              fill='url(#paint2_linear_5_10458)'></path>
                            <path
                              d='M9.82812 21.8887L14.4162 29.8353H23.6044L19.0164 21.8887H9.82812Z'
                              fill='white'></path>
                            <path
                              d='M0.90625 20.0293L10.4941 36.6511H29.6787L20.0935 20.0293H0.90625ZM4.53662 21.8888H19.0172L26.2575 34.4292H11.7769L4.53662 21.8888Z'
                              fill='url(#paint3_linear_5_10458)'></path>
                            <path
                              d='M29.4601 7.4834L28.375 9.36306L34.5499 20.0582L28.3911 30.7257L29.4639 32.5844L36.7078 20.0371L29.4601 7.4834Z'
                              fill='url(#paint4_linear_5_10458)'></path>
                            <path
                              d='M26.7752 12.1318L22.2148 20.0307L26.7911 27.9572L31.3514 20.0584L26.7752 12.1318Z'
                              fill='white'></path>
                            <path
                              d='M28.3719 9.36328L26.7734 12.1321L31.3497 20.0585L26.7894 27.9571L28.388 30.7259L34.5468 20.0585L28.3719 9.36328Z'
                              fill='url(#paint5_linear_5_10458)'></path>
                            <path
                              d='M29.6853 3.43262C26.481 8.96597 23.2921 14.5082 20.0977 20.0472C23.2941 25.5787 26.4818 31.1152 29.6836 36.6436L39.2717 20.0367L29.6853 3.43262ZM29.4587 7.48384L36.7061 20.0367L29.462 32.5837L22.2147 20.0309L29.4587 7.48384Z'
                              fill='url(#paint6_linear_5_10458)'></path>
                            <path
                              class='app_logo_text'
                              d='M49.5323 28V13.672H44.6363V11.2H57.5243V13.672H52.6043V28H49.5323ZM63.3557 28.288C62.1557 28.288 61.0917 28.032 60.1637 27.52C59.2357 27.008 58.5077 26.288 57.9797 25.36C57.4517 24.432 57.1877 23.36 57.1877 22.144C57.1877 20.912 57.4437 19.816 57.9557 18.856C58.4837 17.896 59.2037 17.152 60.1157 16.624C61.0437 16.08 62.1317 15.808 63.3797 15.808C64.5477 15.808 65.5797 16.064 66.4757 16.576C67.3717 17.088 68.0677 17.792 68.5637 18.688C69.0757 19.568 69.3317 20.552 69.3317 21.64C69.3317 21.816 69.3237 22 69.3077 22.192C69.3077 22.384 69.2997 22.584 69.2837 22.792H60.2357C60.2997 23.72 60.6197 24.448 61.1957 24.976C61.7877 25.504 62.4997 25.768 63.3317 25.768C63.9557 25.768 64.4757 25.632 64.8917 25.36C65.3237 25.072 65.6437 24.704 65.8517 24.256H68.9717C68.7477 25.008 68.3717 25.696 67.8437 26.32C67.3317 26.928 66.6917 27.408 65.9237 27.76C65.1717 28.112 64.3157 28.288 63.3557 28.288ZM63.3797 18.304C62.6277 18.304 61.9637 18.52 61.3877 18.952C60.8117 19.368 60.4437 20.008 60.2837 20.872H66.2117C66.1637 20.088 65.8757 19.464 65.3477 19C64.8197 18.536 64.1637 18.304 63.3797 18.304ZM76.8355 28.288C75.7795 28.288 74.8515 28.12 74.0515 27.784C73.2515 27.432 72.6115 26.952 72.1315 26.344C71.6515 25.736 71.3635 25.032 71.2675 24.232H74.3635C74.4595 24.696 74.7155 25.096 75.1315 25.432C75.5635 25.752 76.1155 25.912 76.7875 25.912C77.4595 25.912 77.9475 25.776 78.2515 25.504C78.5715 25.232 78.7315 24.92 78.7315 24.568C78.7315 24.056 78.5075 23.712 78.0595 23.536C77.6115 23.344 76.9875 23.16 76.1875 22.984C75.6755 22.872 75.1555 22.736 74.6275 22.576C74.0995 22.416 73.6115 22.216 73.1635 21.976C72.7315 21.72 72.3795 21.4 72.1075 21.016C71.8355 20.616 71.6995 20.128 71.6995 19.552C71.6995 18.496 72.1155 17.608 72.9475 16.888C73.7955 16.168 74.9795 15.808 76.4995 15.808C77.9075 15.808 79.0275 16.136 79.8595 16.792C80.7075 17.448 81.2115 18.352 81.3715 19.504H78.4675C78.2915 18.624 77.6275 18.184 76.4755 18.184C75.8995 18.184 75.4515 18.296 75.1315 18.52C74.8275 18.744 74.6755 19.024 74.6755 19.36C74.6755 19.712 74.9075 19.992 75.3715 20.2C75.8355 20.408 76.4515 20.6 77.2195 20.776C78.0515 20.968 78.8115 21.184 79.4995 21.424C80.2035 21.648 80.7635 21.992 81.1795 22.456C81.5955 22.904 81.8035 23.552 81.8035 24.4C81.8195 25.136 81.6275 25.8 81.2275 26.392C80.8275 26.984 80.2515 27.448 79.4995 27.784C78.7475 28.12 77.8595 28.288 76.8355 28.288ZM89.4448 28.288C88.3888 28.288 87.4608 28.12 86.6608 27.784C85.8608 27.432 85.2208 26.952 84.7408 26.344C84.2608 25.736 83.9728 25.032 83.8768 24.232H86.9728C87.0688 24.696 87.3248 25.096 87.7408 25.432C88.1728 25.752 88.7248 25.912 89.3968 25.912C90.0688 25.912 90.5568 25.776 90.8608 25.504C91.1808 25.232 91.3408 24.92 91.3408 24.568C91.3408 24.056 91.1168 23.712 90.6688 23.536C90.2208 23.344 89.5968 23.16 88.7968 22.984C88.2848 22.872 87.7648 22.736 87.2368 22.576C86.7088 22.416 86.2208 22.216 85.7728 21.976C85.3408 21.72 84.9888 21.4 84.7168 21.016C84.4448 20.616 84.3088 20.128 84.3088 19.552C84.3088 18.496 84.7248 17.608 85.5568 16.888C86.4048 16.168 87.5888 15.808 89.1088 15.808C90.5168 15.808 91.6368 16.136 92.4688 16.792C93.3168 17.448 93.8208 18.352 93.9808 19.504H91.0768C90.9008 18.624 90.2368 18.184 89.0848 18.184C88.5088 18.184 88.0608 18.296 87.7408 18.52C87.4368 18.744 87.2848 19.024 87.2848 19.36C87.2848 19.712 87.5168 19.992 87.9808 20.2C88.4448 20.408 89.0608 20.6 89.8288 20.776C90.6608 20.968 91.4208 21.184 92.1088 21.424C92.8128 21.648 93.3728 21.992 93.7888 22.456C94.2048 22.904 94.4128 23.552 94.4128 24.4C94.4288 25.136 94.2368 25.8 93.8368 26.392C93.4368 26.984 92.8608 27.448 92.1088 27.784C91.3568 28.12 90.4688 28.288 89.4448 28.288ZM102.918 28.288C101.718 28.288 100.654 28.032 99.7262 27.52C98.7982 27.008 98.0702 26.288 97.5422 25.36C97.0142 24.432 96.7502 23.36 96.7502 22.144C96.7502 20.912 97.0062 19.816 97.5182 18.856C98.0462 17.896 98.7662 17.152 99.6782 16.624C100.606 16.08 101.694 15.808 102.942 15.808C104.11 15.808 105.142 16.064 106.038 16.576C106.934 17.088 107.63 17.792 108.126 18.688C108.638 19.568 108.894 20.552 108.894 21.64C108.894 21.816 108.886 22 108.87 22.192C108.87 22.384 108.862 22.584 108.846 22.792H99.7982C99.8622 23.72 100.182 24.448 100.758 24.976C101.35 25.504 102.062 25.768 102.894 25.768C103.518 25.768 104.038 25.632 104.454 25.36C104.886 25.072 105.206 24.704 105.414 24.256H108.534C108.31 25.008 107.934 25.696 107.406 26.32C106.894 26.928 106.254 27.408 105.486 27.76C104.734 28.112 103.878 28.288 102.918 28.288ZM102.942 18.304C102.19 18.304 101.526 18.52 100.95 18.952C100.374 19.368 100.006 20.008 99.8462 20.872H105.774C105.726 20.088 105.438 19.464 104.91 19C104.382 18.536 103.726 18.304 102.942 18.304ZM111.478 28V16.096H114.214L114.502 18.328C114.934 17.56 115.518 16.952 116.254 16.504C117.006 16.04 117.886 15.808 118.894 15.808V19.048H118.03C117.358 19.048 116.758 19.152 116.23 19.36C115.702 19.568 115.286 19.928 114.982 20.44C114.694 20.952 114.55 21.664 114.55 22.576V28H111.478ZM125.098 28.288C124.074 28.288 123.234 28.128 122.578 27.808C121.922 27.472 121.434 27.032 121.114 26.488C120.794 25.944 120.634 25.344 120.634 24.688C120.634 23.584 121.066 22.688 121.93 22C122.794 21.312 124.09 20.968 125.818 20.968H128.842V20.68C128.842 19.864 128.61 19.264 128.146 18.88C127.682 18.496 127.106 18.304 126.418 18.304C125.794 18.304 125.25 18.456 124.786 18.76C124.322 19.048 124.034 19.48 123.922 20.056H120.922C121.002 19.192 121.29 18.44 121.786 17.8C122.298 17.16 122.954 16.672 123.754 16.336C124.554 15.984 125.45 15.808 126.442 15.808C128.138 15.808 129.474 16.232 130.45 17.08C131.426 17.928 131.914 19.128 131.914 20.68V28H129.298L129.01 26.08C128.658 26.72 128.162 27.248 127.522 27.664C126.898 28.08 126.09 28.288 125.098 28.288ZM125.794 25.888C126.674 25.888 127.354 25.6 127.834 25.024C128.33 24.448 128.642 23.736 128.77 22.888H126.154C125.338 22.888 124.754 23.04 124.402 23.344C124.05 23.632 123.874 23.992 123.874 24.424C123.874 24.888 124.05 25.248 124.402 25.504C124.754 25.76 125.218 25.888 125.794 25.888ZM140.677 28.288C139.461 28.288 138.389 28.024 137.461 27.496C136.533 26.968 135.797 26.232 135.253 25.288C134.725 24.344 134.461 23.264 134.461 22.048C134.461 20.832 134.725 19.752 135.253 18.808C135.797 17.864 136.533 17.128 137.461 16.6C138.389 16.072 139.461 15.808 140.677 15.808C142.197 15.808 143.477 16.208 144.517 17.008C145.557 17.792 146.221 18.88 146.509 20.272H143.269C143.109 19.696 142.789 19.248 142.309 18.928C141.845 18.592 141.293 18.424 140.653 18.424C139.805 18.424 139.085 18.744 138.493 19.384C137.901 20.024 137.605 20.912 137.605 22.048C137.605 23.184 137.901 24.072 138.493 24.712C139.085 25.352 139.805 25.672 140.653 25.672C141.293 25.672 141.845 25.512 142.309 25.192C142.789 24.872 143.109 24.416 143.269 23.824H146.509C146.221 25.168 145.557 26.248 144.517 27.064C143.477 27.88 142.197 28.288 140.677 28.288ZM154.376 28C153.128 28 152.128 27.696 151.376 27.088C150.624 26.48 150.248 25.4 150.248 23.848V18.664H148.208V16.096H150.248L150.608 12.904H153.32V16.096H156.536V18.664H153.32V23.872C153.32 24.448 153.44 24.848 153.68 25.072C153.936 25.28 154.368 25.384 154.976 25.384H156.464V28H154.376ZM158.429 28L163.685 19.504L158.357 11.2H161.885L165.653 17.056L169.109 11.2H172.565L167.309 19.648L172.685 28H169.157L165.341 22.072L161.885 28H158.429Z'
                              fill='#191820'></path>
                            <defs>
                              <linearGradient
                                id='paint0_linear_5_10458'
                                x1='13.1699'
                                y1='8.00726'
                                x2='18.4084'
                                y2='17.3617'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#8122E2'></stop>
                                <stop offset='1' stop-color='#FF56EF'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint1_linear_5_10458'
                                x1='13.168'
                                y1='22.376'
                                x2='18.4813'
                                y2='34.0503'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint2_linear_5_10458'
                                x1='13.9939'
                                y1='22.2263'
                                x2='20.6543'
                                y2='34.7238'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint3_linear_5_10458'
                                x1='20.1291'
                                y1='19.1582'
                                x2='10.9244'
                                y2='36.071'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF56EF'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint4_linear_5_10458'
                                x1='25.4445'
                                y1='15.2663'
                                x2='32.7784'
                                y2='26.0426'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#5302C2'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint5_linear_5_10458'
                                x1='25.4415'
                                y1='14.7427'
                                x2='32.925'
                                y2='25.519'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#073FB8'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                              <linearGradient
                                id='paint6_linear_5_10458'
                                x1='19.1569'
                                y1='19.9813'
                                x2='38.4645'
                                y2='20.2058'
                                gradientUnits='userSpaceOnUse'>
                                <stop stop-color='#FF55F3'></stop>
                                <stop offset='1' stop-color='#31CEF0'></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className='bottom-feed-block-three-block-inner'>
                        <p>BlockChain:</p>
                        <div className='bottom-feed-block-three-block-inner-img'>
                          <img src={'../../images/pluschain-img-feed.png'} alt='img'></img>
                        </div>
                      </div>
                    </div>
                    <div className='img-block-last-feed'>
                      <img src='../../images/trending-img-new.png' alt='img'></img>
                      <div className='share-block'>
                        <h2>6 May 2024 2:35PM</h2>
                        <a href=''>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M15 18.3327C14.3056 18.3327 13.7153 18.0896 13.2292 17.6035C12.7431 17.1174 12.5 16.5271 12.5 15.8327C12.5 15.7355 12.5069 15.6346 12.5208 15.5302C12.5347 15.4257 12.5556 15.3321 12.5833 15.2493L6.70833 11.8327C6.47222 12.041 6.20833 12.2043 5.91667 12.3227C5.625 12.441 5.31944 12.4999 5 12.4993C4.30556 12.4993 3.71528 12.2563 3.22917 11.7702C2.74306 11.2841 2.5 10.6938 2.5 9.99935C2.5 9.3049 2.74306 8.71463 3.22917 8.22852C3.71528 7.7424 4.30556 7.49935 5 7.49935C5.31944 7.49935 5.625 7.55852 5.91667 7.67685C6.20833 7.79518 6.47222 7.95824 6.70833 8.16602L12.5833 4.74935C12.5556 4.66602 12.5347 4.5724 12.5208 4.46852C12.5069 4.36463 12.5 4.26379 12.5 4.16602C12.5 3.47157 12.7431 2.88129 13.2292 2.39518C13.7153 1.90907 14.3056 1.66602 15 1.66602C15.6944 1.66602 16.2847 1.90907 16.7708 2.39518C17.2569 2.88129 17.5 3.47157 17.5 4.16602C17.5 4.86046 17.2569 5.45074 16.7708 5.93685C16.2847 6.42296 15.6944 6.66602 15 6.66602C14.6806 6.66602 14.375 6.60713 14.0833 6.48935C13.7917 6.37157 13.5278 6.20824 13.2917 5.99935L7.41667 9.41602C7.44444 9.49935 7.46528 9.59324 7.47917 9.69768C7.49306 9.80213 7.5 9.90268 7.5 9.99935C7.5 10.096 7.49306 10.1968 7.47917 10.3018C7.46528 10.4068 7.44444 10.5005 7.41667 10.5827L13.2917 13.9993C13.5278 13.791 13.7917 13.628 14.0833 13.5102C14.375 13.3924 14.6806 13.3332 15 13.3327C15.6944 13.3327 16.2847 13.5757 16.7708 14.0618C17.2569 14.548 17.5 15.1382 17.5 15.8327C17.5 16.5271 17.2569 17.1174 16.7708 17.6035C16.2847 18.0896 15.6944 18.3327 15 18.3327Z'
                              fill='black'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='feed-page-block-right'>
              <div className='feed-page-block-right-top'>
                <h2>Invite Friends, Earn Hyper Points</h2>
                <p>You and your friend each get hyper points when they buy or sell on TesseractX</p>
                <button>
                  <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M17.375 2.5H7.375C7.20924 2.5 7.05027 2.56585 6.93306 2.68306C6.81585 2.80027 6.75 2.95924 6.75 3.125V6.25H3.625C3.45924 6.25 3.30027 6.31585 3.18306 6.43306C3.06585 6.55027 3 6.70924 3 6.875V16.875C3 17.0408 3.06585 17.1997 3.18306 17.3169C3.30027 17.4342 3.45924 17.5 3.625 17.5H13.625C13.7908 17.5 13.9497 17.4342 14.0669 17.3169C14.1842 17.1997 14.25 17.0408 14.25 16.875V13.75H17.375C17.5408 13.75 17.6997 13.6842 17.8169 13.5669C17.9342 13.4497 18 13.2908 18 13.125V3.125C18 2.95924 17.9342 2.80027 17.8169 2.68306C17.6997 2.56585 17.5408 2.5 17.375 2.5ZM13 16.25H4.25V7.5H13V16.25ZM16.75 12.5H14.25V6.875C14.25 6.70924 14.1842 6.55027 14.0669 6.43306C13.9497 6.31585 13.7908 6.25 13.625 6.25H8V3.75H16.75V12.5Z'
                      fill='black'
                    />
                  </svg>
                  <h3>Copy Invite Link</h3>
                </button>
              </div>
              <div className='follow-block-feed'>
                <h2>Suggested Follows</h2>
                <div className='follow-block-feed-inner'>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                </div>
                <div className='show-more'>
                  <a href=''>Show more</a>
                </div>
              </div>
              <div className='follow-block-feed'>
                <h2>Top Collectors</h2>
                <div className='follow-block-feed-inner'>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className='follow-block-feed-inner-flex'>
                    <div className='right-top-feed'>
                      <img src={'../../images/profile-img-product.png'} alt='img'></img>
                      <div className='right-top-feed-content'>
                        <h4>SY</h4>
                        <p>@tesseractx</p>
                      </div>
                    </div>
                    <div className='follow-block-btn'>
                      <button>Follow</button>
                    </div>
                  </div>
                </div>
                <div className='show-more'>
                  <a href=''>Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonPageBlockPad>
    );
};

export default homepage;
