import useSignUp from "../../domain/user/useSignUp";
import {
  emailDuplicationCheckRequest,
  signup,
  userNameDuplicationCheckRequest,
} from "../../api/user";
import { useState } from "react";
import { Alert } from "react-native";
const useSignUpUseCase = () => {
  const {
    setEmail,
    setNickName,
    setPassword,
    setPasswordCheck,
    email,
    nickname,
    password,
    passwordCheck,
  } = useSignUp();
  const [emailVertified, setEmailVertified] = useState<boolean>(false);
  const [nickNameVertified, setNickNameVertified] = useState<boolean>(false);

  const signupWithValue = async () => {
    if (!emailVertified) {
      Alert.alert("이메일 중복 확인", "이메일 중복 확인해 주세요.");
      return;
    }
    if (!nickNameVertified) {
      Alert.alert("닉네임 중복 확인", "닉네임을 중복 확인해 주세요.");
      return;
    }
    try {
      await signup(nickname, email, password);
    } catch (error) {
      switch (error.response.status) {
        case 409:
          Alert.alert("회원가입", "닉네임이 중복되었습니다.");
      }
    }
  };

  const emailDuplicationCheckWithEmail = async () => {
    const emailDuplication = await emailDuplicationCheckRequest(email);
    setEmailVertified(emailDuplication);
    if (emailDuplication) {
      Alert.alert("이메일 중복 확인", "이메일 중복 확인 되었습니다.");
    } else {
      Alert.alert(
        "이메일 중복 확인",
        "이메일이 중복됩니다. 다른 이메일을 사용해 주세요."
      );
    }
  };

  const userNameDuplicationCheckWithUserName = async () => {
    const userNameDuplicate = await userNameDuplicationCheckRequest(nickname);
    setNickNameVertified(userNameDuplicate);
    if (userNameDuplicate)
      Alert.alert("닉네임 중복 확인", "닉네임 중복 확인 되었습니다.");
    else
      Alert.alert(
        "닉네임 중복 확인",
        "닉네임이 중복됩니다. 다른 닉네임을 사용해 주세요."
      );
  };

  return {
    email,
    nickname,
    password,
    passwordCheck,
    setEmail,
    setNickName,
    setPassword,
    setPasswordCheck,
    signup: signupWithValue,
    emailDuplicationCheckRequest: emailDuplicationCheckWithEmail,
    userNameDuplicationCheckRequest: userNameDuplicationCheckWithUserName,
  };
};

export default useSignUpUseCase;
