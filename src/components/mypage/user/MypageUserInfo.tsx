import React, { FC } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import S from "../style";
import { defaultUserImage } from "../../../statics/main";
import { userInfoFixButtonImage } from "../../../statics/mypage";
import { user } from "../../../models/user";
import config from "../../../config/config";

interface Props {
  user: user;
  setChangeInfo: (value: boolean) => void;
}

const MypageUserInfo: FC<Props> = ({ user, setChangeInfo }) => {
  const changeInfoButtonClickHandler = () => {
    setChangeInfo(true);
  };
  return (
    <View style={S.Header}>
      <View style={S.FixButtonWrapper}>
        <TouchableOpacity onPress={changeInfoButtonClickHandler}>
          <Image source={userInfoFixButtonImage} style={S.FixButton} />
        </TouchableOpacity>
      </View>
      <Image
        style={S.HeaderUserImage}
        source={
          user.profile_image
            ? { uri: `${config.IMAGE_URL}${user.profile_image}` }
            : defaultUserImage
        }
      />
      <Text style={S.HeaderUserName}>{user.username}</Text>
      <Text style={S.HeaderUserDescription}>
        {user.explain ? user.explain : "설명이 없습니다."}
      </Text>
    </View>
  );
};

export default MypageUserInfo;
