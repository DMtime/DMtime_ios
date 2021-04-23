import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import S from "./style";

interface Props {
  setValue: (value: boolean) => void;
  value: boolean;
  fontSize?: number;
}

const Checkbox: FC<Props> = ({ setValue, children, value, fontSize }) => {
  const checkboxOnPressHandler = () => {
    setValue(!value);
  };
  return (
    <TouchableOpacity
      onPress={checkboxOnPressHandler}
      style={S.CheckboxWrapper}
      activeOpacity={1}
    >
      <View style={S.Checkbox}>
        {value ? <View style={S.CheckboxContent} /> : <View />}
      </View>
      <Text style={{ fontSize }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
