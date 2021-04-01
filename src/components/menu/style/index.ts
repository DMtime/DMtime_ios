import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  MenuBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "absolute",
    top: 0,
  },
  Menu: {
    width: 265,
    height: "100%",
    backgroundColor: color.item,
  },
  MenuWrapper: {
    height: "100%",
    backgroundColor: color.item,
    overflow: "hidden",
  },
  MenuItem: {
    borderBottomColor: color.sub,
    borderBottomWidth: 1,
    padding: 10,
  },
  MainItemText: {
    fontSize: 16,
  },
  MainWrapper: {
    width: "100%",
    height: "100%",
    top: 0,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
  },
  MenuHeader: {
    width: "100%",
    height: 150,
    backgroundColor: color.main,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 25,
    paddingRight: 25,
  },
  MenuUserImage: {
    width: 65,
    height: 65,
  },
  MenuUserName: {
    fontSize: 15,
    color: color.item,
    textAlign: "center",
    marginTop: 10,
  },
  MenuUserImageWrapper: {
    width: 65,
    height: 65,
  },
  MainuserWrapper: {
    alignItems: "center",
  },
});

export default S;
