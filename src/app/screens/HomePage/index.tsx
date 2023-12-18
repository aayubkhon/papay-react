import React,{useEffect} from 'react';
import Statistics from './statistics';
import TopRestaurants from './topRestaurants';
import BestRestaurants from './bestRestaurants';
import Advertisements from './advertisements';
import Events from './events';
import Recommendations from './recommendations';
import  "../../css/home.css";
import BestDishes from './bestDishes';
const  HomePage = () => {
   useEffect(()=>{
      // runs after render = RERRIVE DATA FROM BACKEND SERVER
      console.log("componentDidMount => Data fetch ");
      return () =>{
      console.log("componentWillUnmount => process ");

      }
   },[])
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