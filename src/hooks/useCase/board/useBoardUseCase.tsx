import { board } from "../../../models/board";
import { deleteBoard, patchBoard, createBoard } from "../../api/board";

const useBoardListUseCase = () => {
  return {
    deleteBoard,
    patchBoard,
    createBoard,
  };
};

export default useBoardListUseCase;
