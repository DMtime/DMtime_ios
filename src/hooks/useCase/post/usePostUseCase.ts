import { useEffect } from "react";
import usePost from "../../domain/post/usePost";
import { deletePost, getPost, setPostLike } from "../../api/post";

const usePostUseCase = (id: number) => {
  const { post, setPost } = usePost();

  const getPostAndSetState = async () => {
    const data = await getPost(id);
    setPost(data);
  };

  useEffect(() => {
    getPostAndSetState();
  }, []);

  return {
    post,
    setPost,
    deletePost,
    setPostLike,
  };
};

export default usePostUseCase;
