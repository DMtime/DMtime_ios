import React, { FC } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import S from "../style";
import { detailButton } from "../../../statics/main";

interface Props {
  title: string;
}

const BoardListHeader: FC<Props> = ({ title }) => {
  return (
    <View style={S.MainBoardListHeader}>
      <Text style={S.MainBoardListTitle}>{title}</Text>
      <TouchableOpacity>
        <Image source={detailButton} style={S.MainBoardListDetailButton} />
      </TouchableOpacity>
    </View>
  );
};

export default BoardListHeader;
