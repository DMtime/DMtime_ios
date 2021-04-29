import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import S from "./style";

interface Props {
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  onPress: () => void;
}

const Button: FC<Props> = ({
  width,
  height,
  marginLeft,
  marginBottom,
  marginRight,
  marginTop,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...S.Button,
        width: width ? width : "100%",
        height: height ? height : 40,
        marginLeft,
        marginBottom,
        marginTop,
        marginRight,
      }}
    >
      <Text style={S.ButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
