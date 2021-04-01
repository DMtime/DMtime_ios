import React from "react";
import { ScrollView } from "react-native";
import BoardList from "./boardList";
import S from "./style";
import useBoardListUseCase from "../../hooks/useCase/board/useBoardListUseCase";
import { board } from "../../models/board";

const Main = () => {
  const { boardList } = useBoardListUseCase(true);
  console.log(boardList);
  const renderBoardList = (boardList: board[]) =>
    boardList.map((board) => (
      <BoardList boardListTitle={board.name} boardId={board.id} />
    ));
  return (
    <ScrollView style={S.Main}>
      {renderBoardList(boardList ? boardList : [])}
    </ScrollView>
  );
};

export default Main;
