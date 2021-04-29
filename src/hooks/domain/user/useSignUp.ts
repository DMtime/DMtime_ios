import { useState } from "react";

const useSignUp = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickName] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  return {
    password,
    setPassword,
    email,
    setEmail,
    nickname,
    setNickName,
    passwordCheck,
    setPasswordCheck,
  };
};

export default useSignUp;
