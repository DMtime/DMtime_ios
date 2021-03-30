import { board } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";

const request = getRequestWithAccessToken();

export const getBoardList = async () => {
  try {
    const { data } = await request.get("/board/galleries");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createBoard = async (explain: string, name: string) => {
  try {
    await request.post("/board/galleries", {
      explain,
      name,
    });
  } catch (error) {
    console.log(error);
  }
};

export const patchBoard = async (id: number, board: board) => {
  try {
    await request.patch(`/board/galleries/${id}`, board);
  } catch (error) {
    console.log(error);
  }
};

export const deleteBoard = async (id: number) => {
  try {
    await request.delete(`/board/galleries/${id}`);
  } catch (error) {
    console.log(error);
  }
};
