import { useEffect } from "react";
import { getUser } from "../../api/user";
import useUser from "../../domain/user/useUser";

const useUserUseCase = () => {
  const { user, setUser } = useUser();
  const getUserAndSetState = async () => {
    const data = await getUser();
    setUser(user);
  };
  useEffect(() => {
    getUserAndSetState();
  }, []);
  return {
    user,
    setUser,
  };
};

export default useUserUseCase;
