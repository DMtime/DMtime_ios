import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, View } from "react-native";
import useSignUpUseCase from "../../../hooks/useCase/user/useSignUpUseCase";
import Button from "../../default/button";
import Input, { SubButtonInput } from "../../default/input";
import S from "../style";
import SignUpErrorMessage from "./SignUpErrorMessage";

const SignUpInfo: FC = () => {
  const {
    setEmail,
    setPassword,
    setNickName,
    setPasswordCheck,
    signup,
    emailDuplicationCheckRequest,
    userNameDuplicationCheckRequest,
    dataCheck,
    emailVertified,
    nickNameVertified,
    passwordCheck,
    email,
    nickname,
    password,
  } = useSignUpUseCase();
  const {
    emailError,
    passwordError,
    passwordCheckError,
    nickNameError,
  } = dataCheck;
  const navigation = useNavigation();
  const signUpButtonClickHandler = async () => {
    await signup();
    navigation.navigate("SignUpVertify");
  };
  return (
    <View style={S.SignUpInfo}>
      <Text style={S.Header}>회원 가입</Text>
      <SubButtonInput
        setValue={setEmail}
        placeholder="이메일을 입력하세요"
        marginTop={20}
        onClick={emailDuplicationCheckRequest}
        buttonText="인증"
      />
      <SignUpErrorMessage
        error={emailError}
        success={emailVertified && email !== ""}
        type="EMAIL"
      />
      <SubButtonInput
        setValue={setNickName}
        placeholder="닉네임을 입력하세요"
        marginTop={20}
        onClick={userNameDuplicationCheckRequest}
        buttonText="인증"
      />
      <SignUpErrorMessage
        error={nickNameError}
        success={nickNameVertified && nickname !== ""}
        type="NICKNAME"
      />
      <Input
        setValue={setPassword}
        placeholder="비밀번호를 입력하세요"
        marginTop={20}
        type="password"
      />
      <SignUpErrorMessage
        error={passwordError}
        success={!passwordError && password !== ""}
        type="PASSWORD"
      />
      <Input
        setValue={setPasswordCheck}
        placeholder="비밀번호를 확인 해주세요"
        marginTop={20}
        type="password"
      />
      <SignUpErrorMessage
        error={passwordCheckError}
        success={!passwordCheckError && passwordCheck !== ""}
        type="PASSWORD_CHECK"
      />
      <Button onPress={signUpButtonClickHandler} marginTop={20}>
        회원가입
      </Button>
    </View>
  );
};

export default SignUpInfo;
