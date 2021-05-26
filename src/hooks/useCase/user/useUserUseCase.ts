import { useEffect } from "react";
import { getMe, getUser, patchUserRequest } from "../../api/user";
import useUser from "../../domain/user/useUser";
import Toast from "react-native-simple-toast";

interface Props {
  isMine?: boolean;
}

const useUserUseCase = ({ isMine }: Props) => {
  const { user, setUser } = useUser();
  const getUserAndSetState = async (userName: string) => {
    const data = await getUser(userName);
    setUser(data);
  };

  const getMeAndSetState = async () => {
    const data = await getMe();
    setUser(data);
  };

  const setUserInfo = async (
    username: string,
    newUserName: string,
    explain: string,
    profileImageId: string
  ) => {
    try {
      await patchUserRequest(username, newUserName, explain, profileImageId);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
      }
    }
  };

  useEffect(() => {
    if (isMine) getMeAndSetState();
  }, []);
  return {
    user,
    setUser,
    getUserAndSetState,
    getMeAndSetState,
    setUserInfo,
  };
};

export default useUserUseCase;
