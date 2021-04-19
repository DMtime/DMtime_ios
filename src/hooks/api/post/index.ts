import { post } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";
import { IaddPostRequest } from "../../../models/dto/request/postRequest";

export const getPostList = async (
  id: string,
  page: number
): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ posts: post[] }>(
      `/board/posts?gallery-id=${id}&page=${page}&per-page=${20}`
    );
    return data.posts;
  } catch (error) {
    console.log(error.response);
    throw error.response.status;
  }
};

export const getPopularPostList = async (page: number): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<post[]>(
      `/board/posts/hot?page=${1}&per-page=${20}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const addPostRequest = async (
  boardId: string,
  { content, is_anonymous, images, title }: IaddPostRequest
) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/posts?gallery-id=${boardId}`, {
      content,
      is_anonymous,
      images,
      title,
    });
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id: number): Promise<post> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<post>(`/board/posts/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const patchPost = async (post: post) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.patch(`/board/posts/${post.id}`);
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const setPostLike = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/posts/${id}/like`);
  } catch (error) {
    throw error;
  }
};

export const setPostDisLike = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/posts/${id}/dislike`);
  } catch (error) {
    throw error;
  }
};

export const removePostLike = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}/like`);
  } catch (error) {
    throw error;
  }
};

export const removePostDisLike = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}/dislike`);
  } catch (error) {
    throw error;
  }
};
