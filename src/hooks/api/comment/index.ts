import { comment } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";

const request = getRequestWithAccessToken();

export const getComments = async (id: number, page: number) => {
  try {
    const { data } = await request.get<comment>(
      `/board/comments?post-id=${id}&page=${page}&page-per=20`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setComments = async (
  isAnonymous: boolean,
  content: string,
  postId: number,
  upperCommentId?: number
) => {
  try {
    await request.post(`/board/comments?post-id=${postId}`, {
      is_anonymous: isAnonymous,
      content,
      upper_comment_id: upperCommentId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const patchComments = async (
  isAnonymous: boolean,
  content: string,
  postId: number,
  upperCommentId?: number
) => {
  try {
    await request.post(`/board/comments?post-id=${postId}`, {
      is_anonymous: isAnonymous,
      content,
      upper_comment_id: upperCommentId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComments = async (id: number) => {
  try {
    await request.delete(`/board/comments/${id}`);
  } catch (error) {
    console.log(error);
  }
};
