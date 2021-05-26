import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { comment } from "../../../models/comment";
import S from "../style";
import Comment from "./comment";

interface Props {
  comments: comment[];
  deleteComment: (id: number) => Promise<void>;
  addComment: (
    isAnonymous: boolean,
    content: string,
    upperCaseCommentId?: number
  ) => void;
}

const Comments: FC<Props> = ({ comments, addComment, deleteComment }) => {
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
            deleteComment={deleteComment}
          />
        )),
    [comments]
  );

  return <View style={S.CommentsWrapper}>{renderedComment}</View>;
};

export default Comments;
