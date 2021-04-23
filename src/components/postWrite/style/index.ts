import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  PostWrite: {
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
    borderTopWidth: 2,
    borderBottomWidth: 2,
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
  Footer: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  Button: {
    width: 63,
    height: 26,
    borderRadius: 3,
    backgroundColor: color.main,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: color.item,
    fontSize: 14,
  },
  ImageWrapper: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    padding: 10,
  },
  Image: {
    width: 120,
    height: 100,
    marginRight: 8,
  },
});

export default S;
