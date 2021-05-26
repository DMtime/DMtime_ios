import { useEffect } from "react";
import {
  getUserLikePostRequest,
  getUserWriteCommentPostRequest,
  getUserPostRequest,
} from "../../api/post";
import useUserPost from "../../domain/mypage/useUserPost";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";

const useUserPostUseCase = (username: string) => {
  const navigation = useNavigation();
  const { setMypagePost, mypagePost, type, setType, page, setPage } =
    useUserPost();

  const getUserLikePostAndSetState = async (page: number) => {
    try {
      const posts = await getUserWriteCommentPostRequest(username, page);
      setMypagePost((state) => ({
        ...state,
        likePosts: posts,
      }));
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };

  const getUserPostAndSetState = async (page: number) => {
    try {
      const posts = await getUserPostRequest(username, page);
      setMypagePost((state) => ({
        ...state,
        writePosts: posts,
      }));
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };

  const getUserWriteCommentPostAndSetState = async (page: number) => {
    try {
      const posts = await getUserLikePostRequest(username, page);
      setMypagePost((state) => ({
        ...state,
        commentPosts: posts,
      }));
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };

  useEffect(() => {
    if (username === "로딩중") return;
    getUserLikePostAndSetState(page);
    getUserPostAndSetState(page);
    getUserWriteCommentPostAndSetState(page);
  }, [username, page]);

  return {
    mypagePost,
    setType,
    type,
  };
};

export default useUserPostUseCase;
