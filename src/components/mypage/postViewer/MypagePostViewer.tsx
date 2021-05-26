import React, { FC, useEffect, useRef } from "react";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { post } from "../../../models/board";
import { mypageContentType } from "../../../models/user";
import S from "../style";
import MypagePosts from "./MypagePosts";

interface Props {
  writePosts: post[];
  commentPosts: post[];
  likePosts: post[];
  type: mypageContentType;
  setType: (value: mypageContentType) => void;
}

const MypagePostViewer: FC<Props> = ({
  writePosts,
  commentPosts,
  likePosts,
  type,
  setType,
}) => {
  const typePage: Record<mypageContentType, number> = {
    write: 0,
    comment: 1,
    like: 2,
  };

  const pageType: Record<number, mypageContentType> = {
    0: "write",
    1: "comment",
    2: "like",
  };

  const pagerViewRef = useRef<PagerView>();

  const pagerViewScrollHandler = (event: PagerViewOnPageSelectedEvent) => {
    event.nativeEvent;
    setType(pageType[event.nativeEvent.position]);
  };

  useEffect(() => {
    if (!pagerViewRef === undefined) return;
    else {
      pagerViewRef.current.setPage(typePage[type]);
    }
  }, [type]);

  return (
    <PagerView
      initialPage={0}
      style={S.PostViewer}
      ref={pagerViewRef}
      onPageSelected={pagerViewScrollHandler}
    >
      <MypagePosts key={0} posts={writePosts} />
      <MypagePosts key={1} posts={commentPosts} />
      <MypagePosts key={2} posts={likePosts} />
    </PagerView>
  );
};

export default MypagePostViewer;
