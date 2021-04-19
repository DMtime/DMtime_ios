import { useEffect, useState } from "react";
import { getPostList } from "../../api/post";
import usePostList from "../../domain/post/usePostList";

const usePostListUseCase = (id: string) => {
  const { postList, setPostList, setPage, page } = usePostList(id);
  const [loading, setLoading] = useState(false);
  const [stopPage, setStopPage] = useState(false);
  const getPostListAndSetState = async () => {
    setLoading(true);
    try {
      const data = await getPostList(id, page);
      setPostList((prevData) => [...prevData, ...data]);
    } catch (error) {
      if (!error.response) return;
      switch (error.response.status) {
        case 404: {
          setStopPage(true);
        }
      }
    }
    setLoading(false);
  };

  const getNextPage = async () => {
    if (loading || stopPage) return;
    setPage((page) => page + 1);
  };

  const refreshPostList = async () => {
    setLoading(true);
    try {
      const data = await getPostList(id, 1);
      setPage(2);
      setPostList(data);
    } catch (error) {
      if (!error.response) return;
      switch (error.response.status) {
        case 404: {
          setStopPage(true);
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getPostListAndSetState();
  }, [page]);

  return {
    postList,
    setPostList,
    getNextPage,
    refreshPostList,
  };
};

export default usePostListUseCase;
