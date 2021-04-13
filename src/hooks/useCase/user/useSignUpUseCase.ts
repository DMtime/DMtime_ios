import useSignUp from "../../domain/user/useSignUp";
import {
  emailDuplicationCheck,
  signup,
  userNameDuplicationCheck,
} from "../../api/user";
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

  const emailDuplicationCheckWithEmail = async (): Promise<boolean> => {
    return await emailDuplicationCheck(email);
  };

  const userNameDuplicationCheckWithUserName = async (): Promise<boolean> => {
    return await userNameDuplicationCheck(nickname);
  };

  return {
    setEmail,
    setNickName,
    setPassword,
    email,
    nickname,
    password,
    signup: signupWithValue,
    emailDuplicationCheck: emailDuplicationCheckWithEmail,
    userNameDuplicationCheck: userNameDuplicationCheckWithUserName,
  };
};

export default useSignUpUseCase;
