import AsyncStorage from "@react-native-async-storage/async-storage";
import { signinRequest } from "../../api/user";
import useSignIn from "../../domain/user/useSignIn";

const useSignInUseCase = () => {
  const {
    email,
    password,
    autoLogin,
    setAutoLogin,
    setPassword,
    setEmail,
  } = useSignIn();

  const signin = async () => {
    const accessToken = await signinRequest(email, password);
    AsyncStorage.setItem("accessToken", accessToken);
  };

  return {
    email,
    password,
    autoLogin,
    setAutoLogin,
    setPassword,
    setEmail,
    signin,
  };
};

export default useSignInUseCase;
