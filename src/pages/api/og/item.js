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
    const animation_url = getValue(
        "animation_url",
        "https://hextoymedia.s3.us-east-1.amazonaws.com/collections/lows/86204875-32e0-4e58-a702-0f55a1befffa-1718267220803"
    );

    const collectionName = getValue("collectionName");
    const collectionLogo = getValue("collectionLogo");
    const usdPrice = getValue("usdPrice");
    const price = getValue("price");
    const symbol = getValue("symbol");
    const supply = getValue("supply");
    const chainId = getValue("chainId");
    const parsedUsdPrice = `$${OgCountParser(usdPrice)}`;
    const parsedSupply = OgCountParser(supply);
    const parsedPrice =
        price && symbol !== "null" && symbol !== "undefined"
            ? `${OgCountParser(price)} ${symbol}`
            : 0;
    const chainLogo = `${FRONT_END_DOMAIN}${CHAIN_LOGO[chainId]}`;

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
                    src={imageUrl || animation_url}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "600px",
                        height: "315px",
                        zIndex: -1,
                        objectFit: "cover",
                        objectPosition: "center",
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
                        paddingLeft: "22.5px",
                    }}
                >
                    <div
                        style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                            fontSize: "40px",
                            fontWeight: "900",
                        }}
                    >
                        {name}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        margin: "10px 0 20px 0",
                        zIndex: 1,
                        padding: "0px 15px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "20px",
                            fontWeight: "bold",
                            zIndex: 1,
                            justifyContent: "flex-start",
                            paddingLeft: "15px",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                clipPath:
                                    "polygon(25% 7%, 75% 7%, 100% 50%, 75% 93%, 25% 93%, 0% 50%)",
                                width: "40px",
                                height: "40px",
                                marginRight: "5px",
                                display: "flex",
                            }}
                        >
                            <img
                                src={collectionLogo}
                                alt="Hexagon Image"
                                width="100%"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                            }}
                        >
                            {collectionName}
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "60%",
                            paddingLeft: "100px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={chainLogo}
                                    alt="chainLogo"
                                    width="15px"
                                    height="15px"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "top",
                                    }}
                                />
                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        marginLeft: "2.5px",
                                    }}
                                >
                                    {parsedPrice}
                                </div>
                            </div>

                            <div>Price</div>
                        </div>
                        <div
                            style={{
                                fontSize: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                }}
                            >
                                {parsedUsdPrice}
                            </div>
                            <div>USD Price</div>
                        </div>
                        <div
                            style={{
                                fontSize: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                }}
                            >
                                {parsedSupply}
                            </div>
                            <div>Quantity</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 600,
            height: 315,
        }
    );
}
