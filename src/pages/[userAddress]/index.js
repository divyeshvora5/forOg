import { PublicProfile } from "@/components/PublicProfile/PublicProfileProvider";
import PublicProfileComponent from "@/components/PublicProfile/PublicProfileComponent";
import { getOwnerDetailsService } from "@/redux/services/globalServices";
import { FRONT_END_DOMAIN } from "@/constant";

export async function getServerSideProps(context) {
    const { userAddress } = context.params;

    const cleanUserAddress = userAddress.startsWith("@")
        ? userAddress.substring(1)
        : userAddress;

    const isEthAddress = /^0x[a-fA-F0-9]{40}$/.test(cleanUserAddress);
    const isDomainName = !isEthAddress && /\..+$/.test(cleanUserAddress);

    const query = {
        ownerAddress: isEthAddress ? cleanUserAddress : null,
        domainName: isDomainName ? cleanUserAddress : null,
        name: !isEthAddress && !isDomainName ? cleanUserAddress : null,
    };

    let userData = {};

    try {
        const { data } = await getOwnerDetailsService(query);
        userData = data?.data || {};
    } catch (error) {
        console.error("Error fetching user details:", error);
        userData = {
            name: "",
            bio: "",
            bannerUrl: "",
            mediumLogo: "",
            itemCount: 0,
            rewardPoint: 0,
            collectionCount: 0,
            domainName: "",
        };
    }

    const {
        name: userName = "",
        address = "",
        bio = "",
        bannerUrl = "",
        mediumLogo = "",
        itemCount = 0,
        rewardPoint = 0,
        collectionCount = 0,
        domainName: fetchedDomainName = "",
    } = userData;

    const description = `Check out ${address}'s profile on TesseractX, The ultimate rewarding, community-centric digitial collectibles marketplace`;

    const NAME = fetchedDomainName || userName;

    const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/userProfile?name=${encodeURIComponent(
        NAME
    )}&imageUrl=${encodeURIComponent(mediumLogo)}&coverUrl=${encodeURIComponent(
        bannerUrl
    )}&itemCount=${encodeURIComponent(
        itemCount
    )}&rewardPoint=${encodeURIComponent(
        rewardPoint
    )}&collectionCount=${encodeURIComponent(collectionCount)}`;

    return {
        props: {
            ogData: {
                url: `${FRONT_END_DOMAIN}/${userAddress}`,
                imgUrl: ogImageUrl,
                title: userName,
                description: description,
            },
        },
    };
}

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
