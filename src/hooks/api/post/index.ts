import { post } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";
import { AddPostRequest } from "../../../models/dto/request/postRequest";

export const getPostListRequest = async (
  id: string,
  page: number
): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ posts: post[] }>(
      `/board/posts?gallery-id=${id}&page=${page}&per-page=30`
    );
    return data.posts;
  } catch (error) {
    throw error.response.status;
  }
};

export const getPopularPostList = async (page: number): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<post[]>(
      `/board/posts/hot?page=${page}&per-page=${20}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const addPostRequest = async (
  boardId: string,
  { content, is_anonymous, images, title }: AddPostRequest
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

export const patchPostRequest = async (post: post) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.patch(`/board/posts/${post.id}`);
  } catch (error) {
    throw error;
  }
};

export const deletePostRequest = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const setPostLikeRequest = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/posts/${id}/like`);
  } catch (error) {
    throw error;
  }
};

export const setPostDisLikeRequest = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post(`/board/posts/${id}/dislike`);
  } catch (error) {
    throw error;
  }
};

export const removePostLikeRequest = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}/like`);
  } catch (error) {
    throw error;
  }
};

export const removePostDisLikeRequest = async (id: number) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/posts/${id}/dislike`);
  } catch (error) {
    throw error;
  }
};

export const getUserLikePostRequest = async (
  username: string,
  page: number
): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ posts: post[] }>(
      `/users/${username}/liked-posts?page=${page}&per-page=30`
    );
    return data.posts;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export const getUserWriteCommentPostRequest = async (
  username: string,
  page: number
): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ posts: post[] }>(
      `/users/${username}/posts-wrote-comment?page=${page}&per-page=30`
    );
    return data.posts;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export const getUserPostRequest = async (
  username: string,
  page: number
): Promise<post[]> => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get<{ posts: post[] }>(
      `/board/posts?username=${username}&page=${page}&per-page=30`
    );
    return data.posts;
  } catch (error) {
    console.log(error.response);
    throw error.response.status;
  }
};
