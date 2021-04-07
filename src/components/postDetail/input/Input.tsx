import React, { FC } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import S from "../style";

const Input: FC = () => {
  return (
    <View style={S.CommentWriteInputWrapper}>
      <TextInput
        multiline={true}
        style={S.CommentWriteInput}
        placeholder="댓글을 입력하세요."
      />
      <View style={S.CommentWriteButtonWrapper}>
        <TouchableOpacity onPress={() => {}} style={S.CommentWriteButton}>
          <Text style={S.CommentWriteButtonText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
