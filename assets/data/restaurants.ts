import { RestaurantCardProps } from "../utils/types";

export const Restaurants: RestaurantCardProps[] = [
  {
    title: "Burger King",
    tags: ["Burgers", "Fast food"],
    rating: 4.5,
    delivery: "30 min",
    time: "40 min",
    image: require("../../assets/images/veg.jpg"),
    id: "1",
    category: "all",
  },
  {
    title: "McDonalds",
    tags: ["Burgers", "Fast food"],
    rating: 4.5,
    delivery: "30 min",
    time: "40 min",
    image: require("../../assets/images/veg.jpg"),
    id: "2",
    category: "burger",
  },
  {
    title: "Starbucks",
    tags: ["Burgers", "Fast food"],
    rating: 4.5,
    delivery: "30 min",
    time: "40 min",
    image: require("../../assets/images/veg.jpg"),
    id: "3",
    category: "hotdog",
  },
];
