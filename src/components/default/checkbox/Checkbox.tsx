import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import S from "./style";

interface Props {
  setValue: (value: boolean) => void;
  value: boolean;
}

const Checkbox: FC<Props> = ({ setValue, children, value }) => {
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
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
