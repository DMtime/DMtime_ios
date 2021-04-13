import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import S from "../style";
import PostImage from "./Image/PostImage";

interface Props {
  content: string;
  imageUrls: string[];
  setModal: (value: boolean) => void;
}

const PostDetailBody: FC<Props> = ({ content, imageUrls, setModal }) => {
  const onClick = () => {
    setModal(true);
  };
  return (
    <View style={S.Body}>
      <Text style={S.Content}>{content}</Text>
      {imageUrls.length > 0 ? (
        <PostImage imageUrls={imageUrls} onClick={onClick} />
      ) : (
        <View />
      )}
    </View>
  );
};

export default PostDetailBody;
