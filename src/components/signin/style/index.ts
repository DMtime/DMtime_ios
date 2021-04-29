import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  SignIn: {
    width: "100%",
    minHeight: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  Header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 200,
  },
  SignInButton: {
    color: color.main,
    marginLeft: 5,
  },
});

export default S;
