import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import S from "../style";
import { detailButton } from "../../../statics/main";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  boardId: string;
}

const BoardListHeader: FC<Props> = ({ title, boardId }) => {
  const navigation = useNavigation();
  const headerClickHandler = () => {
    navigation.navigate("BoardDetail", {
      boardId: boardId,
      boardTitle: title,
    });
  };
  return (
    <TouchableOpacity
      style={S.MainBoardListHeader}
      activeOpacity={1}
      onPress={headerClickHandler}
    >
      <Text style={S.MainBoardListTitle}>{title}</Text>
      <View>
        <Image source={detailButton} style={S.MainBoardListDetailButton} />
      </View>
    </TouchableOpacity>
  );
};

export default BoardListHeader;
