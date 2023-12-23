import assert from "assert";
import axios from "axios";
import { serviceApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../types/user";
import { SearchObj } from "../types/others";
class RestaurantApiService {
  private readonly path: string;
  constructor() {
    this.path = serviceApi;
  }
  async getTopRestaurants() {
    try {
      const url = "/restaurants?order=top&page=1&limit=4",
      result = await axios.get(this.path + url ,{withCredentials:true});
      assert.ok(result,Definer.general_err1)
   
      console.log("result",result.data.data);
      const top_restaurant:Restaurant[]=result.data.data // birinchi data axios dan kelyatkan data ikinchisi beckendiki
      return top_restaurant
    } catch (err: any) {
      console.log(`ERROR ::: getRestaurants ${err.message}`);
      throw err
    }
  }
  async getRestaurants(data:SearchObj) {
   try {
     const url = `/restaurants?order=${data.order}top&page=${data.page}&limit=${data.limit}`,
     result = await axios.get(this.path + url ,{withCredentials:true});
     assert.ok(result,Definer.general_err1)
  
     console.log("result",result.data.data);
     const restaurant:Restaurant[]=result.data.data // birinchi data axios dan kelyatkan data ikinchisi beckendiki
     return restaurant
   } catch (err: any) {
     console.log(`ERROR ::: getRestaurants ${err.message}`);
     throw err
   }
 }
}

export default RestaurantApiService;
