import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { RestaurantCardProps } from "@/assets/utils/types";

const FoodCard = ({
  image,
  title,
  tags,
  rating,
  delivery,
  time,
}: RestaurantCardProps) => {
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Cover source={image} style={styles.image} />

      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tags}>{tags.join(" - ")}</Text>

        <View style={styles.infoRow}>
          <Text style={styles.iconText}>⭐ {rating}</Text>
          <Text style={styles.iconText}>🚚 {delivery}</Text>
          <Text style={styles.iconText}>⏱ {time}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 2,
    // borderColor: "#2F80ED",
    borderRadius: 16,
    padding: 2,
    backgroundColor: "#fff",
    elevation: 2,
    marginBottom: 20,
  },
  image: {
    height: 120,
    borderRadius: 12,
    backgroundColor: "#CBD5E1",
    marginBottom: 8,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 4,
  },
  tags: {
    color: "#6B7280",
    fontSize: 14,
    marginVertical: 2,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  iconText: {
    fontSize: 14,
    color: "#F97316",
    fontWeight: "500",
  },
});

export default FoodCard;
