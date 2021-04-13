import React, { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import S from "../style";
import { leftArrowImage } from "../../../statics/postDetail";

interface Props {
  goBack: () => void;
}

const Navigation: FC<Props> = ({ goBack }) => {
  return (
    <View style={S.NavigationWrapper}>
      <TouchableOpacity onPress={goBack}>
        <Image source={leftArrowImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
