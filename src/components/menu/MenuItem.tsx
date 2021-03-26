import React, { FC } from "react";
import { Text, View } from "react-native";
import S from "./style";

interface Props {}

const MenuItem: FC<Props> = ({ children }) => {
  return (
    <View style={S.MenuItem}>
      <Text style={S.MainItemText}>{children}</Text>
    </View>
  );
};

export default MenuItem;
