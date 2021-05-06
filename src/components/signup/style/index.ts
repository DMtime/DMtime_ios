import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  SignUpInfo: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    paddingBottom: 200,
  },
  SignInVertify: {
    width: "100%",
    minHeight: "100%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    paddingBottom: 200,
  },
  Header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  SignUpButton: {
    color: color.main,
    marginLeft: 5,
  },
  ErrorMessage: {
    color: color.error,
    fontSize: 15,
  },
  SuccessMessage: {
    color: color.main,
    fontSize: 15,
  },
  MessageWrapper: {
    width: "100%",
    height: 15,
  },
});

export default S;
