import React, { FC } from "react";
import { View } from "react-native";
import { mypageContentType } from "../../../models/user";
import S from "../style";
import MypageNavigationButton from "./MypageNavigationButton";

interface Props {
  type: mypageContentType;
  setType: (value: mypageContentType) => void;
}

const MypageNavigation: FC<Props> = ({ type, setType }) => {
  const getButtonClickHandler = (type: mypageContentType) => {
    return () => {
      setType(type);
    };
  };
  return (
    <View style={S.Navigation}>
      <MypageNavigationButton
        onClick={getButtonClickHandler("write")}
        active={type === "write"}
      >
        작성글
      </MypageNavigationButton>
      <MypageNavigationButton
        onClick={getButtonClickHandler("comment")}
        active={type === "comment"}
      >
        댓글 단 글
      </MypageNavigationButton>
      <MypageNavigationButton
        onClick={getButtonClickHandler("like")}
        active={type === "like"}
      >
        좋아요 한 글
      </MypageNavigationButton>
    </View>
  );
};

export default MypageNavigation;
