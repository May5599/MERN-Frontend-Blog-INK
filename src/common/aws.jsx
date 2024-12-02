import axios from "axios";

export const uploadImage = async (img) => {
    let imgUrl = null;

    try {
        // Step 1: Get the upload URL
        const { data: { uploadURL } } = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url");

        // Step 2: Upload the image to the S3 bucket using the PUT URL
        const response = await axios.put(uploadURL, img, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (response.status === 200) {
            // The image was successfully uploaded, get the image URL
            imgUrl = uploadURL.split("?")[0];
        } else {
            console.error("Image upload failed with status:", response.status);
        }
    } catch (error) {
        console.error("Error during image upload:", error);
    }

    return imgUrl;
};
