export interface SearchObj {
  page: number;
  limit: number;
  order: string;
}


export interface ProductSearchObj {
  page: number;
  limit: number;
  order: string;
  restaurant_mb_id?:"",
  product_collection?:"all"
}

export interface MemberLiken{
  like_group:string,
  like_status:number,
  like_ref_id:string

}