import React, { FC } from "react";
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import S from "./style";

interface Props {
  buttonText: string;
  onClick: () => void;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  placeholder?: string;
  setValue: (value: string) => void;
  value?: string;
}

const SubButtonInput: FC<Props> = ({
  width,
  height,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  placeholder,
  setValue,
  buttonText,
  onClick,
  value,
}) => {
  const inputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(e.nativeEvent.text);
  };
  return (
    <View
      style={{
        ...S.Input,
        width: width ? width : "100%",
        height: height ? height : 40,
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
      }}
    >
      <TextInput
        value={value}
        onChange={inputChangeHandler}
        placeholder={placeholder}
        style={{ width: "80%", marginLeft: 10 }}
      />
      <TouchableOpacity onPress={onClick} style={S.SubButton}>
        <Text style={{ color: "white" }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubButtonInput;
