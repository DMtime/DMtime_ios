import { useState } from "react";
import { comment } from "../../../models/comment";

const useComment = () => {
  const [comments, setComments] = useState<comment[]>([]);
  const [page, setPage] = useState<number>(1);
  return {
    comments,
    setComments,
    page,
    setPage,
  };
};

export default useComment;
