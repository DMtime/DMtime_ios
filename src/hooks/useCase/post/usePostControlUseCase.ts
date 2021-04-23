import AddPostRequestDTO from "../../../models/dto/request/postRequest";
import { addImage } from "../../api/image";
import { patchPost, addPostRequest } from "../../api/post";
import usePostWrite from "../../domain/post/usePostWrite";

const usePostControlUseCase = (id?: number) => {
  const {
    setPostContent,
    setPostTitle,
    setAnonymous,
    setImages,
    postContent,
    postTitle,
    anonymous,
    images,
  } = usePostWrite();

  const addImagesAndGetUrls = async (files: Blob[]) => {
    const requests = files.map(async (file) => {
      const image = await addImage(file);
      return image;
    });
    try {
      const urls = await Promise.all(requests);
      setImages(urls);
    } catch (error) {
      console.log(error.response);
    }
  };

  const addPost = async (
    boardId: string,
    title: string,
    content: string,
    images: string[],
    anonymous: boolean
  ) => {
    try {
      const requestDTO = new AddPostRequestDTO()
        .setAnonymous(anonymous)
        .setContent(content)
        .setImages(images)
        .setTitle(title);
      addPostRequest(boardId, requestDTO);
    } catch (error) {
      throw error;
    }
  };

  return {
    patchPost,
    addPost,
    setPostContent,
    setPostTitle,
    setAnonymous,
    postContent,
    postTitle,
    anonymous,
    images,
    addImagesAndGetUrls,
  };
};

export default usePostControlUseCase;
