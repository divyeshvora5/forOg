import { ConnectionGuard, Loader } from "@/components";
import PageTitle from "@/components/Common/PageTitle";
import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
import ProgressModal from "@/components/Common/create/ProgressModal";
import { CHAIN_WITH_LOGO, FAL_IMAGES_DIMENTIONS, TYPE } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useCreateItems } from "@/hooks/useContractCall";
import { globalState } from "@/redux/reducer/globalSlice";
import { marketState } from "@/redux/reducer/marketSlice";
import { PATH_DASHBOARD } from "@/routes/paths";
import {
  Button,
  FormGroup,
  Image,
  Input,
  Label,
  MainSubTitleText,
  MainTitleText,
  SubTitleText16,
  TesseractLayoutWrapper,
  UploadFillDivWrapper,
} from "@/styles/pages/main.style";
import {
  CreateNFTSectionWrapper,
  CretePriceModal,
  ItemPreviewSectionWrapper,
  TXProductBoxWrapper,
} from "@/styles/pages/profile-page";
import Link from "next/link";
import { Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { MediaRenderer } from "thirdweb/react";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React, { useState } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


const CreateItem = () => {
  const { chainId, switchNetwork } = useActiveWeb3React();
  const { contractLoading, progress } = useSelector(marketState);

  const [tabIndex, setTabIndex] = useState(0);
  // const { userDetails } = useSelector(globalState);
  const {
    formik,
    mainFilePreview,
    selectedCollection,
    collections,
    hasMore,
    handlePageChange,
    handleSearch,
    collectionSearch,
    show,
    thumbnail,
    imageSize,
    width,
    height,
    prompt,
    negativePrompt,
    imgLoading,
    setPrompt,
    setNegativePrompt,
    setShow,
    handleFileChange,
    handleAddFields,
    discardAll,
    changeType,
    changeCollection,
    handleChangeDynamicField,
    handleRemoveDynamicFields,
    setHeight,
    setWidth,
    setImageSize,
    genrateImage
  } = useCreateItems();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PageTitle title={'Create-NFT'} />
      <ConnectionGuard>
        {/* {imgLoading && <Loader />} */}
        <TesseractLayoutWrapper>
          <CreateNFTSectionWrapper>
            <CommonGraphics />
            <Container>
              <div className='TX-title-header-bar'>
                <MainTitleText className='text-center'>Create NFT</MainTitleText>
              </div>
              <ProgressModal show={!!progress} progress={progress} />
              <form onSubmit={formik.handleSubmit}>
                <Row className='row-col-revrece-mobile'>
                  <Col lg={6}>
                    <div className='TX-choose-blockchain-wrapper TX-choose-blockchain-wrapper-diff'>
                      <div className='TXtype-details-wrapper mb-40'>
                        <MainSubTitleText>Choose Blockchain</MainSubTitleText>
                        {/* <ul className='blockchain-icons'>
                            {CHAIN_WITH_LOGO.map((chain) => (
                              <>
                                {chain.chainId !== 'All' && (
                                  <li
                                    className={`${chainId === chain.chainId ? 'selected' : ''} pointer`}
                                    onClick={() => {
                                      chainId !== chain.chainId && switchNetwork(chain.chainId);
                                    }}>
                                    <i>
                                      <Image isContainImg={true} src={chain.logo} />
                                    </i>
                                    <SubTitleText16>{chain.name}</SubTitleText16>
                                  </li>
                                )}
                              </>
                            ))}
                          </ul> */}
                        <div className='radio-group-main'>
                          {CHAIN_WITH_LOGO.map((chain) => (
                            <>
                              {chain.chainId?.id !== 'All' && (
                                <div className='radio-group-main-inner'>
                                  <Form.Check
                                    type='radio'
                                    checked={chainId === chain.chainId?.id}
                                    name='Chain'
                                    onClick={() => {
                                      chainId !== chain.chainId?.id && switchNetwork(chain.chainId);
                                    }}
                                  />
                                  <label for='radio'>
                                    <img src={chain.logo} alt='icon'></img>
                                    <p>{chain.name}</p>
                                  </label>
                                </div>
                              )}
                            </>
                          ))}
                          {/* <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/ethe-icon-radio.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>Ethereum</p>
                                                        </label>
                                                    </div>
                                                    <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/pulsechain-icon.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>PulseChain</p>
                                                        </label>
                                                    </div>
                                                    <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/base-icon.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>Base</p>
                                                        </label>
                                                    </div> */}
                        </div>
                        {/* <div className="radio-group-main">
                                                    <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/ethe-icon-radio.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>Ethereum</p>
                                                        </label>
                                                    </div>
                                                    <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/pulsechain-icon.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>PulseChain</p>
                                                        </label>
                                                    </div>
                                                    <div className="radio-group-main-inner">
                                                        <Form.Check type="radio" />
                                                        <label for="radio">
                                                            <img
                                                                src="../../images/base-icon.svg"
                                                                alt="icon"
                                                            ></img>
                                                            <p>Base</p>
                                                        </label>
                                                    </div>
                                                </div> */}
                      </div>
                      <div className='TXtype-details-wrapper'>
                        <MainSubTitleText>Select Item Type</MainSubTitleText>
                        <div className='TX-radio-block TX-radio-block-diff'>
                          <div className='TX-radio-block-inner'>
                            <Input
                              type='radio'
                              id='test1'
                              checked={formik.values.type === TYPE.SINGLE}
                              name='type'
                              value={TYPE.SINGLE}
                              onChange={(e) => {
                                changeType(e.target.value);
                              }}
                            />
                            <label for='test1'>
                              <div>
                                <i className='TX-iconbox-wrapper'>
                                  <Image isContainImg={true} src='/images/Hypercubes-icon.svg' />
                                </i>
                              </div>
                              <SubTitleText16>Single</SubTitleText16>
                            </label>
                          </div>
                          <div className='TX-radio-block-inner'>
                            <Input
                              type='radio'
                              id='test2'
                              name='type'
                              checked={formik.values.type === TYPE.MULTI}
                              value={TYPE.MULTI}
                              onChange={(e) => {
                                changeType(e.target.value);
                              }}></Input>
                            <label for='test2'>
                              <div>
                                <i className='TX-iconbox-wrapper'>
                                  <Image isContainImg={true} src='/images/multiple-icon.svg' />
                                </i>
                              </div>
                              <SubTitleText16>Multiple</SubTitleText16>
                            </label>
                          </div>
                          {/* <div className="TX-radio-block-inner">
                                                        <Input
                                                            type="radio"
                                                            id="test2"
                                                            name="type"
                                                            checked={
                                                                formik.values
                                                                    .type ===
                                                                TYPE.MULTI
                                                            }
                                                            value={TYPE.MULTI}
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                        ></Input>
                                                        <label for="test2">
                                                            <div>
                                                                <i className="TX-iconbox-wrapper">
                                                                    <Image
                                                                        isContainImg={
                                                                            true
                                                                        }
                                                                        src="/images/Collection-icon.svg"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <SubTitleText16>
                                                                Collection
                                                            </SubTitleText16>
                                                            <div className="svg-check-block">
                                                                <svg
                                                                    width="14"
                                                                    height="11"
                                                                    viewBox="0 0 14 11"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M4.95825 10.5L0.208252 5.74996L1.39575 4.56246L4.95825 8.12496L12.6041 0.479126L13.7916 1.66663L4.95825 10.5Z"
                                                                        fill="#FB4EF1"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </label>
                                                    </div> */}

                          {/* <div className="TX-radio-block-inner">
											<Input
												type="radio"
												id="test4"
												name="radio-group"
												checked
											></Input>
											<label for="test4">
												<div>
													<i className="TX-iconbox-wrapper">
														<Image
															isContainImg={true}
															src="/images/Hypercubes-icon.svg"
														/>
													</i>
												</div>
												<SubTitleText16>
													Hypercubes
												</SubTitleText16>
											</label>
										</div> */}
                        </div>
                      </div>
                      <div className='tab-block-create'>
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                          <TabList>
                            <Tab>
                              <div className='tabs-block-link'>
                                <h4>Upload an item</h4>
                              </div>
                            </Tab>
                            <Tab>
                              <div className='tabs-block-link'>
                                <div className='tabs-block-link-inner'>
                                  <h4>Generate With AI</h4>
                                  <div className='tera-block-gr'>
                                    <svg
                                      width='11'
                                      height='11'
                                      viewBox='0 0 11 11'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <rect
                                        x='5.65674'
                                        y='1.25748'
                                        width='6'
                                        height='6'
                                        rx='1'
                                        transform='rotate(45 5.65674 1.25748)'
                                        stroke='white'
                                        stroke-width='2'
                                      />
                                    </svg>
                                    <span>Tera</span>
                                  </div>
                                </div>
                              </div>
                            </Tab>
                          </TabList>
                          <TabPanel>
                            <div className='TXtype-details-wrapper'>
                              {/* <MainSubTitleText>Upload An Item</MainSubTitleText> */}
                              <UploadFillDivWrapper className='dark-mode-upload'>
                                <input
                                  className='file-input'
                                  type='file'
                                  name='mainFile'
                                  // accept='.jpg, .png, .gif'
                                  onChange={handleFileChange}
                                />
                                <div className='uploadfiletext'>
                                  <i>
                                    {formik.values.asset_type !== 'audio' && (mainFilePreview || thumbnail) ? (
                                      <MediaRenderer src={thumbnail || mainFilePreview} />
                                    ) : (
                                      <svg
                                        width='34'
                                        height='35'
                                        viewBox='0 0 34 35'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                          d='M14.9166 25.8334V8.85421L9.49992 14.2709L6.58326 11.25L16.9999 0.833374L27.4166 11.25L24.4999 14.2709L19.0833 8.85421V25.8334H14.9166ZM4.49992 34.1667C3.35409 34.1667 2.37284 33.7584 1.55617 32.9417C0.739505 32.125 0.331867 31.1445 0.333255 30V23.75H4.49992V30H29.4999V23.75H33.6666V30C33.6666 31.1459 33.2583 32.1271 32.4416 32.9438C31.6249 33.7605 30.6444 34.1681 29.4999 34.1667H4.49992Z'
                                          fill='black'
                                        />
                                      </svg>
                                    )}
                                  </i>
                                  <div className='uploadfile-detail'>
                                    <SubTitleText16>Drag your item to upload</SubTitleText16>
                                    <span>JPG, PNG, Or GIF. Maximum file size 100 Mb.</span>
                                  </div>
                                </div>
                              </UploadFillDivWrapper>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                              <FormGroup>
                                <Label>
                                  <div className='tooltip-text-label'>
                                    <span>Prompt</span>
                                    <svg
                                      width='20'
                                      height='21'
                                      viewBox='0 0 20 21'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M6.10416 16.2693L7.13749 11.8418L3.70166 8.86511L8.22749 8.47344L9.99999 4.29761L11.7725 8.47261L16.2975 8.86427L12.8617 11.8409L13.8958 16.2684L9.99999 13.9184L6.10416 16.2693Z'
                                        fill='url(#paint0_linear_6092_15106)'
                                      />
                                      <defs>
                                        <linearGradient
                                          id='paint0_linear_6092_15106'
                                          x1='1.30591'
                                          y1='10.2834'
                                          x2='18.9833'
                                          y2='10.3637'
                                          gradientUnits='userSpaceOnUse'>
                                          <stop stop-color='#2BD7EF' />
                                          <stop offset='1' stop-color='#FB4EF1' />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                    <a id='prompt-tooltip'>
                                      <svg
                                        width='20'
                                        height='21'
                                        viewBox='0 0 20 21'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                          d='M9.16666 14.6667H10.8333V9.66675H9.16666V14.6667ZM9.99999 8.00008C10.2361 8.00008 10.4342 7.92008 10.5942 7.76008C10.7542 7.60008 10.8339 7.4023 10.8333 7.16675C10.8328 6.93119 10.7528 6.73342 10.5933 6.57341C10.4339 6.41341 10.2361 6.33342 9.99999 6.33342C9.76388 6.33342 9.5661 6.41341 9.40666 6.57341C9.24721 6.73342 9.16721 6.93119 9.16666 7.16675C9.1661 7.4023 9.2461 7.60036 9.40666 7.76092C9.56721 7.92147 9.76499 8.00119 9.99999 8.00008ZM9.99999 18.8334C8.84721 18.8334 7.76388 18.6145 6.74999 18.1767C5.7361 17.739 4.85416 17.1454 4.10416 16.3959C3.35416 15.6465 2.76055 14.7645 2.32332 13.7501C1.8861 12.7356 1.66721 11.6523 1.66666 10.5001C1.6661 9.34786 1.88499 8.26453 2.32332 7.25008C2.76166 6.23564 3.35527 5.35369 4.10416 4.60425C4.85305 3.8548 5.73499 3.26119 6.74999 2.82341C7.76499 2.38564 8.84832 2.16675 9.99999 2.16675C11.1517 2.16675 12.235 2.38564 13.25 2.82341C14.265 3.26119 15.1469 3.8548 15.8958 4.60425C16.6447 5.35369 17.2386 6.23564 17.6775 7.25008C18.1164 8.26453 18.335 9.34786 18.3333 10.5001C18.3317 11.6523 18.1128 12.7356 17.6767 13.7501C17.2405 14.7645 16.6469 15.6465 15.8958 16.3959C15.1447 17.1454 14.2628 17.7392 13.25 18.1776C12.2372 18.6159 11.1539 18.8345 9.99999 18.8334ZM9.99999 17.1667C11.8611 17.1667 13.4375 16.5209 14.7292 15.2292C16.0208 13.9376 16.6667 12.3612 16.6667 10.5001C16.6667 8.63897 16.0208 7.06258 14.7292 5.77091C13.4375 4.47925 11.8611 3.83341 9.99999 3.83341C8.13888 3.83341 6.56249 4.47925 5.27082 5.77091C3.97916 7.06258 3.33332 8.63897 3.33332 10.5001C3.33332 12.3612 3.97916 13.9376 5.27082 15.2292C6.56249 16.5209 8.13888 17.1667 9.99999 17.1667Z'
                                          fill='#191820'
                                        />
                                      </svg>
                                    </a>
                                    <Tooltip
                                      anchorSelect="#prompt-tooltip"
                                      content="The prompt to use for generating the image. Be as descriptive as possible for best results."
                                    />
                                  </div>
                                </Label>
                                <Input
                                  type='text'
                                  name='prompt'
                                  value={prompt}
                                  onChange={(e) => setPrompt(e.target.value)}
                                  placeholder='A rainbow unicorn'
                                />
                              </FormGroup>
                            </div>
                            {/* <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                              <FormGroup>
                                <Label>
                                  <div className='tooltip-text-label'>
                                    <span>Negative Prompt</span>
                                    <a id="negetivprompt-tooltip">
                                      <svg
                                        width='20'
                                        height='21'
                                        viewBox='0 0 20 21'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                          d='M9.16666 14.6667H10.8333V9.66675H9.16666V14.6667ZM9.99999 8.00008C10.2361 8.00008 10.4342 7.92008 10.5942 7.76008C10.7542 7.60008 10.8339 7.4023 10.8333 7.16675C10.8328 6.93119 10.7528 6.73342 10.5933 6.57341C10.4339 6.41341 10.2361 6.33342 9.99999 6.33342C9.76388 6.33342 9.5661 6.41341 9.40666 6.57341C9.24721 6.73342 9.16721 6.93119 9.16666 7.16675C9.1661 7.4023 9.2461 7.60036 9.40666 7.76092C9.56721 7.92147 9.76499 8.00119 9.99999 8.00008ZM9.99999 18.8334C8.84721 18.8334 7.76388 18.6145 6.74999 18.1767C5.7361 17.739 4.85416 17.1454 4.10416 16.3959C3.35416 15.6465 2.76055 14.7645 2.32332 13.7501C1.8861 12.7356 1.66721 11.6523 1.66666 10.5001C1.6661 9.34786 1.88499 8.26453 2.32332 7.25008C2.76166 6.23564 3.35527 5.35369 4.10416 4.60425C4.85305 3.8548 5.73499 3.26119 6.74999 2.82341C7.76499 2.38564 8.84832 2.16675 9.99999 2.16675C11.1517 2.16675 12.235 2.38564 13.25 2.82341C14.265 3.26119 15.1469 3.8548 15.8958 4.60425C16.6447 5.35369 17.2386 6.23564 17.6775 7.25008C18.1164 8.26453 18.335 9.34786 18.3333 10.5001C18.3317 11.6523 18.1128 12.7356 17.6767 13.7501C17.2405 14.7645 16.6469 15.6465 15.8958 16.3959C15.1447 17.1454 14.2628 17.7392 13.25 18.1776C12.2372 18.6159 11.1539 18.8345 9.99999 18.8334ZM9.99999 17.1667C11.8611 17.1667 13.4375 16.5209 14.7292 15.2292C16.0208 13.9376 16.6667 12.3612 16.6667 10.5001C16.6667 8.63897 16.0208 7.06258 14.7292 5.77091C13.4375 4.47925 11.8611 3.83341 9.99999 3.83341C8.13888 3.83341 6.56249 4.47925 5.27082 5.77091C3.97916 7.06258 3.33332 8.63897 3.33332 10.5001C3.33332 12.3612 3.97916 13.9376 5.27082 15.2292C6.56249 16.5209 8.13888 17.1667 9.99999 17.1667Z'
                                          fill='#191820'
                                        />
                                      </svg>
                                    </a>
                                    <Tooltip
                                    style={{
                                      zIndex:99999
                                    }}
                                      anchorSelect="#negetivprompt-tooltip"
                                      content="The negative prompt to use. Use it to address details that you don't wantin the image. This could be colors, objects, scenery and even the small details
(e.g. moustache, blurry, low resolution)."
                                    />
                                  </div>
                                </Label>
                                <Input
                                  type='text'
                                  name='negativePrompt'
                                  value={negativePrompt}
                                  onChange={(e) => setNegativePrompt(e.target.value)}
                                  placeholder=''
                                />
                              </FormGroup>
                            </div> */}
                            <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                              <FormGroup>
                                <Label>Image Size</Label>
                                <Select
                                  name='imageSize'
                                  defaultValue={FAL_IMAGES_DIMENTIONS[0]}
                                  options={FAL_IMAGES_DIMENTIONS}
                                  className='TX-select2-wrapper'
                                  classNamePrefix='TX-fix-select'
                                  onChange={(e) => {
                                    setImageSize(e?.value);
                                  }}
                                />
                                {formik.touched.currency && formik.errors.currency ? (
                                  <div className='text-danger'>{formik.errors.currency}</div>
                                ) : null}
                              </FormGroup>
                            </div>
                            {imageSize === 'custom' && (
                              <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                                <Label>Image Size</Label>
                                <div className='TXtype-details-wrapper-two'>
                                  <FormGroup className='form-group'>
                                    <div className='width-height-block-custom'>
                                      <svg
                                        width='18'
                                        height='17'
                                        viewBox='0 0 18 17'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                          d='M8.16669 12.6667H9.83335V7.66675H8.16669V12.6667ZM9.00002 6.00008C9.23613 6.00008 9.43419 5.92008 9.59419 5.76008C9.75419 5.60008 9.83391 5.4023 9.83335 5.16675C9.8328 4.93119 9.7528 4.73342 9.59335 4.57341C9.43391 4.41341 9.23613 4.33342 9.00002 4.33342C8.76391 4.33342 8.56613 4.41341 8.40669 4.57341C8.24724 4.73342 8.16724 4.93119 8.16669 5.16675C8.16613 5.4023 8.24613 5.60036 8.40669 5.76092C8.56724 5.92147 8.76502 6.00119 9.00002 6.00008ZM9.00002 16.8334C7.84724 16.8334 6.76391 16.6145 5.75002 16.1767C4.73613 15.739 3.85419 15.1454 3.10419 14.3959C2.35419 13.6465 1.76058 12.7645 1.32335 11.7501C0.886133 10.7356 0.667244 9.6523 0.666688 8.50008C0.666133 7.34786 0.885021 6.26453 1.32335 5.25008C1.76169 4.23564 2.3553 3.35369 3.10419 2.60425C3.85308 1.8548 4.73502 1.26119 5.75002 0.823415C6.76502 0.385637 7.84835 0.166748 9.00002 0.166748C10.1517 0.166748 11.235 0.385637 12.25 0.823415C13.265 1.26119 14.147 1.8548 14.8959 2.60425C15.6447 3.35369 16.2386 4.23564 16.6775 5.25008C17.1164 6.26453 17.335 7.34786 17.3334 8.50008C17.3317 9.6523 17.1128 10.7356 16.6767 11.7501C16.2406 12.7645 15.647 13.6465 14.8959 14.3959C14.1447 15.1454 13.2628 15.7392 12.25 16.1776C11.2372 16.6159 10.1539 16.8345 9.00002 16.8334ZM9.00002 15.1667C10.8611 15.1667 12.4375 14.5209 13.7292 13.2292C15.0209 11.9376 15.6667 10.3612 15.6667 8.50008C15.6667 6.63897 15.0209 5.06258 13.7292 3.77091C12.4375 2.47925 10.8611 1.83341 9.00002 1.83341C7.13891 1.83341 5.56252 2.47925 4.27085 3.77091C2.97919 5.06258 2.33335 6.63897 2.33335 8.50008C2.33335 10.3612 2.97919 11.9376 4.27085 13.2292C5.56252 14.5209 7.13891 15.1667 9.00002 15.1667Z'
                                          fill='#B9B8BB'
                                        />
                                      </svg>
                                      <span>Width:</span>
                                    </div>
                                    <Input
                                      type='number'
                                      name='width'
                                      value={width}
                                      onChange={(e) => setWidth(e.target.value)}
                                      placeholder='1024'
                                    />
                                  </FormGroup>
                                  <div className='middle-block-tx'>
                                    <span>X</span>
                                  </div>
                                  <FormGroup className='form-group'>
                                    <div className='width-height-block-custom'>
                                      <svg
                                        width='18'
                                        height='17'
                                        viewBox='0 0 18 17'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                          d='M8.16669 12.6667H9.83335V7.66675H8.16669V12.6667ZM9.00002 6.00008C9.23613 6.00008 9.43419 5.92008 9.59419 5.76008C9.75419 5.60008 9.83391 5.4023 9.83335 5.16675C9.8328 4.93119 9.7528 4.73342 9.59335 4.57341C9.43391 4.41341 9.23613 4.33342 9.00002 4.33342C8.76391 4.33342 8.56613 4.41341 8.40669 4.57341C8.24724 4.73342 8.16724 4.93119 8.16669 5.16675C8.16613 5.4023 8.24613 5.60036 8.40669 5.76092C8.56724 5.92147 8.76502 6.00119 9.00002 6.00008ZM9.00002 16.8334C7.84724 16.8334 6.76391 16.6145 5.75002 16.1767C4.73613 15.739 3.85419 15.1454 3.10419 14.3959C2.35419 13.6465 1.76058 12.7645 1.32335 11.7501C0.886133 10.7356 0.667244 9.6523 0.666688 8.50008C0.666133 7.34786 0.885021 6.26453 1.32335 5.25008C1.76169 4.23564 2.3553 3.35369 3.10419 2.60425C3.85308 1.8548 4.73502 1.26119 5.75002 0.823415C6.76502 0.385637 7.84835 0.166748 9.00002 0.166748C10.1517 0.166748 11.235 0.385637 12.25 0.823415C13.265 1.26119 14.147 1.8548 14.8959 2.60425C15.6447 3.35369 16.2386 4.23564 16.6775 5.25008C17.1164 6.26453 17.335 7.34786 17.3334 8.50008C17.3317 9.6523 17.1128 10.7356 16.6767 11.7501C16.2406 12.7645 15.647 13.6465 14.8959 14.3959C14.1447 15.1454 13.2628 15.7392 12.25 16.1776C11.2372 16.6159 10.1539 16.8345 9.00002 16.8334ZM9.00002 15.1667C10.8611 15.1667 12.4375 14.5209 13.7292 13.2292C15.0209 11.9376 15.6667 10.3612 15.6667 8.50008C15.6667 6.63897 15.0209 5.06258 13.7292 3.77091C12.4375 2.47925 10.8611 1.83341 9.00002 1.83341C7.13891 1.83341 5.56252 2.47925 4.27085 3.77091C2.97919 5.06258 2.33335 6.63897 2.33335 8.50008C2.33335 10.3612 2.97919 11.9376 4.27085 13.2292C5.56252 14.5209 7.13891 15.1667 9.00002 15.1667Z'
                                          fill='#B9B8BB'
                                        />
                                      </svg>
                                      <span>Height:</span>
                                    </div>
                                    <Input
                                      type='number'
                                      name='height'
                                      value={height}
                                      onChange={(e) => setHeight(e.target.value)}
                                      placeholder='1024'
                                    />
                                  </FormGroup>
                                </div>
                              </div>
                            )}
                            {/* {imageSize === 'custom' && (
                              <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                                <Row>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label>Image width</Label>
                                      <Input
                                        type='number'
                                        name='width'
                                        value={width}
                                        onChange={(e) => setWidth(e.target.value)}
                                        placeholder='512'
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col md={6}>
                                    <FormGroup>
                                      <Label>Image Height</Label>
                                      <Input
                                        type='number'
                                        name='height'
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder='512'
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </div>
                            )} */}
                            <div className='TXtype-btn-custom'>
                              <Button type="button" disabled={imgLoading || contractLoading} onClick={genrateImage}> {imgLoading ? <Spinner animation="border" size="sm" /> : 'Generate'}</Button>
                            </div>
                          </TabPanel>
                        </Tabs>
                      </div>
                      {/* <div className='TXtype-details-wrapper'>
                        <MainSubTitleText>Upload An Item</MainSubTitleText>
                        <UploadFillDivWrapper className='dark-mode-upload'>
                          <input
                            className='file-input'
                            type='file'
                            name='mainFile'
                            onChange={handleFileChange}
                          />
                          <div className='uploadfiletext'>
                            <i>
                              {formik.values.asset_type !== 'audio' && (mainFilePreview || thumbnail) ? (
                                <MediaRenderer src={thumbnail || mainFilePreview} />
                              ) : (
                                <svg
                                  width='34'
                                  height='35'
                                  viewBox='0 0 34 35'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M14.9166 25.8334V8.85421L9.49992 14.2709L6.58326 11.25L16.9999 0.833374L27.4166 11.25L24.4999 14.2709L19.0833 8.85421V25.8334H14.9166ZM4.49992 34.1667C3.35409 34.1667 2.37284 33.7584 1.55617 32.9417C0.739505 32.125 0.331867 31.1445 0.333255 30V23.75H4.49992V30H29.4999V23.75H33.6666V30C33.6666 31.1459 33.2583 32.1271 32.4416 32.9438C31.6249 33.7605 30.6444 34.1681 29.4999 34.1667H4.49992Z'
                                    fill='black'
                                  />
                                </svg>
                              )}
                            </i>
                            <div className='uploadfile-detail'>
                              <SubTitleText16>Drag your item to upload</SubTitleText16>
                              <span>JPG, PNG, Or GIF. Maximum file size 100 Mb.</span>
                            </div>
                          </div>
                        </UploadFillDivWrapper>
                      </div> */}
                      {formik.values.asset_type === 'audio' && (
                        <div className='TXtype-details-wrapper'>
                          <MainSubTitleText>Upload Thumbnail</MainSubTitleText>
                          <UploadFillDivWrapper className='dark-mode-upload'>
                            <input
                              className='file-input'
                              type='file'
                              name='thumbnail'
                              accept='.jpg, .png'
                              onChange={handleFileChange}
                            />
                            <div className='uploadfiletext'>
                              <i>
                                {mainFilePreview || thumbnail ? (
                                  <MediaRenderer src={thumbnail || mainFilePreview} />
                                ) : (
                                  <svg
                                    width='34'
                                    height='35'
                                    viewBox='0 0 34 35'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M14.9166 25.8334V8.85421L9.49992 14.2709L6.58326 11.25L16.9999 0.833374L27.4166 11.25L24.4999 14.2709L19.0833 8.85421V25.8334H14.9166ZM4.49992 34.1667C3.35409 34.1667 2.37284 33.7584 1.55617 32.9417C0.739505 32.125 0.331867 31.1445 0.333255 30V23.75H4.49992V30H29.4999V23.75H33.6666V30C33.6666 31.1459 33.2583 32.1271 32.4416 32.9438C31.6249 33.7605 30.6444 34.1681 29.4999 34.1667H4.49992Z'
                                      fill='black'
                                    />
                                  </svg>
                                )}
                              </i>
                              <div className='uploadfile-detail'>
                                <SubTitleText16>Drag your Thumbnail or create with ai prompt</SubTitleText16>
                                <span>JPG, PNG.</span>
                              </div>
                            </div>
                          </UploadFillDivWrapper>
                        </div>
                      )}

                      <div className='TXtype-details-wrapper TXtype-details-wrapper-input'>
                        <Row>
                          <Col md={formik.values.type === TYPE.MULTI ? 6 : 12}>
                            <FormGroup>
                              <Label>Name</Label>
                              <Input
                                type='type'
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder=''
                              />
                            </FormGroup>
                          </Col>
                          {formik.values.type === TYPE.MULTI && (
                            <Col md={6}>
                              <FormGroup>
                                <Label>Supply</Label>
                                <Input
                                  type='type'
                                  placeholder='E.g. 3'
                                  name='supply'
                                  value={formik.values.supply}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                              </FormGroup>
                            </Col>
                          )}
                          <Col md={12}>
                            <FormGroup>
                              <Label>Description</Label>
                              <Input
                                as='textarea'
                                placeholder=''
                                rows={4}
                                name='description'
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </FormGroup>
                          </Col>

                          {formik.values.attributesData.map((attribute, index) => (
                            <div className='TX-set-add-block' key={index}>
                              <Row className='TX-set-add-block-inner'>
                                <Col md={6} className='block-call-plus'>
                                  <FormGroup>
                                    <Label>Attribute</Label>
                                    <Input
                                      placeholder='E.g. Color'
                                      name='trait_type[]'
                                      onChange={(e) => handleChangeDynamicField(index, e.target.value, 'trait_type')}
                                      value={attribute.trait_type}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col md={6} className='block-call-plus'>
                                  <FormGroup>
                                    <Label>Value</Label>
                                    <Input
                                      placeholder='E.g. Red'
                                      name='value[]'
                                      onChange={(e) => handleChangeDynamicField(index, e.target.value, 'value')}
                                      value={attribute.value}
                                    />
                                  </FormGroup>
                                </Col>
                                {index === 0 ? (
                                  <div className='block-call-plus-add'>
                                    <span onClick={handleAddFields}>
                                      <i>
                                        <Image src='/images/plus-icon.svg' />
                                      </i>
                                    </span>
                                  </div>
                                ) : (
                                  <div className='block-call-plus-add'>
                                    <span onClick={() => handleRemoveDynamicFields(index)}>
                                      <i>
                                        <Image src='/images/minus-icon.svg' />
                                      </i>
                                    </span>
                                  </div>
                                )}
                              </Row>
                            </div>
                          ))}
                        </Row>
                      </div>
                      <div className='TXtype-details-wrapper'>
                        <MainSubTitleText>Choose Collection</MainSubTitleText>
                        <Row>
                          <Col md={6}>
                            <div className='choose-collection-box-wrapper'>
                              <div onClick={handleShow}>
                                <i>
                                  <Image
                                    isContainImg={true}
                                    src={selectedCollection?.image || '/images/add-icon.svg'}
                                  />
                                </i>
                              </div>

                              <div className='choose-collection-detail'>
                                <h6>{selectedCollection?.name || 'Select Collection'}</h6>
                                <p>{selectedCollection?.category || 'Type To Create'}</p>
                              </div>
                            </div>
                          </Col>
                          <CretePriceModal
                            show={show}
                            onHide={handleClose}
                            aria-labelledby='contained-modal-title-vcenter'
                            backdrop='static'>
                            <Modal.Header closeButton>
                              <Modal.Title>Select A Collection</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className='search-block-category'>
                                <Form>
                                  <button>
                                    <svg
                                      width='25'
                                      height='24'
                                      viewBox='0 0 25 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
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
                                  <input
                                    type='text'
                                    placeholder='Search Name'
                                    value={collectionSearch}
                                    onChange={handleSearch}></input>
                                </Form>
                              </div>
                              <div className='radio-block-main'>
                                <InfiniteScroll
                                  dataLength={collections.length} //This is important field to render the next data
                                  next={handlePageChange}
                                  hasMore={hasMore}
                                  loader={<h4>Loading...</h4>}
                                  endMessage={
                                    <p
                                      style={{
                                        textAlign: 'center'
                                      }}>
                                      {/* <b>
                                                                            Yay!
                                                                            You
                                                                            have
                                                                            seen
                                                                            it
                                                                            all
                                                                        </b> */}
                                    </p>
                                  }
                                  pullDownToRefreshThreshold={50}
                                  pullDownToRefreshContent={
                                    <h3
                                      style={{
                                        textAlign: 'center'
                                      }}>
                                      &#8595; Pull down to refresh
                                    </h3>
                                  }
                                  releaseToRefreshContent={
                                    <h3
                                      style={{
                                        textAlign: 'center'
                                      }}>
                                      &#8593; Release to refresh
                                    </h3>
                                  }>
                                  {collections.map((collection, index) => (
                                    <div className='radio-block-group' key={index}>
                                      <Input
                                        type='radio'
                                        id={`collection${index}`}
                                        checked={formik.values.collectionAddress === collection?.address}
                                        value={collection?.address}
                                        onChange={() => changeCollection(collection)}
                                      />
                                      <label for={`collection${index}`}>
                                        <div className='nft-token-block'>
                                          <img
                                            src={collection?.image || '../../images/Ethereum.svg'}
                                            alt='Ethereum'></img>
                                          <div className='nft-token-block-detail'>
                                            <h4>{collection?.name}</h4>
                                            <p>{collection?.category}</p>
                                          </div>
                                        </div>
                                        <img
                                          src='../../images/check-icon.svg'
                                          alt='check'
                                          className='check-icon-block'></img>
                                      </label>
                                    </div>
                                  ))}
                                </InfiniteScroll>
                              </div>
                            </Modal.Body>
                            {/* <Modal.Footer>
													<Button variant="secondary" onClick={handleClose}>
														Close
													</Button>
													<Button variant="primary" onClick={handleClose}>
														Save Changes
													</Button>
													</Modal.Footer> */}
                          </CretePriceModal>
                          <Col md={6}>
                            <div className='choose-collection-box-wrapper'>
                              <div>
                                <i className='full-img'>
                                  <Image src='/images/BattleforDigital.png' />
                                </i>
                              </div>
                              <div className='choose-collection-detail'>
                                <h6>Create New Collection</h6>
                                <Link href={PATH_DASHBOARD.create.collection}>Click To Create</Link>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className='TXtype-details-wrapper TXtype-details-wrapper-button'>
                        <div className='TXbutton-wrapper'>
                          <Button type='submit' disabled={contractLoading}>
                            {contractLoading ? <Spinner animation='border' size='sm' /> : 'Publish'}
                          </Button>
                          <Button onClick={discardAll} isBorderBtn={true} className='border-dark-button'>
                            Discard All
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <ItemPreviewSectionWrapper className='item-box-shadow'>
                      <TXProductBoxWrapper className='item-box-shadow-inner'>
                        <div className='top-block-product'>
                          <h4>{formik.values.name || 'NFT Name'}</h4>
                          <div className='like-block'>
                            <svg
                              width='26'
                              height='24'
                              viewBox='0 0 26 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M13 23.6875L11.1875 22.0375C4.75 16.2 0.5 12.3375 0.5 7.625C0.5 3.7625 3.525 0.75 7.375 0.75C9.55 0.75 11.6375 1.7625 13 3.35C14.3625 1.7625 16.45 0.75 18.625 0.75C22.475 0.75 25.5 3.7625 25.5 7.625C25.5 12.3375 21.25 16.2 14.8125 22.0375L13 23.6875Z'
                                fill='#B5C8CB'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='product-profile'>
                          <Image src={selectedCollection?.image || '/images/BattleforDigital.png'} />
                          <div className='product-profile-details'>
                            <h5>{selectedCollection?.name || 'Collection Name'}</h5>
                            <p>Collection</p>
                          </div>
                        </div>
                        <div className='TX-ItemPreviewImg'>
                          <div className='TX-PreviewImgBox'>
                            {(mainFilePreview || thumbnail) && <Image src={thumbnail || mainFilePreview} />}
                          </div>
                        </div>
                      </TXProductBoxWrapper>
                    </ItemPreviewSectionWrapper>
                  </Col>
                </Row>
              </form>
            </Container>
          </CreateNFTSectionWrapper>
        </TesseractLayoutWrapper>
      </ConnectionGuard>
    </>
  );
};

export default CreateItem;
