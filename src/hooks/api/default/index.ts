import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config";

export const getRequestWithAccessToken = async () => {
  AsyncStorage.setItem(
    "accessToken",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTg4MzEwMDUsIm5iZiI6MTYxODgzMTAwNSwianRpIjoiMTk2NzRhNTQtNDUyZS00MWE0LTgwOWYtYTg4MGEyOWVmZmYxIiwiZXhwIjoxNjE4ODc0MjA1LCJpZGVudGl0eSI6InBhbmRhdGlAZHNtLmhzLmtyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsicm9sZXMiOiJwZWFzYW50In19.AQNkkD8JglWpszGz99uEv7I9TQJoRuyNmSAUn18w7G4"
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
