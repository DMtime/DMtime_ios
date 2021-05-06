import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useSignInUseCase from "../../hooks/useCase/user/useSignInUseCase";
import Button from "../default/button";
import Checkbox from "../default/checkbox";
import Input from "../default/input";
import S from "./style";

const SignIn: FC = () => {
  const navigation = useNavigation();
  navigation;
  const {
    autoLogin,
    setEmail,
    setPassword,
    setAutoLogin,
    signin,
  } = useSignInUseCase();
  const signInButtonClickHandler = async () => {
    await signin();
    navigation.navigate("Main");
  };

  const signUpButtonClickHandler = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={S.SignIn}>
      <View>
        <Text style={S.Header}>로그인</Text>
        <Input
          setValue={setEmail}
          placeholder="이메일을 입력하세요."
          marginBottom={20}
          marginTop={50}
        />
        <Input
          setValue={setPassword}
          placeholder="비밀번호를 입력하세요."
          marginBottom={35}
          type="password"
        />
        <Button onPress={signInButtonClickHandler}>로그인</Button>
        <View style={S.Footer}>
          <Checkbox setValue={setAutoLogin} value={autoLogin}>
            자동 로그인
          </Checkbox>
          <View style={{ flexDirection: "row" }}>
            <Text>계정이 없으신가요?</Text>
            <TouchableOpacity onPress={signUpButtonClickHandler}>
              <Text style={S.SignInButton}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
