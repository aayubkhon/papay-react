import { BoArticles } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

export interface AppRootState {
  homePage: HomePageState;
}
export interface HomePageState {
  topRestaurants: Restaurant[];
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBorticles: BoArticles[];
  trendBoArticles: BoArticles[];
  newsBoArticles: BoArticles[];
}
