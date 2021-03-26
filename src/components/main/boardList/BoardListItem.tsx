import React, { FC } from "react";
import { View, Text } from "react-native";
import S from "../style";

interface Props {
  title: string;
  date: string;
}

const BoardListItem: FC<Props> = ({ title, date }) => {
  return (
    <View style={S.MainBoardListItem}>
      <Text style={S.MainBoardListItemTitle}>{title}</Text>
      <Text style={S.MainBoardListItemDate}>{date}</Text>
    </View>
  );
};

export default BoardListItem;
