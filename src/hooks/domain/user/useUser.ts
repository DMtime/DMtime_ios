import { useState } from "react";
import { user } from "../../../models/user";

const useUser = () => {
  const [user, setUser] = useState<user>();
  return { user, setUser };
};

export default useUser;
