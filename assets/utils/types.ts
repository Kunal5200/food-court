import { ReactNode } from "react";

export interface WRAPPER_INTERFACE {
  children1: ReactNode;
  children2: ReactNode;
}

export interface TabItem {
  id: string;
  label: string;
  image: any;
}

export interface RestaurantCardProps {
  title: string;
  tags: string[];
  rating: number;
  delivery: string;
  time: string;
  image: any;
  id: string;
  category: string;
}

export interface DISHES_CARD {
  dishes: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}
