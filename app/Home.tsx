import { COLORS } from "@/assets/utils/enum";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Badge, Button, Icon, TextInput } from "react-native-paper";
import NameComponent from "./components/Name";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <View style={styles.homeDelivery}>
          <View style={styles.menu_btn}>
            <Image source={require("../assets/images/icon/Menu.png")} />
          </View>
          <View>
            <Text style={{ fontSize: 16, color: COLORS.PRIMARY }}>
              Deliver to
            </Text>
            <Text style={{ fontSize: 16, color: COLORS.BLACK }}>
              Duhai Ghaziabad
            </Text>
          </View>
        </View>
        <View style={{ position: "relative" }}>
          <Icon source={"cart"} size={30} />
          <Badge style={{ position: "absolute", top: -10 }}>3</Badge>
        </View>
      </View>
      <View>
        <NameComponent />
      </View>
      <View style={{ padding: 20 }}>
        <TextInput
          left={<TextInput.Icon icon={"find"} />}
          style={styles.searchbar}
          outlineStyle={{ borderColor: "#000", borderRadius: 20 }}
          mode="outlined"
          label={"Search Dishes, Restaurants"}
          activeOutlineColor={COLORS.PRIMARY}
        />
      </View>
      <View style={styles.flexContainer}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>All Categories</Text>
        <Button>
          <View style={styles.buttonInnerContainer}>
            <Text>See All</Text>
            <Icon source={"chevron-right"} size={25} />
          </View>
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
    padding: 2,
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
  homeDelivery: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  searchbar: {
    backgroundColor: "transparent",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonInnerContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
