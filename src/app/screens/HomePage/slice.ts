import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";
import BestRestaurants from "./bestRestaurants";

const initialState: HomePageState = {
  topRestaurants: [], 
  bestRestaurants: [],
  trendProducts: [],
  bestBorticles: [],
  trendBoArticles: [],
  newsBoArticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    setBestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    setTrendProducts: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    setBestBorticles: (state, action) => {
      state.bestBorticles = action.payload;
    },
    setTrendBoArticles: (state, action) => {
      state.trendBoArticles = action.payload;
    },
    setNewsBoArticles: (state, action) => {
      state.newsBoArticles = action.payload;
    },
  },
});

export const {
  setTopRestaurants,
  setBestRestaurants,
  setTrendProducts,
  setBestBorticles,
  setTrendBoArticles, 
  setNewsBoArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer