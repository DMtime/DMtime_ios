import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import {
  Button,
  Image,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import config from "../../config/config";
import { useCamera } from "../../hooks/permission/usePermission";
import usePostControlUseCase from "../../hooks/useCase/post/usePostControlUseCase";
import { leftArrowImage } from "../../statics/postDetail";
import Checkbox from "../default/checkbox";
import S from "./style";

type RootStackParamList = {
  postWrite: { boardId: string };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "postWrite">;

const PostWrite = () => {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const boardId: string = useMemo(
    () => (route.params ? route.params.boardId : ""),
    [route]
  );

  const {
    setAnonymous,
    anonymous,
    postContent,
    setPostContent,
    postTitle,
    setPostTitle,
    images,
    addPost,
    addImagesAndGetUrls,
  } = usePostControlUseCase();
  const {
    requestCameraPermission,
    requestGalleryPermission,
    openCamera,
    openGallery,
    files,
  } = useCamera();
  const contentChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPostContent(e.nativeEvent.text);
  };
  const titleChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPostTitle(e.nativeEvent.text);
  };

  const submitButtonClickHandler = async () => {
    try {
      await addPost(boardId, postTitle, postContent, images, anonymous);
      navigation.goBack();
    } catch (error) {}
  };

  const goBackButtonClickHandler = () => {
    navigation.goBack();
  };
  const renderedImage = useMemo(
    () =>
      images.map((image, index) => {
        return (
          <Image
            source={{ uri: `${config.IMAGE_URL}${image}` }}
            style={S.Image}
            key={index}
          />
        );
      }),
    [images]
  );

  useEffect(() => {
    addImagesAndGetUrls(files);
  }, [files]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  useEffect(() => {
    if (boardId.length < 0) {
      navigation.navigate("Main");
    }
    requestCameraPermission();
    requestGalleryPermission();
  }, []);
  return (
    <View style={S.PostWrite}>
      <View style={S.NavigationWrapper}>
        <TouchableOpacity onPress={goBackButtonClickHandler}>
          <Image source={leftArrowImage} style={S.NavigationArrow} />
        </TouchableOpacity>
        <Button title="게시" onPress={submitButtonClickHandler} color="black" />
      </View>
      <ScrollView style={S.Body}>
        <TextInput
          style={S.Title}
          placeholder="제목을 입력하세요"
          onChange={titleChangeHandler}
          value={postTitle}
        />
        <TextInput
          style={S.Description}
          multiline={true}
          placeholder="내용을 입력하세요."
          onChange={contentChangeHandler}
          scrollEnabled={false}
          value={postContent}
        />
        <ScrollView horizontal={true} style={S.ImageWrapper}>
          {renderedImage}
        </ScrollView>
      </ScrollView>
      <View style={S.Footer}>
        <Checkbox setValue={setAnonymous} value={anonymous}>
          익명으로 작성
        </Checkbox>
        <TouchableOpacity style={S.Button} onPress={openGallery}>
          <Text style={S.ButtonText}>사진 첨부</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostWrite;
