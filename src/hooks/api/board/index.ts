import axios from "axios";
import { board } from "../../../models/board";
import { getRequestWithAccessToken } from "../default";

const request = getRequestWithAccessToken();

export const getBoardList = async (isDefault?: boolean) => {
  try {
    const { data } = await request.get(
      `/board/galleries?is-default=${isDefault ? "true" : "false"}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const createBoard = async (explain: string, name: string) => {
  try {
    await request.post("/board/galleries", {
      explain,
      name,
    });
  } catch (error) {
    throw error;
  }
};

export const patchBoard = async (id: number, board: board) => {
  try {
    await request.patch(`/board/galleries/${id}`, board);
  } catch (error) {
    throw error;
  }
};

export const deleteBoard = async (id: number) => {
  try {
    await request.delete(`/board/galleries/${id}`);
  } catch (error) {
    throw error;
  }
};
