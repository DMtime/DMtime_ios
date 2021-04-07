import React, { FC } from "react";
import { ScrollView, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import useCommentUseCase from "../../hooks/useCase/comment/useCommentUseCase";
import usePostUseCase from "../../hooks/useCase/post/usePostUseCase";
import PostDetailBody from "./body";
import Comments from "./comments";
import PostDetailFooter from "./footer";
import PostDetailHeader from "./header";
import Input from "./input";

import S from "./style";

type RootStackParamList = {
  postDetail: { postId: number };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "postDetail">;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "postDetail"
>;

interface Props {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}

const PostDetail: FC<Props> = ({ route, navigation }) => {
  const { post } = usePostUseCase(1);
  const { comments } = useCommentUseCase(1);
  return (
    <ScrollView style={S.PostDetail}>
      <PostDetailHeader
        date={post.posted_datetime}
        like={post.likes}
        writer={post.uploader.username}
        title={post.title}
      />
      <PostDetailBody content={post.content} />
      <PostDetailFooter like={post.likes} dislike={1} />
      <Comments comments={comments} />
      <Input />
    </ScrollView>
  );
};

export default PostDetail;
