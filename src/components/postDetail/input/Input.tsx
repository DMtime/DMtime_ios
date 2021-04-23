import React, { FC, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import Checkbox from "../../default/checkbox";
import S from "../style";

interface Props {
  addComment: (
    isAnonymous: boolean,
    content: string,
    upperCaseCommentId?: number
  ) => void;
  upperCaseCommentId?: number;
}

const Input: FC<Props> = ({ addComment, upperCaseCommentId }) => {
  const [content, setContent] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(true);
  const submitButtonPressHandler = () => {
    addComment(anonymous, content, upperCaseCommentId);
    setContent("");
  };
  const inputChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setContent(e.nativeEvent.text);
  };
  return (
    <View style={S.CommentWriteInputWrapper}>
      <TextInput
        multiline={true}
        style={S.CommentWriteInput}
        placeholder="댓글을 입력하세요."
        onChange={inputChangeHandler}
        value={content}
      />
      <View style={S.CommentWriteButtonWrapper}>
        <Checkbox setValue={setAnonymous} value={anonymous} fontSize={12}>
          익명으로 작성
        </Checkbox>
        <TouchableOpacity
          onPress={submitButtonPressHandler}
          style={S.CommentWriteButton}
        >
          <Text style={S.CommentWriteButtonText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
