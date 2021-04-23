import { useState } from "react";
import { user } from "../../../models/user";

const useUser = () => {
  const [user, setUser] = useState<user>({
    explain: "로딩중",
    profile_image: "",
    username: "로딩중",
  });
  return { user, setUser };
};

export default useUser;
