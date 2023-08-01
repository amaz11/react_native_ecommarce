import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

export default StyleSheet.create({
  hearder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appbartext: {
    color: COLORS.gray,
    fontSize: SIZES.small,
    // fontFamily: "semibold",
  },
  cartCount: {
    position: "absolute",
    backgroundColor: "#118582",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    bottom: 16,
    left: 5,
    paddingBottom: 1,
    borderRadius: 8,
    zIndex: 999,
  },
});
