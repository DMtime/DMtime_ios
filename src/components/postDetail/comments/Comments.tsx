import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { comment } from "../../../models/comment";
import S from "../style";
import Comment from "./comment";

interface Props {
  comments: comment[];
}

const Comments: FC<Props> = ({ comments }) => {
  const renderedComment = useMemo(() => {
    return comments.map((comment) => (
      <Comment
        key={`comment-${comment.id}`}
        userImage={comment.writer.username}
        userName={comment.writer.username}
        content={comment.content}
        comments={comments}
        writeDate={comment.wrote_datetime}
        id={comment.id}
      />
    ));
  }, [comments]);

  return <View style={S.CommentsWrapper}>{renderedComment}</View>;
};

export default Comments;
