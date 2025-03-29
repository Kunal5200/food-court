import { StyleSheet, Text, View } from "react-native";
import ImageCarousel from "./components/initalScreens";
import { Link } from "expo-router";
import { COLORS } from "@/assets/utils/enum";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Link href={"/Login"} style={styles.skipContainer}>
          <Text>Skip</Text>
        </Link>
      </View>
      <ImageCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  skipContainer: {
    textAlign: "right",
    marginRight: 30,
    marginTop: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    cursor: "pointer",
    color: COLORS.LINK,
    fontSize: 20,
  },
});
