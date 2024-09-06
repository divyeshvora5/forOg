import { FRONT_END_DOMAIN } from "@/constant/ogConstant";
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const logoUrl = `${FRONT_END_DOMAIN}/images/logo-dark.svg`;

    const getValue = (key, defaultValue = "") =>
        searchParams.has(key) ? searchParams.get(key) : defaultValue;

    const coverUrl = getValue(
        "coverUrl",
        "https://tesseractx.com/staticOgImages/LeaderboardBG.png"
    );
    const title = getValue("title");

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
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
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
                            "linear-gradient(0deg, rgba(83, 2, 194, 0.52) 0%, rgba(83, 2, 194, 0.88) 100%)",

                        zIndex: 0,
                        display: "flex",
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        zIndex: 1,
                        display: "flex",
                    }}
                >
                    <img src={logoUrl} width="240" />
                </div>
                <div
                    style={{
                        zIndex: 1,
                        position: "absolute",
                        bottom: 0,
                        left: 16,
                        width: "95%",
                        height: "55%",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <h1
                            style={{
                                color: "white",
                                margin: 0,
                                padding: 0,
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            {title}
                        </h1>
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
