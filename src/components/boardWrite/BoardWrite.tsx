import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  Button,
  Image,
  NativeSyntheticEvent,
  ScrollView,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import useBoardControlUseCase from "../../hooks/useCase/board/useBoardControlUseCase";
import { leftArrowImage } from "../../statics/postDetail";
import S from "./style";

const BoardWrite: FC = () => {
  const navigation = useNavigation();
  const {
    addBoard,
    setTitle,
    setDescription,
    setGalleryId,
    board,
  } = useBoardControlUseCase();

  const submitButtonClickHandler = async () => {
    const { name, explain, gallery_id } = board;
    await addBoard(name, explain, 2, gallery_id);
    navigation.goBack();
  };

  const goBackButtonClickHandler = () => {
    navigation.goBack();
  };

  const titleInputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTitle(e.nativeEvent.text);
  };

  const descriptionInputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setDescription(e.nativeEvent.text);
  };

  const galleryIdInputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setGalleryId(e.nativeEvent.text);
  };

  return (
    <View style={S.BoardWrite}>
      <View style={S.NavigationWrapper}>
        <TouchableOpacity onPress={goBackButtonClickHandler}>
          <Image source={leftArrowImage} style={S.NavigationArrow} />
        </TouchableOpacity>
        <Button title="게시" onPress={submitButtonClickHandler} color="black" />
      </View>
      <ScrollView>
        <TextInput
          style={S.Title}
          placeholder="게시판 이름을 입력하세요."
          onChange={titleInputChangeHandler}
        />
        <TextInput
          style={S.SubTitle}
          placeholder="게시판 아이디을 입력하세요."
          onChange={descriptionInputChangeHandler}
        />
        <TextInput
          style={S.Description}
          placeholder="게시판 설명을 입력하세요."
          multiline={true}
          scrollEnabled={false}
          onChange={galleryIdInputChangeHandler}
        />
      </ScrollView>
    </View>
  );
};

export default BoardWrite;
