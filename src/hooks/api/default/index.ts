import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config";

export const getRequestWithAccessToken = async () => {
  AsyncStorage.setItem(
    "accessToken",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTkxMzk3OTksIm5iZiI6MTYxOTEzOTc5OSwianRpIjoiY2Y2ZDQxZmItNTc4YS00YTY3LWI4NWUtMDY1NmI3YjZhMjNjIiwiZXhwIjoxNjE5MTgyOTk5LCJpZGVudGl0eSI6InBhbmRhdGlAZHNtLmhzLmtyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsicm9sZXMiOiJwZWFzYW50In19.My701_ttimU09ekydPASb33mMDJPRoPy8IYu_rhn4Qo"
  );
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
