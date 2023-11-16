import React from 'react';
import Statistics from './statistics';
import TopRestaurants from './topRestaurants';
import BestRestaurants from './bestRestaurants';
import BestDishes from './bestDishes';
import Advertisements from './advertisements';
import Events from './events';
import Recommendations from './recommendations';
import  "../../css/home.css";
const  HomePage = () => {
   return(
      <div className='homepage'>
       <Statistics/>
       <TopRestaurants/>
       <BestRestaurants/>
       <BestDishes/>
       <Advertisements/>
       <Events/>
       <Recommendations/>
      </div>
   )
}
export default HomePage