import React, { useMemo } from "react";
import { View } from "react-native";
import BoardList from "./boardList";
import S from "./style";
import useBoardListUseCase from "../../hooks/useCase/board/useBoardListUseCase";
import DidmountCatcher from "../default/navigation/DidmountCatcher";

const Main = () => {
  const { boardList, refreshBoardList } = useBoardListUseCase(true);

  const renderedBoardList = useMemo(
    () =>
      boardList.map((board) => (
        <BoardList
          boardListTitle={board.name}
          boardId={board.gallery_id}
          key={board.name}
        />
      )),
    [boardList]
  );

  return (
    <DidmountCatcher mountHandler={refreshBoardList}>
      <View style={S.Main}>{renderedBoardList}</View>
    </DidmountCatcher>
  );
};

export default Main;
