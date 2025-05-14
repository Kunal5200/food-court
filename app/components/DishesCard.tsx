import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

interface DISHES_CARD {
  dishes: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
  toggleFavorite: (id: number | string) => void;
  favorites: { [key: string]: boolean };
}

const DishesCard = ({ dishes, toggleFavorite, favorites }: DISHES_CARD) => {
  const router = useRouter();
  return (
    // <FlatList
    //   data={dishes}
    //   keyExtractor={(item) => item.id}
    //   contentContainerStyle={{ paddingBottom: 20 }}
    //   renderItem={({ item }) => (
    //     <View style={styles.card}>
    //       <Image source={{ uri: item.image }} style={styles.image} />
    //       <TouchableOpacity
    //         style={styles.heartIcon}
    //         onPress={() => toggleFavorite(item.id)}
    //       >
    //         <Icon
    //           name={favorites[item.id] ? "heart" : "heart-o"}
    //           size={24}
    //           color={favorites[item.id] ? "red" : "#888"}
    //         />
    //       </TouchableOpacity>
    //       <View style={styles.cardContent}>
    //         <Text style={styles.dishName}>{item.name}</Text>
    //         <Text style={styles.description}>{item.description}</Text>
    //         <Text style={styles.price}>{item.price}</Text>
    //       </View>
    //     </View>
    //   )}
    // />
    <FlatList
      data={dishes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/dish/${item.id}`)}>
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => toggleFavorite(item.id)}
            >
              <Icon
                name={favorites[item.id] ? "heart" : "heart-o"}
                size={24}
                color={favorites[item.id] ? "red" : "#888"}
              />
            </TouchableOpacity>
            <View style={styles.cardContent}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
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

export default DishesCard;
