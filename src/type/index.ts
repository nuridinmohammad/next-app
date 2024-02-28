export interface LoginProps {
    username: string;
    password: string;
  }

  export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]; // Assuming images are URLs represented as strings
}
