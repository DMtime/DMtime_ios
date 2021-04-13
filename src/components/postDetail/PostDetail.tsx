import React, { FC, useState } from "react";
import { ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import useCommentUseCase from "../../hooks/useCase/comment/useCommentUseCase";
import usePostUseCase from "../../hooks/useCase/post/usePostUseCase";
import PostDetailBody from "./body";
import Comments from "./comments";
import PostDetailFooter from "./footer";
import PostDetailHeader from "./header";
import Input from "./input";

import S from "./style";
import Navigation from "./navigation";
import Modal from "./modal/Modal";

type RootStackParamList = {
  postDetail: { postId: number };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "postDetail">;

const PostDetail: FC = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();
  const postid = route.params.postId;
  const { post, setToggleDisLike, setToggleLike } = usePostUseCase(postid);
  const { comments, addComment } = useCommentUseCase(postid);
  const addPostContent = (
    isAnonymous: boolean,
    content: string,
    upperCaseCommentId?: number
  ) => addComment(isAnonymous, content, post.id, upperCaseCommentId);
  const goBack = () => {
    navigation.goBack();
  };

  const toggleLike = () => {
    setToggleLike(post.id);
  };
  const toggleDisLike = () => {
    setToggleDisLike(post.id);
  };
  // const imageUrls = Object.values(imageIds).map((fileName: string) =>
  //   getImageUrl(fileName)
  // );
  const imageUrls = [
    "https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80",
    "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
    "https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80",
    "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg",
  ];

  return (
    <>
      <ScrollView style={S.PostDetail}>
        <Navigation goBack={goBack} />
        <PostDetailHeader
          date={post.posted_datetime}
          like={post.number_of_likes}
          writer={post.uploader.username}
          title={post.title}
        />
        <PostDetailBody
          content={post.content}
          imageUrls={imageUrls}
          setModal={setModal}
        />
        <PostDetailFooter
          like={post.number_of_likes}
          dislike={post.number_of_dislikes}
          toggleDislike={toggleDisLike}
          toggleLike={toggleLike}
        />
        <Comments comments={comments} addComment={addPostContent} />
        <Input addComment={addPostContent} />
      </ScrollView>
      <Modal imageUrls={imageUrls} modal={modal} setModal={setModal} />
    </>
  );
};

export default PostDetail;
