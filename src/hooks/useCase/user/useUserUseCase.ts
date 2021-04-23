import { getMe, getUser } from "../../api/user";
import useUser from "../../domain/user/useUser";

const useUserUseCase = () => {
  const { user, setUser } = useUser();
  const getUserAndSetState = async (userName: string) => {
    const data = await getUser(userName);
    setUser(data);
  };
  const getMeAndSetState = async () => {
    const data = await getMe();
    setUser(data);
  };
  return {
    user,
    setUser,
    getUserAndSetState,
    getMeAndSetState,
  };
};

export default useUserUseCase;
