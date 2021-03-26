import React, { FC, useMemo } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import S from "./style";
import { defaultUserImage } from "../../statics/main";

interface Props {
  userImage: any;
  userName: string;
}

const MenuHeader: FC<Props> = ({ userImage, userName }) => {
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
    </View>
  );
};

export default MenuHeader;
