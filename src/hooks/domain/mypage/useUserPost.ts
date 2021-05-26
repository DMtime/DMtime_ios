import { useState } from "react";
import { post } from "../../../models/board";
import { mypageContentType } from "../../../models/user";

const useUserPost = () => {
  const [mypagePost, setMypagePost] = useState<{
    likePosts: post[];
    commentPosts: post[];
    writePosts: post[];
  }>({
    likePosts: [],
    commentPosts: [],
    writePosts: [],
  });
  const [type, setType] = useState<mypageContentType>("write");
  const [page, setPage] = useState<number>(1);
  return {
    mypagePost,
    setMypagePost,
    type,
    setType,
    page,
    setPage,
  };
};

export default useUserPost;
