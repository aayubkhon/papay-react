import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Rating from "@mui/material/Rating";
import Marginer from "../../components/marginer";

// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Restaurant } from "../../types/user";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorhandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiService";
import { useHistory, useParams } from "react-router-dom";
import { retrieveChosenRestaurant, retrieveChosenProduct } from "./selector";
import { setChosenRestaurants, setChosenProduct } from "./slice";
import ProductApiService from "../../apiServices/productApiService";
import { Product } from "../../types/product";
import RestaurantApiService from "../../apiServices/restaurantApiService";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
  setChosenRestaurants: (data: Restaurant) =>
    dispatch(setChosenRestaurants(data)),
});

// **  REDUX SELECTOR */
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenRestaurant) => ({
    chosenRestaurant,
  })
);
const choosen_dish = Array.from(Array(2).keys());
const ChoosenDish = (props: any) => {
  // **  INITIALIZATIONS */
  let { dish_id } = useParams<{ dish_id: string }>();
  const { setChosenProduct, setChosenRestaurants } = actionDispatch(
    useDispatch()
  );
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const dishRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenDish(dish_id);
      setChosenProduct(product);

      const restaurantService = new RestaurantApiService();
      const restaurant = await restaurantService.getChosenRestaurant(
        product.restaurant_mb_id
      );
      setChosenRestaurants(restaurant);
    } catch (err) {
      console.log(`dishRelatedProcess: ERROR:`, err);
    }
  };
  useEffect(() => {
    dishRelatedProcess().then();
  }, [productRebuild]);
  // * HANDLERS* //

  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const data = { like_ref_id: e.target.id, group_type: "product" };
      const like_result: any = await memberService.memberLikeTarget(data);
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR:::", err);
      sweetErrorhandling(err).then();
    }
  };

  return (
    <div className="choosen_dish_page">
      <Container className="dish_container">
        <Stack flexDirection={"row"} className="choosen_dish_main">
          <Swiper
            loop={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper"
          >
            {chosenProduct?.product_images.map((ele: string) => {
              const img_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide className="swiper_img">
                  <img src={img_path} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={chosenProduct?.product_images.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper_buttom"
          >
            {chosenProduct?.product_images.map((ele: string) => {
              const img_path = `${serverApi}/${ele}`;

              return (
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                  <img
                    style={{ width: "160px", height: "107px" }}
                    src={img_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_text">{chosenProduct?.product_name}</strong>
            <span className="resto_name">{chosenRestaurant?.mb_nick}</span>
            <Box className="rating_box">
              <Rating
                className="rating"
                name="half-rating"
                defaultValue={3.5}
                precision={0.5}
              />
              <div className="evalution_box">
                <div className="evalution_items">
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    checked={
                      chosenProduct?.me_liked &&
                      !!chosenProduct?.me_liked[0]?.my_favorite
                    }
                    id={chosenProduct?._id}
                    onClick={targetLikeProduct}
                  />
                  <span>{chosenProduct?.product_likes}ta</span>
                </div>
                <div className="evalution_icon">
                  <RemoveRedEyeIcon sx={{ mr: "10px", ml: "10px" }} />
                  <span>{chosenProduct?.product_views} ta</span>
                </div>
              </div>
            </Box>
            <p className="dish_desc_info">
              {chosenProduct?.product_description
                ? chosenProduct?.product_description
                : "no description"}
            </p>
            <div style={{ marginTop: "60px", width: "90%" }}>
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#000000"
              />
            </div>
            <div className="dish_price_box">
              <span className="text_price">Narxi:</span>
              <span className="price">$ {chosenProduct?.product_price}</span>
            </div>
            <div className="button_box">
              <Button
                onClick={() => props.onAdd(chosenProduct)}
                className="button"
                variant="contained"
              >
                Savatga qo'shish
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default ChoosenDish;
