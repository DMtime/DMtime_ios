import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { post } from "../../../models/board";
import BoardDetailItem from "../../boardDetail/boardDetailItem";
import S from "../style";

interface Props {
  posts: post[];
  type?: string;
}

const MypagePosts: FC<Props> = ({ posts, type }) => {
  const renderedPost = useMemo(
    () =>
      posts.map((post) => (
        <BoardDetailItem
          date={post.posted_datetime}
          title={post.title}
          writer={post.uploader.username}
          like={post.number_of_likes}
          id={post.id}
          key={`${type} ${post.id}`}
        />
      )),
    [posts]
  );
  return <View style={S.PostWrapper}>{renderedPost}</View>;
};

export default MypagePosts;
