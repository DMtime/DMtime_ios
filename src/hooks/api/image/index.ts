import { getRequest, getRequestWithAccessToken } from "../default";

export const getImageUrl = (fileName: string) => {
  return fileName;
};

export const deleteImage = async (fileName: string) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`images/${fileName}`);
  } catch (error) {
    throw error;
  }
};

export const addImage = async (file: Blob) => {
  try {
    const request = getRequest();
    const formData = new FormData();
    formData.append("image", file);
    const { data } = await request.post<{ image: string }>(
      `/images`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(data);
    return data.image;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
