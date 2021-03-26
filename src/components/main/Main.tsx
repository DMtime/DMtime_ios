import React from "react";
import { ScrollView } from "react-native";
import BoardList from "./boardList";
import S from "./style";

const Main = () => {
  return (
    <ScrollView style={S.Main}>
      <BoardList boardListTitle="hello" />
      <BoardList boardListTitle="hello" />
      <BoardList boardListTitle="hello" />
      <BoardList boardListTitle="hello" />
    </ScrollView>
  );
};

export default Main;
