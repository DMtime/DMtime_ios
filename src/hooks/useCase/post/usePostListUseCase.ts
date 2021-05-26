import { useEffect, useState } from "react";
import { getPostListRequest } from "../../api/post";
import usePostList from "../../domain/post/usePostList";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";

const usePostListUseCase = (id: string) => {
  const navigation = useNavigation();
  const { postList, setPostList, setPage, page } = usePostList(id);
  const [loading, setLoading] = useState(false);
  const [stopPage, setStopPage] = useState(false);
  const getPostListAndSetState = async () => {
    setLoading(true);
    try {
      const data = await getPostListRequest(id, page);
      setPostList((prevData) => [...prevData, ...data]);
    } catch (error) {
      if (!error.response) return;
      switch (error.response.status) {
        case 404: {
          setStopPage(true);
        }
        case 401: {
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
        }
      }
    }
    setLoading(false);
  };

  const getNextPage = async () => {
    if (loading || stopPage) return;
    setPage((page) => page + 1);
  };

  const refreshPostList = async () => {
    setLoading(true);
    try {
      const data = await getPostListRequest(id, 1);
      setPage(2);
      setPostList(data);
    } catch (error) {
      if (!error.response) return;
      switch (error.response.status) {
        case 404: {
          setStopPage(true);
        }
        case 401: {
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getPostListAndSetState();
  }, [page]);

  return {
    postList,
    setPostList,
    getNextPage,
    refreshPostList,
  };
};

export default usePostListUseCase;
