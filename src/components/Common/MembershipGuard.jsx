import { useMemo } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { globalState } from "@/redux/reducer/globalSlice";
import Link from "next/link";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Button } from "@/styles/pages/main.style";
import { useRouter } from "next/router";

const MembershipGuard = ({ children }) => {
    const { userDetails } = useSelector(globalState);
    const { push } = useRouter();

    const isYottaMember = useMemo(() => {
        if (userDetails?.memberShip?.length > 0) {
            return userDetails.memberShip.some(
                (memberShip) =>
                    memberShip.type === "YOTA" &&
                    memberShip.expiry > Math.floor(Date.now() / 1000)
            );
        }
        return false;
    }, [userDetails]);

    const redirectToMembershipPage = () => {
        push(PATH_DASHBOARD.rewards.membership);
    };

    if (!isYottaMember) {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column m-5 h-[18rem]">
                <h4 className="mt-5 text-center">
                    You need a Yotta key to unlock!
                </h4>
                <div style={{ width: "200px" }} className="mt-2">
                    <Button onClick={redirectToMembershipPage}>
                        Unlock
                    </Button>
                </div>
            </div>
        );
    }

    return <div>{children}</div>;
};

export default MembershipGuard;
