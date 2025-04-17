import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { COLORS } from "@/assets/utils/enum";
import { Button, IconButton } from "react-native-paper";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        {/* <IconButton/> */}
        <Button mode="contained" style={styles.menu_btn}>
          <Image source={require("../assets/images/icon/Menu.png")} />
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  menu_btn: {
    backgroundColor: COLORS.MENU_GREY,
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    shadowColor: COLORS.BLACK,
  },
});
