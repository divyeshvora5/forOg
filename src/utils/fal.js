// import * as fal from "@fal-ai/serverless-client";


// fal.config({
//     proxyUrl: "/api/fal/proxy",
// });

function isBase64(str) {
    const base64Pattern = /^data:image\/[a-zA-Z]+;base64,/;
    return base64Pattern.test(str);
}

function isUrl(str) {
    const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/;
    return urlPattern.test(str);
}

const convertFalBase64ImageToFile = (data) => {

    const imageData = data?.images[0];
    try {

        if (isBase64(imageData?.url)) {

            const arr = imageData?.url?.split(",");
            // const mime = arr[0].match(/:(.*?);/)[1];
            const buffer = Buffer.from(arr[arr.length - 1], "base64");
            console.log('imageData', imageData)
            // Create File from Buffer
            const file = new File([buffer], String(data?.seed), { type: imageData?.content_type });

            return file;
        }

        if(isUrl(imageData?.url)) {
            return imageData?.url;
        }
    } catch (err) {
        console.log('err', err);
        return null;
    }
}


export { convertFalBase64ImageToFile };