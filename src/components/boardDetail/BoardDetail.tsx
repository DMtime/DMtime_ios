import React, { useEffect, useMemo } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import S from "./style";
import BoardDetailItem from "./boardDetailItem";
import usePostListUseCase from "../../hooks/useCase/post/usePostListUseCase";
import { post } from "../../models/board";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { writeImage } from "../../statics/boardDetail";
import DidmountCatcher from "../default/navigation/DidmountCatcher";

type RootStackParamList = {
  boardDetail: { boardId: string; boardTitle: string };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "boardDetail">;

const BoardDetail = () => {
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const { boardId, boardTitle } = route.params;
  const { postList, refreshPostList, getNextPage } = usePostListUseCase(
    boardId
  );

  const writeButtonPressHandler = () => {
    navigation.navigate("PostWrite", {
      boardId,
    });
  };

  const renderedPostList = useMemo(
    () =>
      postList.map((post: post) => (
        <BoardDetailItem
          date={post.posted_datetime}
          title={post.title}
          writer={post.uploader.username}
          like={post.number_of_likes}
          id={post.id}
          key={post.id}
        />
      )),
    [postList]
  );

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const postListScrollHandler = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    if (isCloseToBottom(e.nativeEvent)) getNextPage();
  };

  useEffect(() => {
    refreshPostList();
  }, [boardId]);

  return (
    <View style={S.BoardDetail}>
      <View style={S.BoardDetailTitleWrapper}>
        <Text style={S.BoardDetailTitle}>{boardTitle}</Text>
        <TouchableOpacity onPress={writeButtonPressHandler}>
          <Image source={writeImage} />
        </TouchableOpacity>
      </View>
      <DidmountCatcher
        onScroll={postListScrollHandler}
        scrollEventThrottle={100}
        style={S.BoardDetailWrapper}
        mountHandler={refreshPostList}
      >
        {renderedPostList}
      </DidmountCatcher>
    </View>
  );
};

export default BoardDetail;
