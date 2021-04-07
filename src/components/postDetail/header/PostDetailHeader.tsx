import React, { FC } from "react";
import { Text, View } from "react-native";
import S from "../style";

interface Props {
  title: string;
  writer: string;
  date: string;
  like: number;
}

const PostDetailBody: FC<Props> = ({ title, writer, date, like }) => {
  return (
    <View style={S.Header}>
      <Text style={S.Title}>{title}</Text>
      <View style={S.InfoWrapper}>
        <View style={S.InfoView}>
          <Text style={S.Info}>글쓴이</Text>
          <Text style={S.InfoText}>{writer}</Text>
          <View style={S.Line} />
          <Text style={S.Info}>날짜</Text>
          <Text style={S.InfoText}>{date}</Text>
        </View>
        <View style={S.InfoView}>
          <Text style={S.Info}>추천수</Text>
          <Text style={S.InfoText}>{like}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostDetailBody;
