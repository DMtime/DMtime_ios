import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import S from "../style";
import {
  likeImage,
  dislikeImage,
  reportImage,
} from "../../../statics/postDetail";

interface Props {
  like: number;
  dislike: number;
}

const PostDetailFooter: FC<Props> = ({ like, dislike }) => {
  return (
    <View style={S.Footer}>
      <View style={S.LikeButtonWrapper}>
        <TouchableOpacity style={S.LikeButton}>
          <Image source={likeImage} style={S.LikeButtonImage} />
          <Text>{like}</Text>
        </TouchableOpacity>
        <View style={S.ButtonLine} />
        <TouchableOpacity style={S.LikeButton}>
          <Image source={dislikeImage} style={S.LikeButtonImage} />
          <Text>{dislike}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={S.ReportButton}>
        <Image source={reportImage} style={S.ReportButtonImage} />
        <Text>신고</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostDetailFooter;
