import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, View } from "react-native";
import useSignUpUseCase from "../../../hooks/useCase/user/useSignUpUseCase";
import Button from "../../default/button";
import Input, { SubButtonInput } from "../../default/input";
import S from "../style";

const SignUpInfo: FC = () => {
  const {
    setEmail,
    setPassword,
    setNickName,
    setPasswordCheck,
    signup,
    emailDuplicationCheckRequest,
    userNameDuplicationCheckRequest,
  } = useSignUpUseCase();
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
        buttonText="중복 확인"
      />
      <SubButtonInput
        setValue={setNickName}
        placeholder="닉네임을 입력하세요"
        marginTop={20}
        onClick={userNameDuplicationCheckRequest}
        buttonText="중복 확인"
      />
      <Input
        setValue={setPassword}
        placeholder="비밀번호를 입력하세요"
        marginTop={20}
      />
      <Input
        setValue={setPasswordCheck}
        placeholder="비밀번호를 확인 해주세요"
        marginTop={20}
      />
      <Button onPress={signUpButtonClickHandler} marginTop={20}>
        회원가입
      </Button>
    </View>
  );
};

export default SignUpInfo;
