import getAddBoardRequestDTO from "../../../models/dto/request/boardRequest";
import {
  deleteBoardRequest,
  patchBoardRequest,
  addBoardRequest,
} from "../../api/board";
import useBoard from "../../domain/board/useBoard";

const useBoardListUseCase = () => {
  const { setDescription, setGalleryId, setTitle, board } = useBoard();
  const deleteBoard = async (id: string) => {
    await deleteBoardRequest(id);
  };
  const addBoard = async (
    name: string,
    explain: string,
    galleryType: number,
    galleryId: string
  ) => {
    console.log(name);
    await addBoardRequest(
      getAddBoardRequestDTO(galleryType, galleryId, explain, name)
    );
  };
  return {
    deleteBoard,
    addBoard,
    setTitle,
    setDescription,
    setGalleryId,
    board,
  };
};

export default useBoardListUseCase;
