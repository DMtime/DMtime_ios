import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import S from "../style";

interface Props {
  title: string;
  writer: string;
  date: string;
  like: number;
  id: number;
}

const BoardDetailItem: FC<Props> = ({ title, writer, date, like, id }) => {
  const navigation = useNavigation();
  const itemClickHandler = () => {
    navigation.navigate("PostDetail", {
      postId: id,
    });
  };
  return (
    <TouchableOpacity
      onPress={itemClickHandler}
      style={S.BoardDetailItemWrapper}
    >
      <View style={S.BoardDetailItem}>
        <View>
          <Text style={S.BoardDetailItemTitle}>{title}</Text>
          <View style={S.BoardDetailItemInfoWrapper}>
            <View style={S.BoardDetailItemInfoWrapper}>
              <View style={S.BoardRowElement}>
                <Text style={S.BoardDetailItemInfo}>글쓴이</Text>
                <Text style={S.BoardDetailItemInfoText}>{writer}</Text>
              </View>
              <View style={S.BoardDetailItemBar} />
              <View style={S.BoardRowElement}>
                <Text style={S.BoardDetailItemInfo}>날짜</Text>
                <Text style={S.BoardDetailItemInfoText}>{date}</Text>
              </View>
            </View>
            <View>
              <View style={S.BoardRowElement}>
                <Text style={S.BoardDetailItemInfo}>추천 수</Text>
                <Text style={S.BoardDetailItemInfoText}>{like}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BoardDetailItem;
