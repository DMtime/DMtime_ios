import React, { useState } from "react";
import { View } from "react-native";
import useUserPostUseCase from "../../hooks/useCase/mypage/useUserPostUseCase";
import useUserUseCase from "../../hooks/useCase/user/useUserUseCase";
import MypageContent from "./content";
import UserForm from "./form";
import MypagePostViewer from "./postViewer";
import MypageUserInfo from "./user";

const Mypage = () => {
  const { user, setUserInfo, setUser } = useUserUseCase({ isMine: true });
  const { setType, type, mypagePost } = useUserPostUseCase(user.username);
  const [changeInfo, setChangeInfo] = useState<boolean>(false);
  return (
    <View>
      {changeInfo ? (
        <UserForm
          user={user}
          setChangeInfo={setChangeInfo}
          setUserInfo={setUserInfo}
          setUser={setUser}
        />
      ) : (
        <MypageUserInfo user={user} setChangeInfo={setChangeInfo} />
      )}
      <MypageContent type={type} setType={setType} />
      <MypagePostViewer {...mypagePost} type={type} setType={setType} />
    </View>
  );
};

export default Mypage;
