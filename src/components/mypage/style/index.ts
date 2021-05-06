import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  Header: {
    width: "100%",
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: color.item,
  },
  HeaderUserImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 15,
    borderColor: "#C9C9C9",
    borderWidth: 1,
  },
  HeaderUserName: {
    fontSize: 15,
    fontWeight: "600",
    margin: 5,
  },
  HeaderUserDescription: {
    fontSize: 13,
    fontWeight: "100",
  },
});

export default S;
