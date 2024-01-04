import assert from "assert";
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../types/user";
import { SearchObj } from "../types/others";
class RestaurantApiService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
  async getTopRestaurants(): Promise<Restaurant[]> {
    try {
      const url = "/restaurants?order=top&page=1&limit=4",
        result = await axios.get(this.path + url, { withCredentials: true });
        assert.ok(result?.data, Definer.general_err1);
        assert.ok(result?.data?.state !== "fail", result?.data?.message);
        console.log("state:::", result.data.state);
      const top_restaurant: Restaurant[] = result.data.data; // birinchi data axios dan kelyatkan data ikinchisi beckendiki
      return top_restaurant;
    } catch (err: any) {
      console.log(`ERROR ::: getRestaurants ${err.message}`);
      throw err;
    }
  }
  async getRestaurants(data: SearchObj): Promise<Restaurant[]> {
    try {
      const url = `/restaurants?order=${data.order}top&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });
        assert.ok(result?.data, Definer.general_err1);
        assert.ok(result?.data?.state !== "fail", result?.data?.message);
        console.log("state:::", result.data.state);
      const restaurant: Restaurant[] = result.data.data; // birinchi data axios dan kelyatkan data ikinchisi beckendiki
      return restaurant;
    } catch (err: any) {
      console.log(`ERROR ::: getRestaurants ${err.message}`);
      throw err;
    }
  }
  async getChosenRestaurant(id: string): Promise<Restaurant> {
    try {
      const url = `/restaurants/${id}`,
        result = await axios.get(this.path + url, { withCredentials: true });
        assert.ok(result?.data, Definer.general_err1);
        assert.ok(result?.data?.state !== "fail", result?.data?.message);
        console.log("state:::", result.data.state);
      const restaurants: Restaurant = result.data.data;
      return restaurants;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenRestaurant ${err.message}`);
      throw err;
    }
  }
}

export default RestaurantApiService;
