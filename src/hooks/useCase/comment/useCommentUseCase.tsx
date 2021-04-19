import { useEffect } from "react";
import { getCommentsRequest, setCommentsRequest } from "../../api/comment";
import useComment from "../../domain/comment/useComment";
const useCommentUseCase = (id: number) => {
  const { setComments, comments, setPage, page } = useComment();

  const getCommentsAndSetState = async () => {
    const comments = await getCommentsRequest(id, page);
    setComments(comments);
  };

  const getNextCommentAndSetState = async () => {
    await getCommentsRequest(id, page + 1);
    setPage((page) => page + 1);
  };

  const addComment = async (
    isAnonymous: boolean,
    content: string,
    postId: number,
    upperCaseCommentId?: number
  ) => {
    try {
      await setCommentsRequest(
        isAnonymous,
        content,
        postId,
        upperCaseCommentId
      );
      getCommentsAndSetState();
    } catch (error) {
      console.log(error);
    }
  };

  const refreshComment = async () => {
    await getCommentsAndSetState();
  };

  useEffect(() => {
    getCommentsAndSetState();
  }, []);

  return {
    setComments,
    comments,
    getNextCommentAndSetState,
    addComment,
    refreshComment,
  };
};

export default useCommentUseCase;
