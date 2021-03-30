import { useState } from "react";
import { post } from "../../../models/board";

const usePost = () => {
  const [post, setPost] = useState<post>();
  return {
    post,
    setPost,
  };
};

export default usePost;
