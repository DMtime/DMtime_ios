import { useEffect } from "react";
import usePost from "../../domain/post/usePost";
import {
  deletePostRequest,
  getPost,
  removePostDisLike,
  removePostLike,
  setPostDisLike,
  setPostLike,
} from "../../api/post";

const usePostUseCase = (id: number) => {
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
    const data = await getPost(id);
    setPost(data);
    console.log(data);
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
      await setPostDisLike(id);
      setPostReaction("dislike");
      setPostDisLikeCount(post.number_of_dislikes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const setLike = async (id: number) => {
    try {
      await setPostLike(id);
      setPostReaction("like");
      setPostLikeCount(post.number_of_likes + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const removeDisLike = async (id: number) => {
    try {
      await removePostDisLike(id);
      setPostReaction("none");
      setPostDisLikeCount(post.number_of_dislikes - 1);
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async (id: number) => {
    try {
      await removePostLike(id);
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
    setPostLike,
    setToggleDisLike,
    setToggleLike,
    refreshPost,
  };
};

export default usePostUseCase;
