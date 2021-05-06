import React, { FC } from "react";
import { Text, View } from "react-native";
import {
  SIGNUP_ERROR_MESSAGE,
  SIGNUP_SUCCESS_MESSAGE,
} from "../../../config/messge";
import S from "../style";

interface Props {
  error: boolean;
  success: boolean;
  type: "EMAIL" | "PASSWORD" | "PASSWORD_CHECK" | "NICKNAME";
}

const SignUpErrorMessage: FC<Props> = ({ error, success, type }) => {
  return (
    <View style={S.MessageWrapper}>
      {error ? (
        <Text style={S.ErrorMessage}>
          {SIGNUP_ERROR_MESSAGE[`${type}_ERROR_MESSAGE`]}
        </Text>
      ) : (
        <></>
      )}
      {success ? (
        <Text style={S.SuccessMessage}>
          {SIGNUP_SUCCESS_MESSAGE[`${type}_SUCCESS_MESSAGE`]}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default SignUpErrorMessage;
