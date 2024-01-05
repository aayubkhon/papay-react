import { BoArticles } from "./boArticle";
import { Order } from "./orders";
import { Product } from "./product";
import { Restaurant } from "./user";

// **  REACT APP STATE */
export interface AppRootState {
  OrdersPage: OrdersPageState;
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
  communityPage:CommunityPageState
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

// **  ORDERS PAGE*/

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}

// **  COMMUNITY PAGE*/

export interface CommunityPageState {
  targetBoArticles:BoArticles[]

}