import { FRONT_END_DOMAIN, OgCountParser } from "@/constant/ogConstant";
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

// Utility function to convert SVG to Base64
const convertSvgToBase64 = async (url) => {
    try {
        const response = await fetch(url);
        if (response.headers.get("Content-Type")?.includes("image/svg+xml")) {
            const svgText = await response.text();
            return `data:image/svg+xml;base64,${Buffer.from(svgText).toString(
                "base64"
            )}`;
        }
    } catch (error) {
        console.error("Failed to convert SVG:", error);
    }
    return url;
};

// Main handler for the Edge function
export default async function handler(req) {
    const { searchParams } = new URL(req.url);
    const logoUrl = `${FRONT_END_DOMAIN}/images/logo-light.svg`;
    const rewardBlockUrl = `${FRONT_END_DOMAIN}/images/rewardPointsBlock.svg`;

    // Use absolute URLs or your domain instead of localhost for production
    const bgURL = `${FRONT_END_DOMAIN}/staticOgImages/ProfileCardBg.png`;
    const imgURL = `${FRONT_END_DOMAIN}/staticOgImages/UserImage.png`;

    const getValue = (key, defaultValue = "") => {
        const value = searchParams.get(key);
        return value && value !== "undefined" && value !== "null"
            ? value
            : defaultValue;
    };

    const name = getValue("name", "");
    const coverUrl = getValue("coverUrl", bgURL);
    const imageUrl = await convertSvgToBase64(getValue("imageUrl", imgURL));

    const parsedItemCount = OgCountParser(getValue("itemCount", 0));
    const parsedRewardPoint = OgCountParser(getValue("rewardPoint", 0));
    const parsedCollectionCount = OgCountParser(
        Math.ceil(getValue("collectionCount", 0))
    );

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "600px",
                    height: "315px",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                    position: "relative",
                }}
            >
                <img
                    src={coverUrl}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "600px",
                        height: "315px",
                        zIndex: -1,
                    }}
                    width="600"
                    height="315"
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.5), #fff)",
                        zIndex: 0,
                        display: "flex",
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 1,
                        display: "flex",
                    }}
                >
                    <img src={logoUrl} width="200" />
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                        zIndex: 1,
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingLeft: "18px",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            clipPath:
                                "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                            width: "100px",
                            height: "100px",
                            marginRight: "5px",
                            display: "flex",
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt="Hexagon Image"
                            width="100px"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                    <h2 style={{ marginLeft: "5px", fontWeight: "bolder" }}>
                        {name}
                    </h2>
                    <div
                        style={{
                            marginLeft: "10px",
                            background:
                                "linear-gradient(90.25deg, #fb4ef1 -18.72%, #f59999 121.02%)",
                            borderRadius: "7.5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "16px",
                            padding: "3.5px 5px",
                        }}
                    >
                        <img
                            src={rewardBlockUrl}
                            alt="blockUrl"
                            width="16px"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                        <span style={{ color: "#fff", marginLeft: "5px" }}>
                            {parsedRewardPoint}
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: "20px",
                        margin: "15px 0",
                        display: "flex",
                        zIndex: 1,
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingLeft: "20px",
                    }}
                >
                    <span>{parsedItemCount}</span>
                    <span style={{ marginLeft: "7.5px" }}>Collectibles</span>
                    <span style={{ marginLeft: "10px" }}>•</span>
                    <span style={{ marginLeft: "10px" }}>
                        {parsedCollectionCount}
                    </span>
                    <span style={{ marginLeft: "6px" }}>Collections</span>
                </div>
            </div>
        ),
        {
            width: 600,
            height: 315,
        }
    );
}
