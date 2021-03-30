import { patchPost, setPost } from "../../api/post";

const usePostControlUseCase = (id: number) => {
  return {
    patchPost,
    setPost,
  };
};

export default usePostControlUseCase;
