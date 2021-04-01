import React, { FC, useEffect, useRef } from "react";
import {
  SafeAreaView,
  GestureResponderEvent,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import S from "./style";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import Animated, { Easing } from "react-native-reanimated";

interface Props {
  setMenu: (value: boolean) => void;
}

const Menu: FC<Props> = ({ setMenu }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const backgroundClickHandler = (e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMenu(false);
  };
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 265,
      duration: 150,
      easing: Easing.linear,
    }).start();
    return () => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 150,
        easing: Easing.linear,
      }).start();
    };
  }, [fadeAnimation]);
  return (
    <SafeAreaView style={S.MainWrapper}>
      <TouchableOpacity
        onPress={backgroundClickHandler}
        style={S.MenuBackground}
        activeOpacity={1}
      />
      <Animated.View style={{ ...S.MenuWrapper, width: fadeAnimation }}>
        <ScrollView style={S.Menu}>
          <MenuHeader userImage="" userName="오준상" />
          <MenuItem>어떤 갤러리</MenuItem>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Menu;
