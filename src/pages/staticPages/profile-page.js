import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
    TesseractLayoutWrapper,
    MainTitleText,
    MainSubTitleText,
    SubTitleText16,
    Image,
    UploadFillDivWrapper,
    FormGroup,
    Label,
    Input,
    Button,
} from "@/styles/pages/main.style";
import {
    CreateNFTSectionWrapper,
    ItemPreviewSectionWrapper,
    TXProductBoxWrapper,
    CretePriceModal,
} from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import ProgressModal from "@/components/Common/create/ProgressModal";
const profilepage = () => {
    const options = [
        { value: "chocolate", label: "Art" },
        { value: "strawberry", label: "Body type" },
        { value: "vanilla", label: "Face color" },
    ];
    const [show, setShow] = useState(false);
    const [progressBar, setProgressBar] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleProgressBar = () => {
        setProgressBar(!progressBar);
    };

    return (
      <TesseractLayoutWrapper>
        <CreateNFTSectionWrapper>
          <Container>
            <div className='TX-title-header-bar pointer' onClick={handleProgressBar}>
              <MainTitleText>Create NFT</MainTitleText>
            </div>
            <ProgressModal show={progressBar} handleClose={handleProgressBar} />

            <Row>
              <Col lg={9}>
                <div className='TX-choose-blockchain-wrapper'>
                  <div className='TXtype-details-wrapper'>
                    <MainSubTitleText>Choose blockchain</MainSubTitleText>
                    <ul className='blockchain-icons'>
                      <li>
                        <i>
                          <Image isContainImg={true} src='/images/Ethereum.svg' />
                        </i>
                        <SubTitleText16>Ethereum (ETH)</SubTitleText16>
                      </li>
                      <li>
                        <i>
                          <Image isContainImg={true} src='/images/PulseChain.png' />
                        </i>
                        <SubTitleText16>PulseChain (PLS)</SubTitleText16>
                      </li>
                    </ul>
                  </div>
                  <div className='TXtype-details-wrapper'>
                    <MainSubTitleText>Select item type</MainSubTitleText>
                    {/* <Row>
										<Col md={6}>
											<Link href="" className="linkbox-wrapper active">
												<div><i className="TX-iconbox-wrapper"><Image isContainImg={true} src="/images/single-icon.svg" /></i></div>
												<SubTitleText16>Single</SubTitleText16>
											</Link> 
										</Col>
										<Col md={6}>
											<Link href="" className="linkbox-wrapper">
												<div><i className="TX-iconbox-wrapper"><Image isContainImg={true} src="/images/multiple-icon.svg" /></i></div>
												<SubTitleText16>Multiple</SubTitleText16>
											</Link>  
										</Col>
										<Col md={6}>
											<Link href="" className="linkbox-wrapper">
												<div><i className="TX-iconbox-wrapper"><Image isContainImg={true} src="/images/Collection-icon.svg" /></i></div>
												<SubTitleText16>Collection</SubTitleText16>
											</Link>  
										</Col>
										<Col md={6}>
											<Link href="" className="linkbox-wrapper">
												<div><i className="TX-iconbox-wrapper"><Image isContainImg={true} src="/images/Hypercubes-icon.svg" /></i></div>
												<SubTitleText16>Hypercubes</SubTitleText16>
											</Link>  
										</Col>
									</Row> */}
                    <div className='TX-radio-block'>
                      <div className='TX-radio-block-inner'>
                        <Input type='radio' id='test1' name='radio-group' checked></Input>
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
                        <Input type='radio' id='test2' name='radio-group' checked></Input>
                        <label for='test2'>
                          <div>
                            <i className='TX-iconbox-wrapper'>
                              <Image isContainImg={true} src='/images/multiple-icon.svg' />
                            </i>
                          </div>
                          <SubTitleText16>Multiple</SubTitleText16>
                        </label>
                      </div>
                      <div className='TX-radio-block-inner'>
                        <Input type='radio' id='test3' name='radio-group' checked></Input>
                        <label for='test3'>
                          <div>
                            <i className='TX-iconbox-wrapper'>
                              <Image isContainImg={true} src='/images/Collection-icon.svg' />
                            </i>
                          </div>
                          <SubTitleText16>Collection</SubTitleText16>
                        </label>
                      </div>
                      <div className='TX-radio-block-inner'>
                        <Input type='radio' id='test4' name='radio-group' checked></Input>
                        <label for='test4'>
                          <div>
                            <i className='TX-iconbox-wrapper'>
                              <Image isContainImg={true} src='/images/Hypercubes-icon.svg' />
                            </i>
                          </div>
                          <SubTitleText16>Hypercubes</SubTitleText16>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='TXtype-details-wrapper'>
                    <MainSubTitleText>Upload an item</MainSubTitleText>
                    <UploadFillDivWrapper>
                      <input className='file-input' type='file' />
                      <div className='uploadfiletext'>
                        <i>
                          <Image isContainImg={true} src='/images/upload-icon.svg' />
                        </i>
                        <div className='uploadfile-detail'>
                          <SubTitleText16>Drag your item to upload</SubTitleText16>
                          <span>PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.</span>
                        </div>
                      </div>
                    </UploadFillDivWrapper>
                  </div>
                  <div className='TXtype-details-wrapper'>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Name your item</Label>
                          <Input type='type' placeholder='e.g. Redeemable  T-Shirt with Logo' />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Supply (Number of Copies)</Label>
                          <Input type='type' placeholder='e.g.  Supply Number' />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Label>Enter short description</Label>
                          <Input as='textarea' placeholder='e.g. After purchase you will get a  T-Shirt' rows={4} />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup>
                          <Label>Add properties</Label>
                          {/* <Select
													isMulti
													name="colors"
													options={options}
													className="TX-select2-wrapper"
													classNamePrefix="TX-fix-select"
												/> */}
                          <Input type='type' placeholder='Add properties' />
                        </FormGroup>
                      </Col>
                      <div className='TX-set-add-block'>
                        <Row className='TX-set-add-block-inner'>
                          <Col md={6} className='block-call-plus'>
                            <FormGroup>
                              <Label>Set item price or starting bid</Label>
                              <Input type='type' placeholder='e.g. 0,01 Eth' />
                            </FormGroup>
                          </Col>
                          <Col md={6} className='block-call-plus'>
                            <FormGroup>
                              <Label>Select royalties amount, %</Label>
                              <Select
                                name='colors'
                                options={options}
                                className='TX-select2-wrapper'
                                classNamePrefix='TX-fix-select'
                              />
                            </FormGroup>
                          </Col>
                          <div className='block-call-plus-add'>
                            <Link href=''>
                              <i>
                                <Image src='/images/plus-icon.svg' />
                              </i>
                            </Link>
                          </div>
                        </Row>
                      </div>
                    </Row>
                  </div>
                  <div className='TXtype-details-wrapper'>
                    <MainSubTitleText>Choose collection</MainSubTitleText>
                    <Row>
                      <Col md={6}>
                        <div className='choose-collection-box-wrapper'>
                          <div onClick={handleShow}>
                            <i>
                              <Image isContainImg={true} src='/images/add-icon.svg' />
                            </i>
                          </div>
                          <CretePriceModal
                            show={show}
                            onHide={handleClose}
                            aria-labelledby='contained-modal-title-vcenter'>
                            <Modal.Header closeButton>
                              <Modal.Title>Select a token</Modal.Title>
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
                                  <input type='text' placeholder='Search Name'></input>
                                </Form>
                              </div>
                              <div className='radio-block-main'>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test11' name='radio-group1' checked></Input>
                                  <label for='test11'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test12' name='radio-group1' checked></Input>
                                  <label for='test12'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test13' name='radio-group1' checked></Input>
                                  <label for='test13'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test11' name='radio-group1' checked></Input>
                                  <label for='test11'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test12' name='radio-group1' checked></Input>
                                  <label for='test12'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test13' name='radio-group1' checked></Input>
                                  <label for='test13'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test11' name='radio-group1' checked></Input>
                                  <label for='test11'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test12' name='radio-group1' checked></Input>
                                  <label for='test12'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test13' name='radio-group1' checked></Input>
                                  <label for='test13'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test11' name='radio-group1' checked></Input>
                                  <label for='test11'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test12' name='radio-group1' checked></Input>
                                  <label for='test12'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
                                <div className='radio-block-group'>
                                  <Input type='radio' id='test13' name='radio-group1' checked></Input>
                                  <label for='test13'>
                                    <div className='nft-token-block'>
                                      <img src='../../images/Ethereum.svg' alt='Ethereum'></img>
                                      <div className='nft-token-block-detail'>
                                        <h4>Ether</h4>
                                        <p>ETH</p>
                                      </div>
                                    </div>
                                    <img
                                      src='../../images/check-icon.svg'
                                      alt='check'
                                      className='check-icon-block'></img>
                                  </label>
                                </div>
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
                          <div className='choose-collection-detail'>
                            <h6>Create new collection</h6>
                            <p>Type to create</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className='choose-collection-box-wrapper'>
                          <div>
                            <i className='full-img'>
                              <Image src='/images/BattleforDigital.png' />
                            </i>
                          </div>
                          <div className='choose-collection-detail'>
                            <h6>Create new collection</h6>
                            <p>Type to create</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className='TXtype-details-wrapper'>
                    <div className='TXbutton-wrapper'>
                      <Button>Publish</Button>
                      <Button isBorderBtn={true}>Discard all</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <ItemPreviewSectionWrapper>
                  <div className='TX-preview-text-title'>
                    <MainTitleText isSubTitleText30={true}>Item Preview</MainTitleText>
                  </div>
                  <TXProductBoxWrapper>
                    <div className='item-name-header'>
                      <SubTitleText16>Sweet Baby #1</SubTitleText16>
                      <span>
                        <i>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 13 12'>
                            <path
                              fill='currentColor'
                              d='m1.29 6.758 3.578 3.772a2.25 2.25 0 0 0 3.264 0l3.579-3.772c1.386-1.46 1.386-3.827 0-5.288a3.421 3.421 0 0 0-5.018 0 .266.266 0 0 1-.386 0 3.421 3.421 0 0 0-5.018 0c-1.385 1.46-1.385 3.828 0 5.288Z'
                            />
                          </svg>
                        </i>
                      </span>
                    </div>
                    <div className='TX-ItemPreviewImg'>
                      <div className='TX-PreviewImgBox'>{/* <Image src="/images/BattleforDigital.png" /> */}</div>
                      <span className='tx-time-text'>13h : 28m : 36s</span>
                    </div>
                    <div className='TX-user-detailbox'>
                      <div className='TX-user-div'>
                        <div>
                          <div className='user-img'>
                            <Image src='/images/BattleforDigital.png' />
                          </div>
                        </div>
                        <div>
                          <p className='subtitle-text'>Creator</p>
                          <h5 className='title-text'>Hakunamatata</h5>
                        </div>
                      </div>
                      <div className='TX-user-div'>
                        <div className='current-bid-box'>
                          <p className='subtitle-text'>Current bid</p>
                          <h5 className='title-text'>
                            5 ETH <Image src='/images/Ethereum.svg' />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='product-footer'>
                      <Button>
                        <i>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 15 15'>
                            <path
                              fill='#fff'
                              fill-rule='evenodd'
                              d='M10.407 4.272h.135c1.77 0 3.208 1.313 3.208 2.924v3.222c0 1.611-1.437 2.919-3.208 2.919H4.458c-1.77 0-3.208-1.308-3.208-2.919V7.196c0-1.61 1.437-2.924 3.208-2.924h.135c.013-.7.315-1.354.86-1.844.552-.496 1.258-.747 2.053-.765 1.592 0 2.882 1.167 2.9 2.61Zm-4.28-1.22a1.7 1.7 0 0 0-.571 1.22h3.889c-.02-.957-.88-1.733-1.938-1.733-.494 0-1.008.18-1.38.513ZM9.938 6.52c.27 0 .482-.199.482-.438v-.677c0-.24-.212-.438-.482-.438-.263 0-.48.198-.48.438v.677c0 .24.217.438.48.438Zm-4.453-.438c0 .24-.211.438-.48.438-.264 0-.482-.199-.482-.438v-.677c0-.24.218-.438.481-.438.27 0 .481.198.481.438v.677Z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </i>
                        Place Bid
                      </Button>
                    </div>
                  </TXProductBoxWrapper>
                </ItemPreviewSectionWrapper>
              </Col>
            </Row>
          </Container>
        </CreateNFTSectionWrapper>
      </TesseractLayoutWrapper>
    );
};

export default profilepage;
