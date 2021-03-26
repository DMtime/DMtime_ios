import React, { FC } from "react";
import { View } from "react-native";
import S from "../style";
import BoardListHeader from "./BoardListHeader";
import BoardListItem from "./BoardListItem";

interface Props {
  boardListTitle: string;
}

const BoardList: FC<Props> = ({ boardListTitle }) => {
  return (
    <View style={S.MainBoardList}>
      <BoardListHeader title={boardListTitle} />
      <BoardListItem date="3/18" title="오준상이 만든 react-native" />
      <BoardListItem date="3/18" title="오준상이 만든 react-native" />
      <BoardListItem date="3/18" title="오준상이 만든 react-native" />
    </View>
  );
};

export default BoardList;
