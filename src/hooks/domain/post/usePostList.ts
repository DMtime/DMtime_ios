import { useState } from "react";
import { board, post } from "../../../models/board";

const usePostList = (id: number) => {
  const [postList, setPostList] = useState<post[]>([
    {
      content: "string",
      is_anonymous: false,
      id: 1,
      image_ids: {},
      likes: 1,
      posted_datetime: "string",
      posted_gallery: {} as board,
      title: "string",
      uploader: {
        username: "오준상",
      },
      views: 1,
    },
  ]);
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
