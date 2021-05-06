import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import S from "./style";

interface Props {
  logout: () => void;
  goMypage: () => void;
}

const MenuFooter: FC<Props> = ({ logout, goMypage }) => {
  const logoutButtonClickHandler = () => {
    AsyncStorage.clear();
    logout();
  };
  const mypageButtonClickHandler = () => {
    goMypage();
  };
  return (
    <View style={{ borderTopWidth: 1, borderColor: "#C9C9C9" }}>
      <TouchableOpacity style={S.MenuItem} onPress={mypageButtonClickHandler}>
        <Text style={S.MainItemText}>마이페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity style={S.MenuItem} onPress={logoutButtonClickHandler}>
        <Text style={S.MainItemText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuFooter;
