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
import {
  setTopRestaurants,
  setBestRestaurants,
} from "../../screens/HomePage/slice";
import { retrievetopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../types/user";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
  setBestRestaurants: (data: Restaurant[]) =>
    dispatch(setBestRestaurants(data)),
});

const HomePage = () => {
  // **  INITIALIZATIONS */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  // selector: => store data
  useEffect(() => {
    //beckend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantService
      .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));
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
