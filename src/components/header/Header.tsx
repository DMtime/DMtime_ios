import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logo, menu } from "../../statics/header";
import S from "./style";

interface Props {
  setMenu: (value: boolean) => void;
}

const Header: FC<Props> = ({ setMenu }) => {
  const menuButtonClickHandler = () => {
    setMenu(true);
  };
  return (
    <View style={S.Header}>
      <TouchableOpacity onPress={menuButtonClickHandler}>
        <Image style={S.HeaderMenu} source={menu} />
      </TouchableOpacity>
      <View style={S.HeaderWrapper}>
        <Image style={S.HeaderLogo} source={logo} />
        <Text style={S.HeaderTitle}>대마타임</Text>
      </View>
      <View style={S.HeaderMenu} />
    </View>
  );
};

export default Header;
