import { user } from "../../../models/user";
import { getRequest, getRequestWithAccessToken } from "../default";

export const getUser = async (userName: string) => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<user>(`/users/${userName}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<user>("/me");
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
  const request = await getRequestWithAccessToken();
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
  const requestWithOutToken = getRequest();
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

export const emailDuplicationCheckRequest = async (
  email: string
): Promise<boolean> => {
  const requestWithOutToken = getRequest();
  try {
    const { data } = await requestWithOutToken.get<{ usable: boolean }>(
      `/users/email-duplication?email=${email}`
    );
    return data.usable;
  } catch (error) {
    throw error;
  }
};

export const userNameDuplicationCheckRequest = async (
  userName: string
): Promise<boolean> => {
  const requestWithOutToken = getRequest();
  try {
    const { data } = await requestWithOutToken.get<{ usable: boolean }>(
      `/users/username-duplication?username=${userName}`
    );
    return data.usable;
  } catch (error) {
    throw error;
  }
};

export const signinRequest = async (
  email: string,
  password: string
): Promise<string> => {
  const requestWithOutToken = getRequest();
  try {
    const { data } = await requestWithOutToken.post<{ access_token: string }>(
      "/token",
      {
        email,
        password,
      }
    );
    console.log(data);
    return data.access_token;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export const emailVertifyCodeCheckRequest = async (code: string) => {
  const requestWithOutToken = getRequest();
  try {
    await requestWithOutToken.post(
      `/email-verification-code?verification-code=${code}`
    );
  } catch (error) {
    throw error;
  }
};
