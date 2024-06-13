import { Container, Row, Col, Form } from "react-bootstrap";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Link from "next/link";
import { PATH_DASHBOARD } from "@/routes/paths";
import PageTitle from "@/components/Common/PageTitle";
import TermsOfUse from "@/components/termsOfUse/TermsOfUse";

const termsAndConditionsPage = () => {
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
      <>
        <PageTitle title={'Terms and Conditions'} />
        <CommonPageBlockPad className='dark-mode-body'>
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
                <h2>Terms and Conditions</h2>
              </div>
              <div className='terms-condition-block'>
                <div className='terms-condition-block-link'>
                  <div className='terms-condition-block-link-inner'>
                    <Link href={PATH_DASHBOARD.termsAndConditions.root} className='active'>
                      Terms and Conditons
                    </Link>
                    <Link href={PATH_DASHBOARD.privacyPolicy.root}>Privacy Policy</Link>
                  </div>
                </div>
                <div className='terms-condition-block-content'>
                  <TermsOfUse />
                </div>
              </div>
            </div>
          </Container>
        </CommonPageBlockPad>
      </>
    );
};

export default termsAndConditionsPage;
