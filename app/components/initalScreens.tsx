import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Sample onboarding data (replace with your actual images and content)
const initialData = [
  {
    title: "Welcome to Our App",
    description: "Discover new features and enjoy a seamless experience.",
    img: require("@/assets/images/slider/dish-1.jpg"),
  },
  {
    title: "Stay Connected",
    description: "Communicate and collaborate with others effortlessly.",
    img: require("@/assets/images/slider/dish-2.jpg"),
  },
  {
    title: "Achieve More",
    description: "Boost your productivity and get things done faster.",
    img: require("@/assets/images/slider/dish-3.jpg"),
  },
];

const { width } = Dimensions.get("window");

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />

      <Carousel
        width={width}
        height={500}
        data={initialData}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.img}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        loop
        autoPlay
      />

      <View style={styles.paginationContainer}>
        {initialData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: currentIndex === index ? "#FFA500" : "#ccc",
                width: currentIndex === index ? 18 : 10,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#fefefe",
  },
  card: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: Platform.OS === "android" ? 6 : 0,
  },
  image: {
    width: 320,
    height: 280,
    marginBottom: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 28,
    color: "#222",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
