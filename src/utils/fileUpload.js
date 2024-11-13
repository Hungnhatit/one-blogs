export const handleImgUpload = async (img) => {
  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "post-imgs");
  try {
    const response = await axios.post(
      `http://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/image/upload/`, formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.log(error);
  }
}