import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { vegDishes } from "@/assets/data/vegDishes";
import { nonVegDishes } from "@/assets/data/nonVegDishes";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

// Utility to get dish by ID
const getDishById = (id: string) => {
  return [...vegDishes, ...nonVegDishes].find((dish) => dish.id === id);
};

export default function DishDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dish, setDish] = useState<any>(null);
  const [cookName, setCookName] = useState<string | null>(null);

  useEffect(() => {
    // Simulating an API call to fetch the dish data
    const fetchedDish = getDishById(id ?? "");
    if (fetchedDish) {
      setDish(fetchedDish);
      setIsLoading(false);
      
      // Dynamically fetch the cook name (replace with actual dynamic logic)
      // For example, it could be a field in the dish object or fetched from an API
      setCookName(fetchedDish.cookName || "Unknown Cook");
    }
  }, [id]);

  // Back button handler
  const handleBack = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <SkeletonPlaceholder>
        <View style={styles.container}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
        </View>
      </SkeletonPlaceholder>
    );
  }

  if (!dish) return <Text style={{ padding: 20 }}>Dish not found</Text>;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <Image source={{ uri: dish.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{dish.name}</Text>
          <Text style={styles.subtitle}>By {cookName || "Loading cook..."}</Text>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.text}>
            {dish.description ||
              "This dish is a delicious combination of traditional spices and fresh ingredients. Perfect for every occasion."}
          </Text>

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.text}>
            {dish.ingredients.map((ingredient: string, index: number) => (
              <Text key={index}>• {ingredient}{"\n"}</Text>
            ))}
          </Text>

          <Text style={styles.sectionTitle}>Recipe</Text>
          <Text style={styles.text}>{dish.recipe}</Text>

          <Text style={styles.sectionTitle}>Suggested Dishes</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...vegDishes, ...nonVegDishes].slice(0, 5)} // Mixing both veg and non-veg dishes
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestedCard}
                onPress={() => router.push(`/dish/${item.id}`)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.suggestedImage}
                />
                <Text style={styles.suggestedName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => setIsFavorite((prev) => !prev)}
          style={styles.heartButton}
        >
          <Icon
            name={isFavorite ? "heart" : "heart-o"}
            size={24}
            color={isFavorite ? "red" : "#333"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Add to Cart ₹{dish.price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 10,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 280,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 6,
    color: "#444",
  },
  text: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  heartButton: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 30,
  },
  cartButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  cartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  suggestedCard: {
    marginRight: 14,
    alignItems: "center",
    width: 100,
  },
  suggestedImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  suggestedName: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 6,
    color: "#333",
  },
  skeletonImage: {
    width: "100%",
    height: 280,
    borderRadius: 20,
  },
  skeletonText: {
    width: "80%",
    height: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
});
