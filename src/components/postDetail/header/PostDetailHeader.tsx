import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import S from "../style";

interface Props {
  title: string;
  writer: string;
  date: string;
  like: number;
  deletePost: () => void;
  isMine: boolean;
}

const PostDetailBody: FC<Props> = ({
  title,
  writer,
  date,
  like,
  deletePost,
  isMine,
}) => {
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
          {isMine ? (
            <TouchableOpacity onPress={deletePost}>
              <Text style={S.deleteButton}>삭제하기</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
          <Text style={S.Info}>추천수</Text>
          <Text style={S.InfoText}>{like}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostDetailBody;
