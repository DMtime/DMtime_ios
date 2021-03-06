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
  FixButtonWrapper: {
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 18,
    paddingLeft: 18,
  },
  FixButton: {
    width: 25,
    height: 25,
  },
  CameraButton: {},
  HeaderUserImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
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
  Content: {
    width: "100%",
    backgroundColor: color.item,
    marginTop: 20,
  },
  Navigation: {
    width: "100%",
    paddingRight: 24,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  NavigationButton: {
    width: 90,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  NavigationButtonText: {
    fontSize: 13,
  },
  PostViewer: {
    width: "100%",
    height: 289,
    backgroundColor: "white",
  },
  PostWrapper: {
    width: "100%",
  },
  ImgChangeButton: {},
});

export default S;
