import React, { FC } from "react";
import {
  SafeAreaView,
  GestureResponderEvent,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import S from "./style";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

interface Props {
  setMenu: (value: boolean) => void;
}

const Menu: FC<Props> = ({ setMenu }) => {
  const backgroundClickHandler = (e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMenu(false);
  };
  return (
    <SafeAreaView style={S.MainWrapper}>
      <TouchableOpacity
        onPress={backgroundClickHandler}
        style={S.MenuBackground}
        activeOpacity={1}
      />
      <ScrollView style={S.Menu}>
        <MenuHeader userImage="" userName="오준상" />
        <MenuItem>어떤 갤러리</MenuItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
