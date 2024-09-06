import { FRONT_END_DOMAIN, OgCountParser } from "@/constant/ogConstant";
import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const logoUrl = `${FRONT_END_DOMAIN}/images/logo-dark.svg`;
    const LeaderBoardBG = `${FRONT_END_DOMAIN}/staticOgImages/LeaderboardBG.png`;

    const getValue = (key, defaultValue = "") =>
        searchParams.has(key) ? searchParams.get(key) : defaultValue;

    const points1 = getValue("points1", 0);
    const points2 = getValue("points2", 0);
    const points3 = getValue("points3", 0);
    const parsedPoints1 = OgCountParser(points1);
    const parsedPoints2 = OgCountParser(points2);
    const parsedPoints3 = OgCountParser(points3);

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
                    src={LeaderBoardBG}
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
                            "linear-gradient(270deg, rgba(83, 2, 194, 0.2) 0%, rgba(83, 2, 194, 0.7) 100%)",
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
                        width: "100%",
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
                            LeaderBoard
                        </h1>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2
                            style={{
                                color: "white",
                                margin: 0,
                                padding: 0,
                                marginTop: "5px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            1st: {parsedPoints1}
                        </h2>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2
                            style={{
                                color: "white",
                                margin: 0,
                                padding: 0,
                                marginTop: "5px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            2nd: {parsedPoints2}
                        </h2>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <h2
                            style={{
                                color: "white",
                                margin: 0,
                                padding: 0,
                                marginTop: "5px",
                                fontFamily: "'DM Sans', sans-serif",
                            }}
                        >
                            3rd: {parsedPoints3}
                        </h2>
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
