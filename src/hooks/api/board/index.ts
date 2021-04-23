import { board } from "../../../models/board";
import { AddBoardRequest } from "../../../models/dto/request/boardRequest";
import { getRequestWithAccessToken } from "../default";

export const getBoardListRequest = async (isDefault?: boolean) => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get(
      `/board/galleries?${isDefault ? "gallery-type=1" : ""}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const addBoardRequest = async ({
  explain,
  name,
  gallery_id,
  gallery_type,
}: AddBoardRequest) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post("/board/galleries", {
      explain,
      name,
      gallery_id,
      gallery_type,
    });
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export const patchBoardRequest = async (id: string, board: board) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.patch(`/board/galleries/${id}`, board);
  } catch (error) {
    throw error;
  }
};

export const deleteBoardRequest = async (id: string) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/galleries/${id}`);
  } catch (error) {
    throw error;
  }
};
