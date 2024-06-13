import { Axios } from "@/utils";


export const genrateImageService = async (body) => {
    return await Axios.post("tera/generateImage",body);
};
