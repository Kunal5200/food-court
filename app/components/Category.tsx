import { Restaurants } from "@/assets/data/restaurants";
import { TabItem } from "@/assets/utils/types";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import FoodCard from "./FoodCard";

const TABS: TabItem[] = [
  { id: "all", label: "All", image: require("../../assets/images/veg.jpg") },
  {
    id: "hotdog",
    label: "Hot Dog",
    image: require("../../assets/images/nonveg.jpg"),
  },
  {
    id: "burger",
    label: "Burger",
    image: require("../../assets/images/all.jpg"),
  },
];

export default function FoodTabs() {
  const [selectedTab, setSelectedTab] = useState("all");

  const renderTab = ({ item }: { item: TabItem }) => {
    const isActive = item.id === selectedTab;

    return (
      <TouchableOpacity
        style={[styles.tabItem, isActive && styles.activeTab]}
        onPress={() => setSelectedTab(item.id)}
      >
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  // const renderContent = () => {
  //   switch (selectedTab) {
  //     case "all":
  //       return (
  //         <FlatList
  //           data={Restaurants}
  //           keyExtractor={(item) => item.id}
  //           renderItem={({ item }) => <FoodCard {...item} />}
  //           contentContainerStyle={{ padding: 16 }}
  //         />
  //       );
  //     case "hotdog":
  //       return (
  //         <FlatList
  //           data={Restaurants}
  //           keyExtractor={(item) => item.id}
  //           renderItem={({ item }) => <FoodCard {...item} />}
  //           contentContainerStyle={{ padding: 16 }}
  //         />
  //       );
  //     case "burger":
  //       return (
  //         <FlatList
  //           data={Restaurants}
  //           keyExtractor={(item) => item.id}
  //           renderItem={({ item }) => <FoodCard {...item} />}
  //           contentContainerStyle={{ padding: 16 }}
  //         />
  //       );
  //     default:
  //       return (
  //         <FlatList
  //           data={Restaurants}
  //           keyExtractor={(item) => item.id}
  //           renderItem={({ item }) => <FoodCard {...item} />}
  //           contentContainerStyle={{ padding: 16 }}
  //         />
  //       );
  //   }
  // };

  const renderContent = () => {
    const filteredData =
      selectedTab === "all"
        ? Restaurants
        : Restaurants.filter((item) => item.category === selectedTab);

    return (
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard {...item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={TABS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderTab}
        contentContainerStyle={styles.tabContainer}
      />
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tabContainer: {
    paddingHorizontal: 10,
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginRight: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    backgroundColor: "#FED89F",
    borderColor: "#2F80ED",
  },
  imageWrapper: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#9CA3AF",
    marginRight: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  tabText: {
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
  },
  activeTabText: {
    fontWeight: "700",
  },
  contentContainer: {
    marginTop: 30,
    flex: 1,
  },
  content: {
    fontSize: 18,
    fontWeight: "600",
  },
});
