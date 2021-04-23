import React, { FC, useMemo } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import config from "../../../../config/config";
import S from "../../style";

interface Props {
  imageUrls: string[];
  onClick?: () => void;
}

const PostImage: FC<Props> = ({ imageUrls, onClick }) => {
  const renderedImage = useMemo(
    () =>
      imageUrls.map((imageUrl) => (
        <TouchableOpacity onPress={onClick}>
          <Image
            style={S.Image}
            source={{ uri: `${config.IMAGE_URL}${imageUrl}` }}
            key={imageUrl}
          />
        </TouchableOpacity>
      )),
    [imageUrls]
  );
  return (
    <ScrollView
      horizontal={true}
      style={S.ImageWrapper}
      showsHorizontalScrollIndicator={false}
    >
      {renderedImage}
    </ScrollView>
  );
};

export default PostImage;
