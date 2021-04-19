import axios from "axios";
import { board } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";

export const getBoardList = async (isDefault?: boolean) => {
  const request = await getRequestWithAccessToken();
  try {
    const { data } = await request.get(
      `/board/galleries?gallery-type=${isDefault ? 1 : 2}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const createBoard = async (explain: string, name: string) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.post("/board/galleries", {
      explain,
      name,
    });
  } catch (error) {
    throw error;
  }
};

export const patchBoard = async (id: string, board: board) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.patch(`/board/galleries/${id}`, board);
  } catch (error) {
    throw error;
  }
};

export const deleteBoard = async (id: string) => {
  const request = await getRequestWithAccessToken();
  try {
    await request.delete(`/board/galleries/${id}`);
  } catch (error) {
    throw error;
  }
};
