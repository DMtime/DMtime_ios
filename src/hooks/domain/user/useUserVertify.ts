import { useState } from "react";

const useUserVertify = () => {
  const [vertifyCode, setVertifyCode] = useState<string>("");
  return { vertifyCode, setVertifyCode };
};

export default useUserVertify;
