import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  BoArticles,
  SearchArticlesObj,
  SearchMemberBoArticles,
} from "../types/boArticle";
import assert from "assert";
import { Definer } from "../../lib/Definer";

class CommunityApiService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getTargetArticles(
    data: SearchArticlesObj
  ): Promise<BoArticles[]> {
    try {
      let url = `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
      if (data.order) url += `&order=${data.order}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:::", result.data.state);
      const articles: BoArticles[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetArticles ${err.message}`);
      throw err;
    }
  }

  public async getMemberCommunityArticles(
    data: SearchMemberBoArticles
  ): Promise<BoArticles[]> {
    try {
      let url = `/community/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:::", result.data.state);
      const articles: BoArticles[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`ERROR ::: getMemberCommunityArticles ${err.message}`);
      throw err;
    }
  }

  public async getChosenArticle(art_id: string): Promise<BoArticles> {
    try {
      let url = `/community/single-article${art_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      console.log("state:::", result.data.state);
      const article: BoArticles = result.data.data;
      return article;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenArticle ${err.message}`);
      throw err;
    }
  }
}

export default CommunityApiService;
