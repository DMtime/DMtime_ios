import config from "../../../config/config";
import { getRequestWithAccessToken } from "../default";

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

export const setImage = async (file: Blob) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/images`, {
      image: file,
    });
  } catch (error) {}
};
