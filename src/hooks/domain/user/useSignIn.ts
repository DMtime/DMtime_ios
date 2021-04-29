import { useState } from "react";

const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  return {
    email,
    setEmail,
    password,
    setPassword,
    autoLogin,
    setAutoLogin,
  };
};

export default useSignIn;
