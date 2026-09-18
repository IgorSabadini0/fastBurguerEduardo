export type Category = 'burgers' | 'acompanhamentos' | 'bebidas' | 'sobremesas';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  MainTabs: undefined;
  ProductDetail: { product: Product };
  Cart: undefined;
  Checkout: undefined;
  OrderStatus: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Cardapio: undefined;
  Perfil: undefined;
};