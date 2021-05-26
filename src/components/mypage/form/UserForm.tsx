import React, { FC, useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  Alert,
} from "react-native";
import { user } from "../../../models/user";
import S from "../style";
import { defaultUserImage } from "../../../statics/main";
import {
  userImgChangeButtonImage,
  userInfoFixButtonImage,
} from "../../../statics/mypage";
import { useCamera } from "../../../hooks/permission/usePermission";

interface Props {
  user: user;
  setChangeInfo: (value: boolean) => void;
  setUserInfo: (
    username: string,
    newUserName: string,
    explain: string,
    profileImageId: string
  ) => Promise<void>;
  setUser: (user: user) => void;
}

const UserForm: FC<Props> = ({ user, setChangeInfo, setUserInfo, setUser }) => {
  const { requestGalleryPermission, openGallery, files, addImagesAndGetUrls } =
    useCamera();
  const [newUser, setNewUser] = useState<user>(user);
  const [newImageId, setImageId] = useState<string>(null);
  useEffect(() => {
    requestGalleryPermission();
  }, []);

  const changeImageButtonClickHandler = () => {
    openGallery(false);
  };

  const changeInfoButtonClickHandler = async () => {
    try {
      await setUserInfo(
        user.username,
        newUser.username,
        newUser.explain,
        newImageId
      );
      setChangeInfo(false);
      setUser(newUser);
    } catch (error) {
      Alert.alert("오류", "오류가 발생했습니다.");
    }
  };

  const nameInputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    e.persist();
    setNewUser((user) => ({
      ...user,
      username: e.nativeEvent.text,
    }));
  };

  const descriptionInputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    e.persist();
    setNewUser((user) => ({
      ...user,
      explain: e.nativeEvent.text,
    }));
  };

  useEffect(() => {
    if (!files[0]) return;
    setNewUser((user) => ({
      ...user,
      profile_image: (files[0] as any).uri,
    }));
    addImagesAndGetUrls(files).then((urls) => {
      console.log(urls);
      setImageId(urls[0]);
    });
  }, [files]);
  return (
    <View style={S.Header}>
      <View style={S.FixButtonWrapper}>
        <TouchableOpacity onPress={changeInfoButtonClickHandler}>
          <Image source={userInfoFixButtonImage} style={S.FixButton} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            bottom: 15,
            zIndex: 10,
          }}
          onPress={changeImageButtonClickHandler}
        >
          <Image
            source={userImgChangeButtonImage}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>
        <Image
          style={S.HeaderUserImage}
          source={
            newUser.profile_image
              ? { uri: newUser.profile_image }
              : defaultUserImage
          }
        />
      </View>
      <TextInput
        style={S.HeaderUserName}
        defaultValue={newUser.username}
        onChange={nameInputChangeHandler}
      />
      <TextInput
        style={S.HeaderUserDescription}
        defaultValue={user.explain ? newUser.explain : "설명이 없습니다."}
        onChange={descriptionInputChangeHandler}
      />
    </View>
  );
};

export default UserForm;
