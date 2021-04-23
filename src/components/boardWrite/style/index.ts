import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  BoardWrite: {
    width: "100%",
    backgroundColor: color.item,
    flex: 1,
  },
  NavigationWrapper: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Title: {
    width: "100%",
    height: 50,
    borderTopColor: "#EEEEEE",
    borderBottomColor: "#EEEEEE",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  SubTitle: {
    width: "100%",
    height: 50,
    borderTopColor: "#EEEEEE",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  Description: {
    width: "100%",
    padding: 15,
  },
  Body: {
    width: "100%",
    height: "86%",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 2,
  },
  NavigationArrow: {
    width: 18,
    height: 10,
  },
});

export default S;
