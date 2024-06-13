import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React from "react";
import { Accordion, Container } from "react-bootstrap";

const faqPage = () => {
    return (
      <>
        <CommonPageBlockPad className='dark-mode-body'>
          <CommonGraphics />
          <Container>
            <div className='help-center-block'>
              <div className='help-center-block-title'>
                <h2>Frequently Ask questions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad
                  iste ipsum officiis deleniti asperiores sit.
                </p>
              </div>
              <div className='faq-main-block'>
                <Accordion defaultActiveKey='0'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is MiNFT ?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,
                        personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>Can I change my plan later?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,
                        personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is your cancellation policy?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,
                        personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>How does billing work?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,
                        personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>How do I change my account email?</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free,
                        personalized 30-minute onboarding call to get you up and running as soon as possible.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Container>
        </CommonPageBlockPad>
      </>
    );
};

export default faqPage;
