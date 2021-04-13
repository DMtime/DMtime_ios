import { useState } from "react";
import { board, post } from "../../../models/board";

const usePost = () => {
  const [post, setPost] = useState<post>({
    content: "대마고는 대덕공고다",
    is_anonymous: false,
    id: 1,
    image_ids: {},
    likes: 1,
    posted_datetime: "4/6",
    posted_gallery: {} as board,
    title: "테스트",
    uploader: {
      username: "오준상",
    },
    views: 1,
    my_reaction: "none",
  });
  return {
    post,
    setPost,
  };
};

export default usePost;
