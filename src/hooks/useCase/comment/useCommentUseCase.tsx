import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  deleteCommentRequest,
  getCommentsRequest,
  setCommentRequest,
} from "../../api/comment";
import useComment from "../../domain/comment/useComment";
import Toast from "react-native-simple-toast";

const useCommentUseCase = (id: number) => {
  const { setComments, comments, setPage, page } = useComment();
  const navigation = useNavigation();

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
      await setCommentRequest(isAnonymous, content, postId, upperCaseCommentId);
      getCommentsAndSetState();
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };

  const refreshComment = async () => {
    await getCommentsAndSetState();
  };

  const deleteComment = async (id: number) => {
    try {
      await deleteCommentRequest(id);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
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
    deleteComment,
  };
};

export default useCommentUseCase;
