import { initialData } from "@/assets/data/InitialData";
import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={500}
        data={initialData}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        loop
        autoPlay
      />

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {initialData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: currentIndex === index ? 1 : 0.3 }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    backgroundColor: "#fff",
  },
  card: {
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 292,
    objectFit: "contain",
    borderRadius: 8,
  },
  title: {
    fontSize: 30,
    marginTop: 40,
    color: "#333",
    fontWeight: 600,
  },
  description: {
    fontSize: 18,
    // width:0
    textAlign: "center",
    marginTop: 20,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFA500",
    marginHorizontal: 5,
  },
});
