import { useState } from "react";
import { user } from "../../../models/user";

const useSignUp = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");
  return {
    password,
    setPassword,
    email,
    setEmail,
    nickname,
    setNickName,
  };
};

export default useSignUp;
