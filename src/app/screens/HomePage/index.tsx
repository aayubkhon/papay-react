import React, { useEffect } from "react";
import Statistics from "./statistics";
import TopRestaurants from "./topRestaurants";
import BestRestaurants from "./bestRestaurants";
import Advertisements from "./advertisements";
import Events from "./events";
import Recommendations from "./recommendations";
import "../../css/home.css";
import BestDishes from "./bestDishes";
const HomePage = () => {
  // selector: => store data
  useEffect(() => {
    //beckend data request => data
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
