import { useState } from "react";
import { board, post } from "../../../models/board";

const usePostList = (id: string) => {
  const [postList, setPostList] = useState<post[]>([]);
  const [page, setPage] = useState<number>(1);
  return {
    postList,
    setPostList,
    id,
    page,
    setPage,
  };
};

export default usePostList;
