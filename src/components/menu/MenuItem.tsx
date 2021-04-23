import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import S from "./style";

interface Props {
  onClick: () => void;
}

const MenuItem: FC<Props> = ({ children, onClick }) => {
  return (
    <View style={S.MenuItem}>
      <TouchableOpacity onPress={onClick}>
        <Text style={S.MainItemText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
