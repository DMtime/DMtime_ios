import React, { FC, useMemo } from "react";
import { ScrollView, View } from "react-native";
import S from "../style";
import usePostListUseCase from "../../../hooks/useCase/post/usePostListUseCase";
import BoardListHeader from "./BoardListHeader";
import BoardListItem from "./BoardListItem";

interface Props {
  boardListTitle: string;
  boardId: string;
}

const BoardList: FC<Props> = ({ boardListTitle, boardId }) => {
  const { postList } = usePostListUseCase(boardId);
  const renderedPostList = useMemo(() => {
    let renderPostList = [];
    for (let i = 0; i < postList.length; i++) {
      if (i > 3) break;
      const { title, id, posted_datetime } = postList[i];
      renderPostList.push(
        <BoardListItem title={title} date={posted_datetime} id={id} key={id} />
      );
    }
    return renderPostList;
  }, [postList]);

  return (
    <View style={S.MainBoardList}>
      <BoardListHeader title={boardListTitle} boardId={boardId} />
      <ScrollView>{renderedPostList}</ScrollView>
    </View>
  );
};

export default BoardList;
