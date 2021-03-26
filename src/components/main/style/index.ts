import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  Main: {
    backgroundColor: color.background,
    overflow: "scroll",
  },
  MainBoardList: {
    backgroundColor: color.item,
    shadowColor: "#000",
    height: 249,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    padding: 20,
    width: "100%",
  },
  MainBoardListItem: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: color.item,
    borderBottomColor: color.sub,
  },
  MainBoardListTitle: {
    fontSize: 17,
    fontWeight: "600",
  },
  MainBoardListHeader: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    borderBottomColor: color.main,
    borderBottomWidth: 2,
  },
  MainBoardListDetailButton: {
    width: 15,
    height: 15,
  },
  MainBoardListItemTitle: {
    fontSize: 13,
    fontWeight: "normal",
  },
  MainBoardListItemDate: {
    fontSize: 13,
    fontWeight: "300",
  },
});

export default S;
