import React from "react";
import { ScrollView, Text, View } from "react-native";
import S from "./style";
import BoardDetailItem from "./boardDetailItem";
import usePostListUseCase from "../../hooks/useCase/post/usePostListUseCase";
import { post } from "../../models/board";

const BoardDetail = () => {
  const { postList } = usePostListUseCase(1);
  const renderPostList = (postList: post[]) =>
    postList.map((post: post) => (
      <BoardDetailItem
        date={post.posted_datetime}
        title={post.title}
        writer={post.uploader.username}
        like={post.likes}
      />
    ));
  return (
    <View style={S.BoardDetail}>
      <View style={S.BoardDetailTitleWrapper}>
        <Text style={S.BoardDetailTitle}>기본 게시판</Text>
      </View>
      <ScrollView style={S.BoardDetailWrapper}>
        {renderPostList(postList)}
      </ScrollView>
    </View>
  );
};

export default BoardDetail;
