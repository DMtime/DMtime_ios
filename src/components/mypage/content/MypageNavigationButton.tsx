import React, { FC } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import color from "../../../styles/color";
import S from "../style";

interface Props {
  onClick: () => void;
  active: boolean;
}

const MypageNavigationButton: FC<Props> = ({ children, onClick, active }) => {
  return (
    <TouchableOpacity style={S.NavigationButton} onPress={onClick}>
      <Text
        style={{
          ...S.NavigationButtonText,
          color: active ? color.main : "black",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default MypageNavigationButton;
