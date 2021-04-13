import { comment } from "../../../models/comment";
import { getRequestWithAccessToken } from "../default";

export const getCommentsRequest = async (id: number, page: number) => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ comments: comment[] }>(
      `/board/comments?post-id=${id}&page=${page}&page-per=20`
    );
    return data.comments;
  } catch (error) {
    throw error;
  }
};

export const setCommentsRequest = async (
  isAnonymous: boolean,
  content: string,
  postId: number,
  upperCommentId?: number
) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/comments?post-id=${postId}`, {
      is_anonymous: isAnonymous,
      content,
      upper_comment_id: upperCommentId,
    });
  } catch (error) {
    throw error;
  }
};

export const patchComments = async (
  isAnonymous: boolean,
  content: string,
  postId: number,
  upperCommentId?: number
) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/comments?post-id=${postId}`, {
      is_anonymous: isAnonymous,
      content,
      upper_comment_id: upperCommentId,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteComments = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/comments/${id}`);
  } catch (error) {
    throw error;
  }
};
