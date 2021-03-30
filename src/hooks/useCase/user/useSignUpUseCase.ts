import useSignUp from "../../domain/user/useSignUp";
import { signup } from "../../api/user";
const useSignUpUseCase = () => {
  const {
    setEmail,
    setNickName,
    setPassword,
    email,
    nickname,
    password,
  } = useSignUp();

  const signupWithValue = () => {
    signup(nickname, email, password);
  };

  return {
    setEmail,
    setNickName,
    setPassword,
    email,
    nickname,
    password,
    signup: signupWithValue,
  };
};

export default useSignUpUseCase;
