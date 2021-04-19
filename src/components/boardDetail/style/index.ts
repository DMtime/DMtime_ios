import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  BoardDetail: {
    backgroundColor: color.item,
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "center",
  },
  BoardDetailWrapper: {
    width: "100%",
    height: "100%",
  },
  BoardDetailTitle: {
    fontSize: 17,
    fontWeight: "900",
  },
  BoardDetailTitleWrapper: {
    height: 54,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderBottomColor: color.sub,
    borderBottomWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  BoardDetailItem: {
    height: 64,
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
  },
  BoardDetailItemWrapper: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: color.sub,
  },
  BoardDetailItemTitle: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 5,
  },
  BoardDetailItemInfo: {
    fontSize: 10,
    color: color.info,
  },
  BoardDetailItemBar: {
    height: 13,
    width: 1,
    backgroundColor: color.info,
    marginRight: 8,
    marginLeft: 8,
  },
  BoardDetailItemInfoText: {
    color: color.font,
    fontSize: 10,
    marginLeft: 10,
  },
  BoardDetailItemInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BoardRowElement: {
    flexDirection: "row",
  },
});

export default S;
