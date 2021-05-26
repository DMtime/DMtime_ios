import AddPostRequestDTO from "../../../models/dto/request/postRequest";
import { addImage } from "../../api/image";
import { addPostRequest } from "../../api/post";
import usePostWrite from "../../domain/post/usePostWrite";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";

const usePostControlUseCase = (id?: number) => {
  const navigation = useNavigation();
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
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
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
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };

  return {
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
