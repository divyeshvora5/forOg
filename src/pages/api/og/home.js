import { CHAIN_LOGO, FRONT_END_DOMAIN } from "@/constant/ogConstant";
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const imageUrl = `${FRONT_END_DOMAIN}/staticOgImages/ReferralCard.png`;

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
                    src={imageUrl}
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
            </div>
        ),
        {
            width: 600,
            height: 315,
        }
    );
}
