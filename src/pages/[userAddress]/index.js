import { PublicProfile } from "@/components/PublicProfile/PublicProfileProvider";
import PublicProfileComponent from "@/components/PublicProfile/PublicProfileComponent";

const ProfilePublicPage = () => {
    return (
        <>
            <PublicProfile>
                <PublicProfileComponent />
            </PublicProfile>
        </>
    );
};

export default ProfilePublicPage;
