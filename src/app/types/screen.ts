import { BoArticles } from "./boArticle";
import { Order } from "./orders";
import { Product } from "./product";
import { Restaurant } from "./user";

// **  REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
}

// **  HOMEPAGE */
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBorticles: BoArticles[];
  trendBoArticles: BoArticles[];
  newsBoArticles: BoArticles[];
}

// **  RESTAURANT PAGE*/

export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  randomRestaurant: Restaurant[];
  chosenRestaurant: Restaurant | null;
  targetProducts: Product[];
  chosenProducts: Product | null;
}

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
