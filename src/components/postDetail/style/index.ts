import { StyleSheet } from "react-native";
import color from "../../../styles/color";

const S = StyleSheet.create({
  PostDetail: {
    backgroundColor: color.item,
    overflow: "scroll",
    padding: 20,
  },
  Navigation: {
    width: 18,
    height: 10,
  },
  NavigationWrapper: {
    marginBottom: 30,
    padding: 6,
    width: "100%",
  },
  Header: {
    borderTopColor: color.sub,
    borderBottomColor: color.sub,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 6,
    paddingRight: 6,
  },
  Title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
  },
  InfoWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  InfoView: {
    flexDirection: "row",
  },
  Info: {
    fontSize: 12,
    color: color.info,
    marginRight: 6,
  },
  InfoText: {
    fontSize: 12,
    color: color.font,
  },
  Content: {
    fontSize: 12,
    paddingTop: 30,
    paddingBottom: 30,
  },
  Footer: {
    width: "100%",
    paddingBottom: 6,
    flexDirection: "row",
    paddingRight: 6,
    paddingLeft: 6,
    justifyContent: "flex-end",
  },
  LikeButtonWrapper: {
    width: 79,
    height: 22,
    borderWidth: 1,
    borderColor: color.sub,
    borderRadius: 2,
    flexDirection: "row",
  },
  LikeButton: {
    width: 39,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  LikeButtonImage: {
    width: 12,
    height: 12,
    marginRight: 3,
  },
  Line: {
    width: 1,
    height: 14,
    backgroundColor: color.sub,
    marginRight: 6,
    marginLeft: 6,
  },
  ButtonLine: {
    width: 1,
    height: 14,
    backgroundColor: color.sub,
  },
  Body: {
    paddingLeft: 6,
    paddingRight: 6,
  },
  ReportButton: {
    width: 51,
    height: 22,
    borderWidth: 1,
    borderColor: color.sub,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginLeft: 15,
    flexDirection: "row",
  },
  ReportButtonImage: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  CommentsWrapper: {
    width: "100%",
    paddingRight: 6,
    paddingLeft: 6,
  },
  Comment: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    borderTopColor: color.sub,
    borderTopWidth: 1,
  },
  CommentUser: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  CommentText: {
    fontSize: 12,
    fontWeight: "300",
  },
  CommentUserImage: {
    width: 36,
    height: 36,
    marginRight: 12,
    borderRadius: 18,
    backgroundColor: "black",
  },
  CommentInfoWrapper: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  CommentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CommentDate: {
    fontSize: 12,
    marginRight: 20,
    marginLeft: 48,
    fontWeight: "300",
  },
  CommentButton: {
    fontSize: 12,
    fontWeight: "300",
  },
  CommentFooterItem: {
    flexDirection: "row",
  },
  CommentReport: {
    fontSize: 12,
    fontWeight: "300",
  },
  CommentLine: {
    width: "100%",
    height: 1,
    backgroundColor: color.sub,
  },
  SubCommentWrapper: {
    width: "100%",
    alignItems: "flex-end",
  },
  SubComment: {
    width: "90%",
  },
  CommentWriteInputWrapper: {
    width: "100%",
    minHeight: 80,
    borderColor: color.sub,
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    marginTop: 20,
    alignItems: "center",
    marginBottom: 30,
  },
  CommentWriteInput: {
    width: "100%",
    minHeight: 45,
    fontSize: 12,
    fontWeight: "300",
  },
  CommentWriteButtonWrapper: {
    width: "100%",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CommentWriteButton: {
    width: 25,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  CommentWriteButtonText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  ImageWrapper: {
    marginTop: 26,
    marginBottom: 26,
    flexDirection: "row",
  },
  Image: {
    marginRight: 8,
    width: 120,
    height: 100,
  },
  ModalImage: {
    width: 300,
    height: 200,
  },
  ImageModal: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageModalWrapper: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    marginTop: 150,
  },
  DeleteButton: {
    color: color.error,
    fontSize: 12,
    marginRight: 10,
  },
  ButtonWrapper: {
    flexDirection: "row",
  },
});

export default S;
