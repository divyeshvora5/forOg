import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import dynamic from "next/dynamic";
const ConnectWalletAnimation = dynamic(
    () =>
        import(
            "@/components/Common/connectWalletAnimation/ConnectWalletAnimation"
        ),
    { ssr: false }
);

const ConnectionGuard = ({ children }) => {
    const { active } = useActiveWeb3React();

    if (!active) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <h4 className="mt-5">Please Connect Your Wallet </h4>
                    <div style={{ width: "600px", height: "600px" }}>
                        <ConnectWalletAnimation />
                    </div>
                </div>
            </>
        );
    }

    return <div>{children}</div>;
};

export default ConnectionGuard;
