import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { comment } from "../../../models/comment";
import S from "../style";
import Comment from "./comment";

interface Props {
  comments: comment[];
  addComment: (
    isAnonymous: boolean,
    content: string,
    upperCaseCommentId?: number
  ) => void;
}

// 자기 댓글이면 삭제 버튼 나오게 설정해야함
const Comments: FC<Props> = ({ comments, addComment }) => {
  const renderedComment = useMemo(
    () =>
      comments
        .filter((comment) => comment.upper_comment_id === null)
        .map((comment) => (
          <Comment
            key={`comment-${comment.id}`}
            userImage={null}
            userName={comment.writer.username}
            content={comment.content}
            comments={comments}
            writeDate={comment.wrote_datetime}
            id={comment.id}
            addComment={addComment}
          />
        )),
    [comments]
  );

  return <View style={S.CommentsWrapper}>{renderedComment}</View>;
};

export default Comments;
