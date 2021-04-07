import React, { FC } from "react";
import { Text, View } from "react-native";
import S from "../style";

interface Props {
  content: string;
}

const PostDetailBody: FC<Props> = ({ content }) => {
  return (
    <View style={S.Body}>
      <Text style={S.Content}>{content}</Text>
    </View>
  );
};

export default PostDetailBody;
