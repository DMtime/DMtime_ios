import { useNavigation } from "@react-navigation/native";
import getAddBoardRequestDTO from "../../../models/dto/request/boardRequest";
import { deleteBoardRequest, addBoardRequest } from "../../api/board";
import useBoard from "../../domain/board/useBoard";
import Toast from "react-native-simple-toast";

const useBoardListUseCase = () => {
  const { setDescription, setGalleryId, setTitle, board } = useBoard();
  const navigation = useNavigation();

  const deleteBoard = async (id: string) => {
    try {
      await deleteBoardRequest(id);
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
  };
  const addBoard = async (
    name: string,
    explain: string,
    galleryType: number,
    galleryId: string
  ) => {
    try {
      await addBoardRequest(
        getAddBoardRequestDTO(galleryType, galleryId, explain, name)
      );
    } catch (error) {
      switch (error.response.status) {
        case 401:
          Toast.show("토큰이 만료되었습니다.");
          navigation.navigate("SignIn");
      }
    }
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
