import { ConnectionGuard } from "@/components";
import PageTitle from "@/components/Common/PageTitle";
import { CHAIN_WITH_LOGO, TYPE } from "@/constant";
import { Like } from "..";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useCreateCollection } from "@/hooks/useContractCall";
import { globalState } from "@/redux/reducer/globalSlice";
import { marketState } from "@/redux/reducer/marketSlice";
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
    ItemPreviewSectionWrapper,
    TXProductBoxWrapper,
} from "@/styles/pages/profile-page";
import { Col, Container, Row, Spinner, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";

const CreateCollection = () => {
    const { chainId, switchNetwork } = useActiveWeb3React();
    const { contractLoading } = useSelector(marketState);
    const { userDetails } = useSelector(globalState);

    const {
        formik,
        categorys,
        collectionFilePrieview,
        handleFileChange,
        handleChangeCategory,
        discardAll,
    } = useCreateCollection();

    return (
        <>
            <PageTitle title={"Create-collection"} />
            <ConnectionGuard>
                <TesseractLayoutWrapper>
                    <CreateNFTSectionWrapper>
                        <CommonGraphics />
                        <Container>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="TX-title-header-bar">
                                    <MainTitleText className="text-center">
                                        Create A Collection
                                    </MainTitleText>
                                </div>
                                <Row className="row-col-revrece-mobile">
                                    <Col lg={6}>
                                        <div className="TX-choose-blockchain-wrapper TX-choose-blockchain-wrapper-diff">
                                            <div className="TXtype-details-wrapper mb-40">
                                                <MainSubTitleText>
                                                    Choose Blockchain
                                                </MainSubTitleText>
                                                {/* <ul className="blockchain-icons">
                                                    {CHAIN_WITH_LOGO.map(
                                                        (chain) => (
                                                            <>
                                                                {chain.chainId !==
                                                                    "All" && (
                                                                    <li
                                                                        className={
                                                                            chainId ===
                                                                            chain.chainId
                                                                                ? "selected"
                                                                                : ""
                                                                        }
                                                                        onClick={() => {
                                                                            chainId !==
                                                                                chain.chainId &&
                                                                                switchNetwork(
                                                                                    chain.chainId
                                                                                );
                                                                        }}
                                                                    >
                                                                        <i>
                                                                            <Image
                                                                                isContainImg={
                                                                                    true
                                                                                }
                                                                                src={
                                                                                    chain.logo
                                                                                }
                                                                            />
                                                                        </i>
                                                                        <SubTitleText16>
                                                                            {
                                                                                chain.name
                                                                            }
                                                                        </SubTitleText16>
                                                                    </li>
                                                                )}
                                                            </>
                                                        )
                                                    )}
                                                </ul> */}
                                                <div className="radio-group-main">
                                                    {CHAIN_WITH_LOGO.map(
                                                        (chain) => (
                                                            <>
                                                                {chain.chainId?.id !==
                                                                    "All" && (
                                                                        <div className="radio-group-main-inner">
                                                                            <Form.Check
                                                                                type="radio"
                                                                                checked={
                                                                                    chainId ===
                                                                                    chain.chainId?.id
                                                                                }
                                                                                name="Chain"
                                                                                onClick={() => {
                                                                                    chainId !==
                                                                                        chain.chainId.id &&
                                                                                        switchNetwork(
                                                                                            chain.chainId
                                                                                        );
                                                                                }}
                                                                            />
                                                                            <label for="radio">
                                                                                <img
                                                                                    src={
                                                                                        chain.logo
                                                                                    }
                                                                                    alt="icon"
                                                                                ></img>
                                                                                <p>
                                                                                    {
                                                                                        chain.name
                                                                                    }
                                                                                </p>
                                                                            </label>
                                                                        </div>
                                                                    )}
                                                            </>
                                                        )
                                                    )}
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
                                            </div>
                                            <div className="TXtype-details-wrapper">
                                                <MainSubTitleText>
                                                    Select Collection Type
                                                </MainSubTitleText>

                                                <div className="TX-radio-block TX-radio-block-diff">
                                                    <div className="TX-radio-block-inner">
                                                        <Input
                                                            type="radio"
                                                            id="test1"
                                                            checked={
                                                                formik.values
                                                                    .type ===
                                                                TYPE.SINGLE
                                                            }
                                                            name="type"
                                                            value={TYPE.SINGLE}
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                        />
                                                        <label for="test1">
                                                            <div>
                                                                <i className="TX-iconbox-wrapper">
                                                                    <Image
                                                                        isContainImg={
                                                                            true
                                                                        }
                                                                        src="/images/Hypercubes-icon.svg"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <SubTitleText16>
                                                                Single
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
                                                    </div>
                                                    <div className="TX-radio-block-inner">
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
                                                                        src="/images/multiple-icon.svg"
                                                                    />
                                                                </i>
                                                            </div>
                                                            <SubTitleText16>
                                                                Multiple
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
                                                    </div>
                                                    {/* <div className='TX-radio-block-inner'>
                            <Input
                              type='radio'
                              id='test2'
                              name='type'
                              checked={formik.values.type === TYPE.MULTI}
                              value={TYPE.MULTI}
                              onChange={formik.handleChange}></Input>
                            <label for='test2'>
                              <div>
                                <i className='TX-iconbox-wrapper'>
                                  <Image isContainImg={true} src='/images/Collection-icon.svg' />
                                </i>
                              </div>
                              <SubTitleText16>Collection</SubTitleText16>
                              <div className='svg-check-block'>
                                <svg
                                  width='14'
                                  height='11'
                                  viewBox='0 0 14 11'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M4.95825 10.5L0.208252 5.74996L1.39575 4.56246L4.95825 8.12496L12.6041 0.479126L13.7916 1.66663L4.95825 10.5Z'
                                    fill='#FB4EF1'
                                  />
                                </svg>
                              </div>
                            </label>
                          </div> */}
                                                </div>
                                            </div>
                                            <div className="TXtype-details-wrapper">
                                                <MainSubTitleText>
                                                    Upload A Logo
                                                </MainSubTitleText>
                                                <UploadFillDivWrapper className="dark-mode-upload">
                                                    <input
                                                        className="file-input"
                                                        type="file"
                                                        name="collectionFile"
                                                        accept=".jpg, .png, .gif"
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                    />
                                                    <div className="uploadfiletext">
                                                        <i>
                                                            {collectionFilePrieview ? (
                                                                <Image
                                                                    isContainImg={
                                                                        true
                                                                    }
                                                                    src={
                                                                        collectionFilePrieview
                                                                    }
                                                                />
                                                            ) : (
                                                                <svg
                                                                    width="34"
                                                                    height="35"
                                                                    viewBox="0 0 34 35"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M14.9166 25.8334V8.85421L9.49992 14.2709L6.58326 11.25L16.9999 0.833374L27.4166 11.25L24.4999 14.2709L19.0833 8.85421V25.8334H14.9166ZM4.49992 34.1667C3.35409 34.1667 2.37284 33.7584 1.55617 32.9417C0.739505 32.125 0.331867 31.1445 0.333255 30V23.75H4.49992V30H29.4999V23.75H33.6666V30C33.6666 31.1459 33.2583 32.1271 32.4416 32.9438C31.6249 33.7605 30.6444 34.1681 29.4999 34.1667H4.49992Z"
                                                                        fill="black"
                                                                    />
                                                                </svg>
                                                            )}
                                                        </i>
                                                        <div className="uploadfile-detail">
                                                            <SubTitleText16>
                                                                Drag Your Item
                                                                To Upload
                                                            </SubTitleText16>
                                                            <span>
                                                                JPG, PNG, Or
                                                                GIF. Maximum
                                                                file size 100
                                                                Mb.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </UploadFillDivWrapper>
                                            </div>

                                            <div className="TXtype-details-wrapper TXtype-details-wrapper-input">
                                                <Row>
                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <Label>
                                                                Name
                                                            </Label>
                                                            <Input
                                                                type="type"
                                                                placeholder=""
                                                                name="name"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .name
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <Label>
                                                                Symbol
                                                            </Label>
                                                            <Input
                                                                type="type"
                                                                placeholder="E.g. ROSES"
                                                                name="symbol"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .symbol
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>


                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <Label>
                                                                Description
                                                            </Label>
                                                            <Input
                                                                as="textarea"
                                                                placeholder=""
                                                                rows={4}
                                                                name="description"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .description
                                                                }
                                                            />
                                                        </FormGroup>
                                                    </Col>

                                                    <div className="TX-set-add-block">
                                                        <Row className="TX-set-add-block-inner">
                                                            <Col
                                                                md={6}
                                                                className="block-call-plus"
                                                            >
                                                                <FormGroup>
                                                                    <Label>
                                                                        Royalties %
                                                                    </Label>
                                                                    <Input
                                                                        type="type"
                                                                        placeholder="e.g. 1"
                                                                        name="royaltyBps"
                                                                        onChange={
                                                                            formik.handleChange
                                                                        }
                                                                        onBlur={
                                                                            formik.handleBlur
                                                                        }
                                                                        value={
                                                                            formik
                                                                                .values
                                                                                .royaltyBps
                                                                        }
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col
                                                                md={6}
                                                                className="block-call-plus"
                                                            >
                                                                <FormGroup>
                                                                    <Label>
                                                                        Select
                                                                        Category
                                                                    </Label>
                                                                    <Select
                                                                        name="category"
                                                                        options={
                                                                            categorys
                                                                        }
                                                                        className="TX-select2-wrapper"
                                                                        classNamePrefix="TX-fix-select"
                                                                        onChange={
                                                                            handleChangeCategory
                                                                        }
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Row>
                                            </div>

                                            <div className="TXtype-details-wrapper TXtype-details-wrapper-button">
                                                <div className="TXbutton-wrapper">
                                                    <Button
                                                        disabled={
                                                            contractLoading
                                                        }
                                                        type="submit"
                                                    >
                                                        {contractLoading ? (
                                                            <Spinner
                                                                animation="border"
                                                                size="sm"
                                                            />
                                                        ) : (
                                                            "Publish"
                                                        )}
                                                    </Button>

                                                    <Button
                                                        className="border-dark-button"
                                                        type="button"
                                                        onClick={discardAll}
                                                        isBorderBtn={true}
                                                    >
                                                        Discard All
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <ItemPreviewSectionWrapper className="item-box-shadow">
                                            <TXProductBoxWrapper className="item-box-shadow-inner">
                                                <div className="top-block-product">
                                                    <h4>
                                                        {formik.values.name ||
                                                            "Collection Name"}
                                                    </h4>
                                                    <div className="like-block">
                                                        <svg
                                                            width="26"
                                                            height="24"
                                                            viewBox="0 0 26 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M13 23.6875L11.1875 22.0375C4.75 16.2 0.5 12.3375 0.5 7.625C0.5 3.7625 3.525 0.75 7.375 0.75C9.55 0.75 11.6375 1.7625 13 3.35C14.3625 1.7625 16.45 0.75 18.625 0.75C22.475 0.75 25.5 3.7625 25.5 7.625C25.5 12.3375 21.25 16.2 14.8125 22.0375L13 23.6875Z"
                                                                fill="#B5C8CB"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="product-profile">
                                                    <Image
                                                        src={
                                                            userDetails?.lowLogo ||
                                                            "/images/user.svg"
                                                        }
                                                    />
                                                    <div className="product-profile-details">
                                                        <h5>
                                                            {userDetails?.name}
                                                        </h5>
                                                        <p>Creator</p>
                                                    </div>
                                                </div>
                                                {/* <div className="item-name-header">
                                                    <SubTitleText16>
                                                        {formik.values.name}
                                                    </SubTitleText16>
                                                </div> */}
                                                <div className="TX-ItemPreviewImg">
                                                    <div className="TX-PreviewImgBox">
                                                        {collectionFilePrieview && (
                                                            <Image
                                                                src={
                                                                    collectionFilePrieview
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="TX-user-detailbox">
                                                    {/* <div className='TX-user-div'>
                            <div>
                              <div className='user-img'>
                                <Image src={userDetails?.lowLogo || '/images/BattleforDigital.png'} />
                              </div>
                            </div>
                            <div>
                              <p className='subtitle-text'>Creator</p>
                              <h5 className='title-text'>{userDetails?.name}</h5>
                            </div>
                          </div> */}
                                                    {/* <div className='TX-user-div'>
                            <div className='current-bid-box'>
                              {formik.values.category && (
                                <>
                                  <p className='subtitle-text'>Category</p>
                                  <h5 className='title-text'>{formik.values.category}</h5>
                                </>
                              )}
                            </div>
                          </div> */}
                                                    {/* <div className="product-profile-flex">
                                                        <div className="product-profile">
                                                            <img
                                                                src={
                                                                    "/images/pulsechain-icon.svg"
                                                                }
                                                                alt="pulsechain-icon-img"
                                                            ></img>
                                                            <div className="product-profile-details">
                                                                <h5 className="pls-gray">
                                                                    PLS
                                                                </h5>
                                                                <p className="p-tag-block">
                                                                    0.0041
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <span>
                                                                    Purchase
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div> */}
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

export default CreateCollection;
