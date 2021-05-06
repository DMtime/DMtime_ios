import { useState } from "react";
import { board, post } from "../../../models/board";

const usePost = () => {
  const [post, setPost] = useState<post>({
    content: "로딩중입니다.",
    is_anonymous: false,
    id: -1,
    images: [],
    number_of_likes: 0,
    number_of_dislikes: 0,
    posted_datetime: "",
    is_mine: false,
    posted_gallery: {} as board,
    title: "로딩중입니다.",
    uploader: {
      username: "로딩중",
    },
    views: 0,
    my_reaction: "none",
  });
  return {
    post,
    setPost,
  };
};

export default usePost;
