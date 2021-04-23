import React, { FC, useEffect, useMemo, useRef } from "react";
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
import useUserUseCase from "../../hooks/useCase/user/useUserUseCase";
import useBoardListUseCase from "../../hooks/useCase/board/useBoardListUseCase";

interface Props {
  setMenu: (value: boolean) => void;
  navigate: (page: string, params: object) => void;
}

const Menu: FC<Props> = ({ setMenu, navigate }) => {
  const { user, getMeAndSetState } = useUserUseCase();
  const { boardList } = useBoardListUseCase();
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getMeAndSetState();
  }, []);

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

  const renderedMenuItem = useMemo(
    () =>
      boardList.map((board) => (
        <MenuItem
          onClick={() => {
            navigate("BoardDetail", {
              boardId: board.gallery_id,
              boardTitle: board.name,
            });
            setMenu(false);
          }}
          key={board.gallery_id}
        >
          {board.name}
        </MenuItem>
      )),
    [boardList]
  );
  return (
    <SafeAreaView style={S.MainWrapper}>
      <TouchableOpacity
        onPress={backgroundClickHandler}
        style={S.MenuBackground}
        activeOpacity={1}
      />
      <Animated.View style={{ ...S.MenuWrapper, width: fadeAnimation }}>
        <ScrollView style={S.Menu}>
          <MenuHeader userImage={user.profile_image} userName={user.username} />
          {renderedMenuItem}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Menu;
