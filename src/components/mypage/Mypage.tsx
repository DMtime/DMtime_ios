import React from "react";
import { Image, Text, View } from "react-native";
import useUserUseCase from "../../hooks/useCase/user/useUserUseCase";
import S from "./style";
import { defaultUserImage } from "../../statics/main";

const Mypage = () => {
  const { user } = useUserUseCase({ isMine: true });
  console.log(user);
  return (
    <View>
      <View style={S.Header}>
        <Image
          style={S.HeaderUserImage}
          source={
            user.profile_image ? { uri: user.profile_image } : defaultUserImage
          }
        />
        <Text style={S.HeaderUserName}>{user.username}</Text>
        <Text style={S.HeaderUserDescription}>
          {user.explain ? user.explain : "설명이 없습니다."}
        </Text>
      </View>
    </View>
  );
};

export default Mypage;
