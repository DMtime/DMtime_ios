import { useEffect } from "react";
import { getComments } from "../../api/comment";
import useComment from "../../domain/comment/useComment";

const useCommentUseCase = (id: number) => {
  const { setComments, comments, setPage, page } = useComment();
  const getCommentsAndSetState = () => {
    getComments(id, page);
  };

  const getNextCommentAndSetState = () => {
    getComments(id, page + 1);
    setPage((page) => page + 1);
  };

  useEffect(() => {
    getCommentsAndSetState();
  }, []);

  return {
    setComments,
    comments,
    getNextCommentAndSetState,
  };
};

export default useCommentUseCase;
