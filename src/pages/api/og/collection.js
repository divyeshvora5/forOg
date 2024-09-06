import {
    CHAIN_LOGO,
    FRONT_END_DOMAIN,
    GET_CHAIN_NAMES,
    OgCountParser,
} from "@/constant/ogConstant";
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const logoUrl = `${FRONT_END_DOMAIN}/images/logo-light.svg`;

    const getValue = (key, defaultValue = "") =>
        searchParams.has(key) ? searchParams.get(key) : defaultValue;

    const name = getValue("name");
    const imageUrl = getValue(
        "imageUrl",
        "https://hextoymedia.s3.us-east-1.amazonaws.com/collections/lows/86204875-32e0-4e58-a702-0f55a1befffa-1718267220803"
    );
    const coverUrl = getValue(
        "coverUrl",
        "https://hextoymedia.s3.us-east-1.amazonaws.com/collections/banners/273488de-5f34-4b2f-a621-d352d6e7a4f6-1718222813018"
    );
    const floorPrice = getValue("floorPrice");
    const floorSymbol = getValue("floorSymbol");
    const tradingVolume = getValue("tradingVolume");
    const totalItemCount = getValue("totalItemCount");
    const totalOwners = getValue("totalOwners");
    const chainId = getValue("chainId");
    const creatorName = getValue("creatorName");
    const royalties = getValue("royalties");
    const parsedFloor =
        floorPrice && floorSymbol !== "null"
            ? `${OgCountParser(floorPrice)} ${floorSymbol}`
            : 0;
    const parsedVolume = `$${OgCountParser(tradingVolume)}`;
    const parsedItemCount = OgCountParser(totalItemCount);
    const parsedOwners = OgCountParser(totalOwners);

    const parsedRoyalties = `Royalties: ${royalties}%`;
    const chainLogo = `${FRONT_END_DOMAIN}${CHAIN_LOGO[chainId]}`;
    const chainName = GET_CHAIN_NAMES[chainId] || "";

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    width: "600px", // Reduced width
                    height: "315px", // Reduced height
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
                        width: "600px", // Reduced width
                        height: "315px", // Reduced height
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
                        top: 10, // Adjusted
                        left: 10, // Adjusted
                        zIndex: 1,
                        display: "flex",
                    }}
                >
                    <img src={logoUrl} width="200" /> {/* Adjusted */}
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "24px", // Adjusted
                        fontWeight: "bold",
                        zIndex: 1,
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingLeft: "22.5px", // Adjusted
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            clipPath:
                                "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                            width: "100px", // Adjusted
                            height: "100px", // Adjusted
                            marginRight: "5px", // Adjusted
                            display: "flex",
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt="Hexagon Image"
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                    <h2 style={{ marginLeft: "5px", fontWeight: "bolder" }}>
                        {name}
                    </h2>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        marginTop: "0px",
                        marginBottom: "10px", // Adjusted
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            fontSize: "15px", // Adjusted
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px", // Adjusted
                                fontWeight: "600",
                            }}
                        >
                            {parsedFloor}
                        </div>
                        <div>Floor</div>
                    </div>
                    <div
                        style={{
                            fontSize: "15px", // Adjusted
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px", // Adjusted
                                fontWeight: "600",
                            }}
                        >
                            {parsedVolume}
                        </div>
                        <div>Volume</div>
                    </div>
                    <div
                        style={{
                            fontSize: "15px", // Adjusted
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px", // Adjusted
                                fontWeight: "600",
                            }}
                        >
                            {parsedItemCount}
                        </div>
                        <div>Items</div>
                    </div>
                    <div
                        style={{
                            fontSize: "15px", // Adjusted
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "20px", // Adjusted
                                fontWeight: "600",
                            }}
                        >
                            {parsedOwners}
                        </div>
                        <div>Owners</div>
                    </div>
                    <div
                        style={{
                            fontSize: "15px", // Adjusted
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={chainLogo}
                                alt="chainLogo"
                                width="15" // Adjusted
                                height="15" // Adjusted
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "top",
                                }}
                            />
                            <div
                                style={{
                                    fontSize: "20px", // Adjusted
                                    fontWeight: "600",
                                    marginLeft: "2.5px", // Adjusted
                                }}
                            >
                                {chainName}
                            </div>
                        </div>
                        <div>Blockchain</div>
                    </div>
                </div>
                <div
                    style={{
                        fontSize: "20px", // Adjusted
                        margin: "5px 0 15px 0", // Adjusted
                        display: "flex",
                        zIndex: 1,
                        justifyContent: "flex-start",
                        width: "100%",
                        paddingLeft: "20px", // Adjusted
                    }}
                >
                    Created by
                    <span style={{ color: "#ff00ff", margin: "0 10px" }}>
                        {creatorName}
                    </span>
                    {parsedRoyalties}
                </div>
            </div>
        ),
        {
            width: 600, // Reduced width
            height: 315, // Reduced height
        }
    );
}
