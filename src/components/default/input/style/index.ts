import { StyleSheet } from "react-native";
import color from "../../../../styles/color";

const S = StyleSheet.create({
  Input: {
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 3,
    paddingLeft: 10,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
  },
  SubButton: {
    height: 24,
    color: "white",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.main,
    padding: 3,
  },
});

export default S;
