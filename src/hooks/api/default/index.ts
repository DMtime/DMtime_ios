import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config";

export const getRequestWithAccessToken = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  return axios.create({
    baseURL: config.BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRequest = () =>
  axios.create({
    baseURL: config.BASE_URL,
  });
