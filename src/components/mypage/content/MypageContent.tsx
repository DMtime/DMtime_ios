import React, { FC } from "react";
import { View } from "react-native";
import { mypageContentType } from "../../../models/user";
import S from "../style";
import MypageNavigation from "./MypageNavigation";

interface Props {
  type: mypageContentType;
  setType: (value: mypageContentType) => void;
}

const MypageContent: FC<Props> = (props) => {
  return (
    <View style={S.Content}>
      <MypageNavigation {...props} />
    </View>
  );
};

export default MypageContent;
