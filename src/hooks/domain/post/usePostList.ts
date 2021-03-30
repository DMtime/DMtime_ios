import { useState } from "react";
import { post } from "../../../models/board";

const usePostList = (id: number) => {
  const [postList, setPostList] = useState<post[]>([]);
  const [page, setPage] = useState<number>(0);
  return {
    postList,
    setPostList,
    id,
    page,
    setPage,
  };
};

export default usePostList;
