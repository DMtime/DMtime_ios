import React, { FC, useMemo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { comment } from "../../../../models/comment";
import { defaultUserImage } from "../../../../statics/postDetail";
import S from "../../style";
import Input from "../../input";

interface Props {
  userImage: string;
  userName: string;
  content: string;
  comments: comment[];
  writeDate: string;
  id: number;
  isSub?: boolean;
  addComment: (
    isAnonymous: boolean,
    content: string,
    upperCaseCommentId?: number
  ) => void;
}

const Comment: FC<Props> = ({
  userImage,
  userName,
  content,
  comments,
  writeDate,
  id,
  isSub,
  addComment,
}) => {
  const [openInput, setOpenInput] = useState(false);
  const renderedSubComment = useMemo(() => {
    return comments
      .filter((comment) => comment.upper_comment_id === id)
      .map((comment) => (
        <Comment
          key={`comment-${comment.id}`}
          userImage={null}
          userName={comment.writer.username}
          content={comment.content}
          id={comment.id}
          writeDate={comment.wrote_datetime}
          comments={comments}
          isSub={true}
          addComment={addComment}
        />
      ));
  }, [comments]);
  const toggleOpenInput = () => {
    setOpenInput((openInput) => !openInput);
  };
  return (
    <>
      <View style={{ ...S.Comment, paddingLeft: isSub ? 20 : 0 }}>
        <View style={S.CommentInfoWrapper}>
          <Image
            source={userImage ? { uri: userImage } : defaultUserImage}
            style={S.CommentUserImage}
          />
          <View>
            <Text style={S.CommentUser}>{userName}</Text>
            <Text style={S.CommentText}>{content}</Text>
          </View>
        </View>
        <View style={S.CommentFooter}>
          <View style={S.CommentFooterItem}>
            <View>
              <Text style={S.CommentDate}>{writeDate}</Text>
            </View>
            <TouchableOpacity>
              <Text style={S.CommentButton} onPress={toggleOpenInput}>
                댓글 달기
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={S.CommentReport}>신고하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      {openInput ? (
        <Input addComment={addComment} upperCaseCommentId={id} />
      ) : (
        <></>
      )}
      <View style={S.SubCommentWrapper}>{renderedSubComment}</View>
    </>
  );
};

export default Comment;
