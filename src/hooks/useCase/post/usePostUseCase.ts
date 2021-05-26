import { useEffect } from "react";
import usePost from "../../domain/post/usePost";
import {
  deletePostRequest,
  getPost,
  removePostDisLikeRequest,
  removePostLikeRequest,
  setPostDisLikeRequest,
  setPostLikeRequest,
} from "../../api/post";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";

const usePostUseCase = (id: number) => {
  const navigation = useNavigation();
  const { post, setPost } = usePost();
  const setPostReaction = (reaction: "none" | "like" | "dislike") => {
    setPost((post) => ({ ...post, my_reaction: reaction }));
  };

  const setPostLikeCount = (like: number) => {
    setPost((post) => ({ ...post, number_of_likes: like }));
  };

  const setPostDisLikeCount = (dislike: number) => {
    setPost((post) => ({ ...post, number_of_dislikes: dislike }));
  };

  const getPostAndSetState = async () => {
    try {
      const data = await getPost(id);
      setPost(data);
    } catch (error) {
      switch (error.response.status) {
        case 401: {
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
        }
      }
    }
  };

  const setToggleLike = async (id: number) => {
    switch (post.my_reaction) {
      case "like":
        await removeLike(id);
        break;
      case "dislike":
        await removeDisLike(id);
        await setLike(id);
        break;
      case "none":
        await setLike(id);
        break;
    }
  };

  const setToggleDisLike = async (id: number) => {
    switch (post.my_reaction) {
      case "dislike":
        await removeDisLike(id);
      case "like":
        await removeLike(id);
        await setDislike(id);
      case "none":
        await setDislike(id);
    }
  };

  const setDislike = async (id: number) => {
    try {
      await setPostDisLikeRequest(id);
      setPostReaction("dislike");
      setPostDisLikeCount(post.number_of_dislikes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const setLike = async (id: number) => {
    try {
      await setPostLikeRequest(id);
      setPostReaction("like");
      setPostLikeCount(post.number_of_likes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const removeDisLike = async (id: number) => {
    try {
      await removePostDisLikeRequest(id);
      setPostReaction("none");
      setPostDisLikeCount(post.number_of_dislikes - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async (id: number) => {
    try {
      await removePostLikeRequest(id);
      setPostReaction("none");
      setPostLikeCount(post.number_of_likes - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPost = async () => {
    await getPostAndSetState();
  };

  const deletePost = async (boardId: number) => {
    try {
      deletePostRequest(boardId);
    } catch (error) {}
  };

  useEffect(() => {
    getPostAndSetState();
  }, []);

  return {
    post,
    setPost,
    deletePost,
    setPostLikeRequest,
    setToggleDisLike,
    setToggleLike,
    refreshPost,
  };
};

export default usePostUseCase;
