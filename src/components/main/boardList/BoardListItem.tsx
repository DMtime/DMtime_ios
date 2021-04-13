import React, { FC } from "react";
import { View, Text } from "react-native";
import S from "../style";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  title: string;
  date: string;
  id: number;
}

const BoardListItem: FC<Props> = ({ title, date, id }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("PostDetail", { postId: id });
  };
  return (
    <TouchableOpacity
      style={S.MainBoardListItem}
      activeOpacity={1}
      onPress={onPress}
    >
      <Text style={S.MainBoardListItemTitle}>{title}</Text>
      <Text style={S.MainBoardListItemDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default BoardListItem;
