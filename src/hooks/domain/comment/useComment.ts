import { useState } from "react";
import { comment } from "../../../models/board";

const useComment = () => {
  const [comments, setComments] = useState<comment[]>([]);
  const [page, setPage] = useState<number>(0);
  return {
    comments,
    setComments,
    page,
    setPage,
  };
};

export default useComment;
