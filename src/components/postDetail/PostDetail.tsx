import React, { FC, useState } from "react";
import { Alert, ScrollView } from "react-native";
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
import { getImageUrl } from "../../hooks/api/image";
import DidmountCatcher from "../default/navigation/DidmountCatcher";

type RootStackParamList = {
  postDetail: { postId: number };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "postDetail">;

const PostDetail: FC = () => {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  const route = useRoute<ProfileScreenRouteProp>();

  const postid = route.params.postId;

  const {
    post,
    setToggleDisLike,
    setToggleLike,
    refreshPost,
    deletePost,
  } = usePostUseCase(postid);
  const {
    comments,
    addComment,
    refreshComment,
    deleteComment,
  } = useCommentUseCase(postid);

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

  const imageUrls = post.images.map((fileName: string) =>
    getImageUrl(fileName)
  );

  const refreshPostDetail = async () => {
    await refreshComment();
    await refreshPost();
  };

  const deletePostWithId = () => {
    Alert.alert(
      "게시물 삭제",
      "게시물을 삭제 하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: async () => {
            await deletePost(post.id);
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
    deletePost(post.id);
  };

  const deleteCommentAndRefresh = async (id: number) => {
    Alert.alert(
      "댓글 삭제",
      "게시물을 삭제 하시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "확인",
          onPress: async () => {
            await deleteComment(id);
            await refreshComment();
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <DidmountCatcher style={S.PostDetail} mountHandler={refreshPostDetail}>
        <Navigation goBack={goBack} />
        <PostDetailHeader
          date={post.posted_datetime}
          like={post.number_of_likes}
          writer={post.uploader.username}
          title={post.title}
          deletePost={deletePostWithId}
          isMine={post.is_mine}
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
          reaction={post.my_reaction}
        />
        <Comments
          comments={comments}
          addComment={addPostContent}
          deleteComment={deleteCommentAndRefresh}
        />
        <Input addComment={addPostContent} />
      </DidmountCatcher>
      <Modal imageUrls={imageUrls} modal={modal} setModal={setModal} />
    </>
  );
};

export default PostDetail;
