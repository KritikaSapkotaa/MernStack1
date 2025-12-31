import { vs as cloudinary } from "cloudinary";
import config from "./config.js";

function connectCloudinary() {
    cloudinary.configure({
        cloud_name: config.cloudinary.cloudName,
        api_key: config.Cloudinary.apiKey,
        api_secret: config.Cloudinary.apiSecret,
    });
}

export default connectCloudinary;