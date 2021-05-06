import { useState } from "react";
import { Alert } from "react-native";
import { emailVertifyCodeCheckRequest } from "../../api/user";
import useUserVertify from "../../domain/user/useUserVertify";

const useUserVertifyUseCase = () => {
  const { setVertifyCode, vertifyCode } = useUserVertify();

  const emailVertifyCodeCheck = async () => {
    try {
      await emailVertifyCodeCheckRequest(vertifyCode);
    } catch (error) {
      switch (error.response.status) {
        case 404: {
          Alert.alert("이메일 인증", "인증번호가 잘못되었습니다.");
        }
      }
      throw error;
    }
  };
  return {
    setVertifyCode,
    vertifyCode,
    emailVertifyCodeCheck,
  };
};

export default useUserVertifyUseCase;
