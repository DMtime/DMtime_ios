import { emailVertifyCodeCheckRequest } from "../../api/user";
import useUserVertify from "../../domain/user/useUserVertify";

const useUserVertifyUseCase = () => {
  const { setVertifyCode, vertifyCode } = useUserVertify();

  const emailVertifyCodeCheck = async () => {
    emailVertifyCodeCheckRequest(vertifyCode);
  };
  return {
    setVertifyCode,
    vertifyCode,
    emailVertifyCodeCheck,
  };
};

export default useUserVertifyUseCase;
