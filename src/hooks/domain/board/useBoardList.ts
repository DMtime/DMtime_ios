import { useState } from "react";
import { board } from "../../../models/board";

const useBoardList = () => {
  const [boardList, setBoardList] = useState<board[]>([]);
  return {
    boardList,
    setBoardList,
  };
};

export default useBoardList;
