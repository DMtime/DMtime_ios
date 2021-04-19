import config from "../../../config/config";
import { getRequest, getRequestWithAccessToken } from "../default";

export const getImageUrl = (fileName: string) => {
  return `${config.BASE_URL}/${fileName}`;
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
    const { data } = await request.post<{ url: string }>(`/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
