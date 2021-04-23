import React, { useState } from "react";
import { board } from "../../../models/board";

const useBoard = () => {
  const [board, setBoard] = useState<board>();
  const setTitle = (value: string) => {
    setBoard((board: board) => ({
      ...board,
      name: value,
    }));
  };
  const setGalleryId = (value: string) => {
    setBoard((board: board) => ({
      ...board,
      gallery_id: value,
    }));
  };
  const setDescription = (value: string) => {
    setBoard((board: board) => ({
      ...board,
      explain: value,
    }));
  };
  return {
    board,
    setTitle,
    setGalleryId,
    setDescription,
  };
};

export default useBoard;
