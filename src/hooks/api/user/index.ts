import { user } from "../../../models/user";
import { getRequest, getRequestWithAccessToken } from "../default";

const request = getRequestWithAccessToken();
const requestWithOutToken = getRequest();

export const getUser = async (userName: string) => {
  try {
    const { data } = await request.get<user>(`/users/${userName}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const patchUser = async (
  userName: string,
  newUserName: string,
  newUserExplain: string,
  profileImageId: number
) => {
  try {
    await request.patch(`/users/${userName}`, {
      profile_image_id: profileImageId,
      user_explain: newUserExplain,
      username: newUserName,
    });
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    await requestWithOutToken.post("/users", {
      username,
      password,
      email,
    });
  } catch (error) {
    throw error;
  }
};

export const emailDuplicationCheck = async (
  email: string
): Promise<boolean> => {
  try {
    const { data } = await requestWithOutToken.get<{ useable: boolean }>(
      `/users/email-duplication?email=${email}`
    );
    return data.useable;
  } catch (error) {}
};

export const userNameDuplicationCheck = async (
  userName: string
): Promise<boolean> => {
  try {
    const { data } = await requestWithOutToken.get<{ useable: boolean }>(
      `/users/username-duplication?username=${userName}`
    );
    return data.useable;
  } catch (error) {}
};

export const signin = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const { data } = await requestWithOutToken.post<{ access_token: string }>(
      "/token",
      {
        email,
        password,
      }
    );
    return data.access_token;
  } catch (error) {
    throw error;
  }
};
