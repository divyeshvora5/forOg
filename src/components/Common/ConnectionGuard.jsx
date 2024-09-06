import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { SET_HEADER_CLASS } from "@/routes/paths";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const ConnectWalletAnimation = dynamic(
    () =>
        import(
            "@/components/Common/connectWalletAnimation/ConnectWalletAnimation"
        ),
    { ssr: false }
);

const ConnectionGuard = ({ children }) => {
    const { active } = useActiveWeb3React();
    const router = useRouter();
    const [isFloatingHeader, setIsFloatingHeader] = useState(false);

    useEffect(() => {
        if (SET_HEADER_CLASS[router.pathname]) {
            setIsFloatingHeader(true);
        }
    }, [router.pathname]);

    if (!active) {
        return (
          <>
            <div
              className='d-flex justify-content-center align-items-center flex-column'
              style={isFloatingHeader ? { marginTop: '170px' } : {}}>
              <h4 className='mt-5 dark-theme-no-wallet'>Please Connect Your Wallet </h4>
              <div style={{ width: '600px', height: '600px' }}>
                <ConnectWalletAnimation />
              </div>
            </div>
          </>
        );
    }

    return <div>{children}</div>;
};

export default ConnectionGuard;
