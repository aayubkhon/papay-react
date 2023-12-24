import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";
import HomePage from ".";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrievetopRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topRestaurants
);
export const retrieveBestRestaurants = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestRestaurants
);
export const retrieveTrendProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);
export const retrieveBestBorticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestBorticles
);
export const retrieveTrendBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendBoArticles
);
export const retrieveNewsBoArticles = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newsBoArticles
);
