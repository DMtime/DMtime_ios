import { useEffect } from "react";
import { getPost, getPostList } from "../../api/post";
import usePostList from "../../domain/post/usePostList";

const usePostUseCase = (id: number) => {
  const { postList, setPostList, setPage, page } = usePostList(id);

  const getPostListAndSetState = async () => {
    const data = await getPostList(id, page);
    setPostList(data);
  };

  const getNextPage = async () => {
    const data = await getPostList(id, page + 1);
    setPostList(data);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    getPostListAndSetState();
  }, []);

  return {
    postList,
    setPostList,
    getNextPage,
  };
};

export default usePostUseCase;
