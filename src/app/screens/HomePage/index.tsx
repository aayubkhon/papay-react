import React, { useEffect } from "react";
import Statistics from "./statistics";
import TopRestaurants from "./topRestaurants";
import BestRestaurants from "./bestRestaurants";
import Advertisements from "./advertisements";
import Events from "./events";
import Recommendations from "./recommendations";
import "../../css/home.css";
import BestDishes from "./bestDishes";
import RestaurantApiService from "../../apiServices/restaurantApiService";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopRestaurants } from "../../screens/HomePage/slice";
import { retrievetopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../types/user";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});
// **  REDUX SELECTOR */
const topRestaurantRetriever = createSelector(
  retrievetopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);
const HomePage = () => {
  // **  INITIALIZATION */
  const { setTopRestaurants } = actionDispatch(useDispatch());

  // selector: => store data
  useEffect(() => {
    //beckend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getRestaurants()
      .then((data) => {
        setTopRestaurants(data)
      })
      .catch((err) => console.log(err));
    // slice:data =>store
  }, []);
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
};
export default HomePage;
