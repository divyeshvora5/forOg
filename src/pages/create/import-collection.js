import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
import { marketState } from "@/redux/reducer/marketSlice";
import {
    Button,
    FormGroup,
    Image,
    Input,
    Label,
    SubTitleText16,
    UploadFillDivWrapper,
} from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Select from "react-select";
import { useImportCollection } from "@/hooks/useContractCall";
import { ConnectionGuard } from "@/components";

const importCollectionPage = () => {
    const {
        formik,
        options,
        collectionFilePrieview,
        collectionCoverFile,
        handleFileChange,
    } = useImportCollection();
    const { contractLoading } = useSelector(marketState);

    return (
      <ConnectionGuard>
        <CommonPageBlockPad className='dark-mode-body'>
          <CommonGraphics />
          <Container>
            <div className='help-center-block'>
              <div className='help-center-block-title'>
                <h2>Import Collections</h2>
                <p>
                  Our unique import function effortlessly transitions your beloved collections from Ethereum, readying
                  them for the vibrant trading possibilities on PulseChain.
                </p>
              </div>
              <div className='import-pages-block'>
                <div className='import-pages-block-form'>
                  <Form noValidate onSubmit={formik.handleSubmit}>
                    <div className='TX-choose-blockchain-wrapper'>
                      <div className='TXtype-details-wrapper'>
                        <div className='TXtype-details-wrapper-file'>
                          <label>
                            Upload Collection Logo Here <span>(400*400)</span>
                          </label>
                          <UploadFillDivWrapper className='dark-mode-upload'>
                            <input
                              className='file-input'
                              type='file'
                              name='collectionFile'
                              onChange={handleFileChange}
                            />
                            <div className='uploadfiletext'>
                              <i>
                                {collectionFilePrieview ? (
                                  <Image isContainImg={true} src={collectionFilePrieview} />
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
                                <span>PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.</span>
                              </div>
                            </div>
                          </UploadFillDivWrapper>
                          {(formik.touched.collectionFile || formik.submitCount) && formik.errors.collectionFile ? (
                            <div className='text-danger'>{formik.errors.collectionFile}</div>
                          ) : null}
                        </div>

                        <div className='TXtype-details-wrapper-file'>
                          <label>
                            Upload Cover Image here <span>(1600*400)</span>
                          </label>
                          <UploadFillDivWrapper className='dark-mode-upload'>
                            <input
                              className='file-input'
                              type='file'
                              name='collectionCoverFile'
                              onChange={handleFileChange}
                            />
                            <div className='uploadfiletext'>
                              <i>
                                {collectionCoverFile ? (
                                  <Image isContainImg={true} src={collectionCoverFile} />
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
                                <span>PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.</span>
                              </div>
                            </div>
                          </UploadFillDivWrapper>
                        </div>
                        <FormGroup>
                          <Label>Collection Name</Label>
                          <Input
                            type='text'
                            name='name'
                            placeholder='Enter Collection Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {(formik.touched.name || formik.submitCount) && formik.errors.name ? (
                            <div className='text-danger'>{formik.errors.name}</div>
                          ) : null}
                        </FormGroup>
                        <FormGroup>
                          <Label>Collection Address</Label>
                          <Input
                            type='text'
                            name='contractAddress'
                            placeholder='Enter Collection Address'
                            value={formik.values.contractAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {(formik.touched.contractAddress || formik.submitCount) && formik.errors.contractAddress ? (
                            <div className='text-danger'>{formik.errors.contractAddress}</div>
                          ) : null}
                        </FormGroup>

                        <FormGroup>
                          <Label>
                            Description <span>(Optional)</span>
                          </Label>
                          <Input
                            as='textarea'
                            name='description'
                            placeholder='Enter Description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows={6}
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Select Category</Label>
                          <Select
                            name='category'
                            options={options}
                            className='TX-select2-wrapper'
                            classNamePrefix='TX-fix-select'
                            value={options.find((option) => option.value === formik.values.category)}
                            onChange={(selectedOption) => formik.setFieldValue('category', selectedOption?.value)}
                          />
                          {(formik.touched.category || formik.submitCount) && formik.errors.category ? (
                            <div className='text-danger'>{formik.errors.category}</div>
                          ) : null}
                        </FormGroup>
                        <div className='btn-import-block'>
                          <Button type='submit' disabled={contractLoading}>
                            Import Collection
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Container>
        </CommonPageBlockPad>
      </ConnectionGuard>
    );
};

export default importCollectionPage;
