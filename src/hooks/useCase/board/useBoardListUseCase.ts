import { useEffect } from "react";
import useBoardList from "../../domain/board/useBoardList";
import { getBoardList } from "../../api/board";

const useBoardListUseCase = () => {
  const { boardList, setBoardList } = useBoardList();

  const getBoardListAndSetState = async () => {
    const data = await getBoardList();
    setBoardList(data);
  };

  useEffect(() => {
    getBoardListAndSetState();
  }, []);

  return {
    boardList,
    setBoardList,
  };
};

export default useBoardListUseCase;
