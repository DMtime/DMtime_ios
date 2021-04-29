import React, { FC } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import S from "./style";

interface Props {
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  placeholder?: string;
  setValue: (value: string) => void;
}

const Input: FC<Props> = ({
  width,
  height,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  placeholder,
  setValue,
}) => {
  const inputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(e.nativeEvent.text);
  };
  return (
    <TextInput
      style={{
        ...S.Input,
        width: width ? width : "100%",
        height: height ? height : 40,
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
      }}
      onChange={inputChangeHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
