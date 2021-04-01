import { useEffect } from "react";
import useBoardList from "../../domain/board/useBoardList";
import { getBoardList } from "../../api/board";

const useBoardListUseCase = (isDefault?: boolean) => {
  const { boardList, setBoardList } = useBoardList();

  const getBoardListAndSetState = async () => {
    const data = await getBoardList(isDefault);
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
