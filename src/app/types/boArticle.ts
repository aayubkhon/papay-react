import { MeLiked } from "./product";
import { Member } from "./user";

export interface BoArticles {
  _id: string;
  art_subject: string;
  art_content: string;
  art_image?: string | null;
  bo_id: string;
  art_status: string;
  art_likes: number;
  art_views: number;
  mb_id: string;
  createdAt: Date;
  updateAt: Date;
  member_data: Member;
  me_liked: MeLiked[]; //Me liked
}

export interface SearchArticlesObj {
  page: number;
  limit: number;
  bo_id: string;
  order?: number | null;
}

export interface SearchMemberBoArticles {
  page: number;
  limit: number;
  mb_id: string;
}
