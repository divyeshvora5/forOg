import { Container, Row, Col, Form } from "react-bootstrap";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";
import PageTitle from "@/components/Common/PageTitle";
import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";

const privacyPolicyPage = () => {
    return (
      <>
        <PageTitle title={'Privacy Policy'} />
        <CommonPageBlockPad className='dark-mode-body'>
          <CommonGraphics />
          <Container>
            <div className='help-center-block'>
              <div className='help-center-block-title'>
                <h2>Privacy Policy</h2>
              </div>
              <div className='terms-condition-block'>
                <div className='terms-condition-block-link'>
                  <div className='terms-condition-block-link-inner'>
                    <Link href={PATH_DASHBOARD.termsAndConditions.root}>Terms and Conditons</Link>
                    <Link href={PATH_DASHBOARD.privacyPolicy.root} className='active'>
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <div className='terms-condition-block-content'>
                <PrivacyPolicy />
                  {/* <h4>1. Information We Collect</h4>
                  <p>
                    1.1 Personal Information: We may collect personal information, including but not limited to your
                    name, email address, and contact details when you register an account or use our services.
                  </p>
                  <p>
                    1.2 Payment Information: If you engage in financial transactions on the website, we may collect
                    payment-related information to process your transactions securely.
                  </p>
                  <p>
                    1.3 Log Data: We automatically collect information about your device, browser, and usage patterns
                    when you access our website.
                  </p>
                  <h4>2. How We Use Your Information</h4>
                  <p>
                    2.1 We use your personal information to provide and improve our services, respond to inquiries, and
                    process transactions.
                  </p>
                  <p>
                    2.2 Your information may be used for communication purposes, such as sending important notices,
                    updates, or promotional material.
                  </p>
                  <p>2.3 We may use aggregated and anonymized data for analytical purposes.</p>
                  <h4>3. Data Security</h4>
                  <p>
                    3.1 We employ industry-standard security measures to protect your personal information from
                    unauthorized access, disclosure, alteration, and destruction.
                  </p>
                  <p>
                    3.2 Despite our efforts, please be aware that no data transmission over the internet is completely
                    secure, and we cannot guarantee the absolute security of your data.
                  </p>
                  <h4>4. Cookies and Similar Technologies</h4>
                  <p>
                    4.1 We use cookies and similar technologies to enhance your experience, analyze trends, and
                    administer the website.
                  </p>
                  <p>4.2 You can manage your cookie preferences through your browser settings.</p>
                  <h4>5. Third-Party Links</h4>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these third-party sites.
                  </p>
                  <h4>6. Changes to this Privacy Policy</h4>
                  <p>
                    We reserve the right to update this Privacy Policy at any time. Changes will be effective
                    immediately upon posting the updated policy on the website.
                  </p>
                  <h4>7. Your Choices</h4>
                  <p>
                    You have the right to access, correct, or delete your personal information. You may also choose to
                    opt-out of certain communications.
                  </p> */}
                </div>
              </div>
            </div>
          </Container>
        </CommonPageBlockPad>
      </>
    );
};

export default privacyPolicyPage;
