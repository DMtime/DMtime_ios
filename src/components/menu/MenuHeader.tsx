import React, { FC, useMemo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import S from "./style";
import { defaultUserImage } from "../../statics/main";

interface Props {
  userImage: any;
  userName: string;
  boardWriteButtonClickHandler: () => void;
}

const MenuHeader: FC<Props> = ({
  userImage,
  userName,
  boardWriteButtonClickHandler,
}) => {
  const userImageUrl = useMemo(
    () => (userImage ? userImage : defaultUserImage),
    [userImage]
  );
  return (
    <View style={S.MenuHeader}>
      <View style={S.MainuserWrapper}>
        <View style={S.MenuUserImageWrapper}>
          <Image style={S.MenuUserImage} source={userImageUrl} />
        </View>
        <Text style={S.MenuUserName}>{userName}</Text>
      </View>
      <View style={S.MenuButtonWrapper}>
        <TouchableOpacity onPress={boardWriteButtonClickHandler}>
          <Text style={S.MenuText}>게시판 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuHeader;
