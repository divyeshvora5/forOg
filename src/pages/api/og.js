import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "#BITMATIC ART";
    const imageUrl = searchParams.get("imageUrl") || "https://hextoymedia.s3.us-east-1.amazonaws.com/collections/lows/86204875-32e0-4e58-a702-0f55a1befffa-1718267220803";
    const coverUrl = "https://hextoymedia.s3.us-east-1.amazonaws.com/collections/banners/273488de-5f34-4b2f-a621-d352d6e7a4f6-1718222813018";

    console.log('title', title);
    console.log('imageUrl', imageUrl)

    return new ImageResponse(
        (
            <div style={{
                display: "flex",
                width: "1200px",
                height: "630px",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "column",
                position: "relative",
            }}>
                <img src={coverUrl} style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1200px",
                    height: "630px",
                    zIndex: -1,
                }} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    zIndex: 0,
                    display: "flex",
                }}></div>
                <div style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    zIndex: 1,
                    display: "flex",
                }}>
                    <img src={imageUrl} width="400" />
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "48px",
                    fontWeight: "bold",
                    zIndex: 1,
                    justifyContent: "flex-start",
                    width: "100%",
                    paddingLeft: "20px",
                }}>
                    <div style={{
                        position: "relative",
                        overflow: "hidden",
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        width: "125px",
                        height: "125px",
                        marginRight: "10px",
                        display: "flex",
                    }}>
                        <img src={imageUrl} alt="Hexagon Image" width="125" height="125" style={{
                            objectFit: "cover",
                            objectPosition: "top",
                        }} />
                    </div>
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            debug: true
        }
    );
}
