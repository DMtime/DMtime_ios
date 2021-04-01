import { post } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";

const request = getRequestWithAccessToken();

export const getPostList = async (
  id: number,
  page: number
): Promise<post[]> => {
  try {
    const { data } = await request.get<post[]>(
      `/board/posts?gallery-id=${id}&page=${page}&per-page=${20}`
    );
    return data;
  } catch (error) {
    throw error.response.status;
  }
};

export const getPopularPostList = async (page: number): Promise<post[]> => {
  try {
    const { data } = await request.get<post[]>(
      `/board/posts/hot?page=${page}&per-page=${20}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const setPost = async (post: post) => {
  try {
    await request.post("/board/posts", post);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (id: number): Promise<post> => {
  try {
    const { data } = await request.get<post>(`/board/posts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patchPost = async (post: post) => {
  try {
    await request.patch(`board/posts/${post.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: number) => {
  try {
    await request.delete(`board/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const setPostLike = async (id: number) => {
  try {
    await request.patch(`board/posts/${id}/like`);
  } catch (error) {
    console.log(error);
  }
};
