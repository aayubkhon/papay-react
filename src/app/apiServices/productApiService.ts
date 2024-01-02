import { serverApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { ProductSearchObj } from "../types/others";
import { Definer } from "../../lib/Definer";
import { Product } from "../types/product";
class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  async getTargetProducts(data: ProductSearchObj):Promise<Product[]> {
    try {
      const url = "/products";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });
      assert.ok(result, Definer.general_err1);
      console.log("state:", result.data.state);
      const product: Product[] = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getRestaurants ${err.message}`);
      throw err;
    }
  }
  async getChosenDish(dish_id:string):Promise<Product> {
    try {
      const url = `/products/${dish_id}`;
      const result = await axios.get(this.path + url,  {
        withCredentials: true,
      });
      assert.ok(result, Definer.general_err1);
      console.log("state:", result.data.state);
      const product: Product = result.data.data;
      return product;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenProduct ${err.message}`);
      throw err;
    }
  }
}

export default ProductApiService;
