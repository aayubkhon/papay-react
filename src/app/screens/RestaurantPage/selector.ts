import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";
import { RestaurantPage } from './index';

const selectRestaurantPage = (state:AppRootState)=>state.restaurantPage;
export const retrieveTargetRestaurants= createSelector(
   selectRestaurantPage,
   (RestaurantPage) => RestaurantPage.targetRestaurants
 );
 export const retrieveRandomRestaurant= createSelector(
   selectRestaurantPage,
   (RestaurantPage) => RestaurantPage.randomRestaurant
 );
 export const retrieveChosenRestaurant= createSelector(
   selectRestaurantPage,
   (RestaurantPage) => RestaurantPage.chosenRestaurant
 );
 export const retrieveTargetProductc= createSelector(
   selectRestaurantPage,
   (RestaurantPage) => RestaurantPage.targetProducts
 );
 export const retrieveChosenDish= createSelector(
   selectRestaurantPage,
   (RestaurantPage) => RestaurantPage.chosenProducts
 );