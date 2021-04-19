import React, { useState } from "react";

const usePostWrite = () => {
  const [postContent, setPostContent] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  return {
    postContent,
    postTitle,
    anonymous,
    images,
    setPostContent,
    setPostTitle,
    setAnonymous,
    setImages,
  };
};

export default usePostWrite;
