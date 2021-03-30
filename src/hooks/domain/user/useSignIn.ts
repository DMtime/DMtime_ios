import { useState } from "react";
import { user } from "../../../models/user";

const useSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return {
    email,
    setEmail,
    password,
    setPassword,
  };
};

export default useSignIn;
