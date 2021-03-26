import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  Header: {
    flexDirection: "row",
    width: "100%",
    height: 54,
    padding: 15,
    backgroundColor: color.main,
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  HeaderLogo: {
    width: 28,
    marginRight: 10,
    height: 28,
  },
  HeaderMenu: {
    width: 24,
    height: 24,
  },
  HeaderTitle: {
    color: color.background,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default S;
