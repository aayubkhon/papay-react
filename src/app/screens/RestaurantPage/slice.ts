import { createSlice } from "@reduxjs/toolkit";
import { RestaurantPageState } from "../../types/screen";

const initialState: RestaurantPageState = {
  targetRestaurants: [],
  randomRestaurant: [],
  chosenRestaurant: null,
  targetProducts: [],
  chosenProducts: null,
};

const RestaurantPageSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setTargetRestaurants: (state, action) => {
      state.targetRestaurants = action.payload;
    },
    setRandomRestaurants: (state, action) => {
      state.randomRestaurant = action.payload;
    },
    setChosenRestaurants: (state, action) => {
      state.chosenRestaurant = action.payload;
    },
    setTargetProducts: (state, action) => {
      state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProducts = action.payload;
    },
  },
});

export const {
  setTargetRestaurants,
  setRandomRestaurants,
  setChosenRestaurants,
  setTargetProducts,
  setChosenProduct, 
} = RestaurantPageSlice.actions;

const RestaurantPageReducer = RestaurantPageSlice.reducer;
export default RestaurantPageReducer