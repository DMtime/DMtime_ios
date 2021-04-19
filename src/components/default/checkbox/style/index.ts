import { StyleSheet } from "react-native";
import color from "../../../../styles/color";

const S = StyleSheet.create({
  CheckboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  Checkbox: {
    width: 15,
    height: 15,
    borderRadius: 2,
    borderColor: color.main,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  CheckboxContent: {
    width: 7,
    height: 7,
    backgroundColor: color.main,
    borderRadius: 1,
  },
});

export default S;
