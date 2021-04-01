import React, { FC } from "react";
import { View } from "react-native";
import S from "../style";
import usePostListUseCase from "../../../hooks/useCase/post/usePostListUseCase";
import BoardListHeader from "./BoardListHeader";
import BoardListItem from "./BoardListItem";
import { post } from "../../../models/board";

interface Props {
  boardListTitle: string;
  boardId: number;
}

const BoardList: FC<Props> = ({ boardListTitle, boardId }) => {
  const { postList } = usePostListUseCase(boardId);
  const renderPostList = (postList: post[]) =>
    postList.map((post: post) => (
      <BoardListItem date={post.posted_datetime} title={post.title} />
    ));
  return (
    <View style={S.MainBoardList}>
      <BoardListHeader title={boardListTitle} />
      {renderPostList(postList)}
    </View>
  );
};

export default BoardList;
