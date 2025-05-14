import { nonVegDishes } from "@/assets/data/nonVegDishes";
import { vegDishes } from "@/assets/data/vegDishes";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DishesCard from "./DishesCard";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function DishScreen() {
  const [selectedType, setSelectedType] = useState("veg");
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const dishes = selectedType === "veg" ? vegDishes : nonVegDishes;

  const toggleFavorite = (id: any) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedType === "veg" && styles.activeToggle,
          ]}
          onPress={() => setSelectedType("veg")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedType === "veg" && styles.activeText,
            ]}
          >
            🍀 Veg
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleOption,
            selectedType === "nonveg" && styles.activeToggle,
          ]}
          onPress={() => setSelectedType("nonveg")}
        >
          <Text
            style={[
              styles.toggleText,
              selectedType === "nonveg" && styles.activeText,
            ]}
          >
            🍗 Non-Veg
          </Text>
        </TouchableOpacity>
      </View>

      <DishesCard
        dishes={dishes}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    boxShadow: "0px 0px 2px 2px #d7d7d7",
  },
  toggleOption: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH / 2.4,
    alignItems: "center",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#999",
  },
  activeToggle: {
    backgroundColor: "#fff",
    elevation: 4,
    borderRadius: 30,
  },
  activeText: {
    color: "#000",
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 180,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  cardContent: {
    padding: 12,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    color: "#555",
    marginBottom: 6,
  },
  price: {
    color: "#333",
    fontWeight: "bold",
  },
});
