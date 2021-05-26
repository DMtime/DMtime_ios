import { useEffect } from "react";
import useBoardList from "../../domain/board/useBoardList";
import { getBoardListRequest } from "../../api/board";

const useBoardListUseCase = (isDefault?: boolean) => {
  const { boardList, setBoardList } = useBoardList();

  const getBoardListAndSetState = async () => {
    try {
      const data = await getBoardListRequest(isDefault);
      setBoardList(data);
    } catch (error) {
      switch (error.response.status) {
      }
    }
  };

  const refreshBoardList = async () => {
    getBoardListAndSetState();
  };

  useEffect(() => {
    getBoardListAndSetState();
  }, []);

  return {
    boardList,
    setBoardList,
    refreshBoardList,
  };
};

export default useBoardListUseCase;
