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
  toggleDislike: () => void;
  toggleLike: () => void;
}

const PostDetailFooter: FC<Props> = ({
  like,
  dislike,
  toggleDislike,
  toggleLike,
}) => {
  return (
    <View style={S.Footer}>
      <View style={S.LikeButtonWrapper}>
        <TouchableOpacity style={S.LikeButton} onPress={toggleLike}>
          <Image source={likeImage} style={S.LikeButtonImage} />
          <Text>{like}</Text>
        </TouchableOpacity>
        <View style={S.ButtonLine} />
        <TouchableOpacity style={S.LikeButton} onPress={toggleDislike}>
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
