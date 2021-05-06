import { useEffect } from "react";
import { getMe, getUser } from "../../api/user";
import useUser from "../../domain/user/useUser";

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

  useEffect(() => {
    if (isMine) getMeAndSetState();
  }, []);
  return {
    user,
    setUser,
    getUserAndSetState,
    getMeAndSetState,
  };
};

export default useUserUseCase;
