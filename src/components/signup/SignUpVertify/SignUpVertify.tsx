import React, { FC } from "react";
import { Text, View } from "react-native";
import useUserVertifyUseCase from "../../../hooks/useCase/user/useUserVertifyUseCase";
import Button from "../../default/button";
import Input from "../../default/input";
import S from "../style";

const SignUpVertify: FC = () => {
  const { setVertifyCode, emailVertifyCodeCheck } = useUserVertifyUseCase();
  const vertifyCodeButtonClickHandler = async () => {
    await emailVertifyCodeCheck();
  };
  return (
    <View style={S.SignInVertify}>
      <Text style={S.Header}>회원가입</Text>
      <Input
        setValue={setVertifyCode}
        placeholder="인증 코드를 입력해 주세요."
        marginTop={20}
      />
      <Button onPress={vertifyCodeButtonClickHandler} marginTop={20}>
        인증
      </Button>
    </View>
  );
};

export default SignUpVertify;
