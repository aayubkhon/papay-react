import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { useParams } from "react-router-dom";
import { ProductSearchObj } from "../../types/others";

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
import { useHistory } from "react-router-dom";
import {
  retrieveChosenRestaurant,
  retrieveTargetProducts,
  retrieveRandomRestaurant,
} from "./selector";
import {
  setRandomRestaurants,
  setChosenRestaurants,
  setTargetProducts,
} from "./slice";
import ProductApiService from "../../apiServices/productApiService";
import { Product } from "../../types/product";
import RestaurantApiService from "../../apiServices/restaurantApiService";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setRandomRestaurants: (data: Restaurant[]) =>
    dispatch(setRandomRestaurants(data)),
  setChosenRestaurants: (data: Restaurant[]) =>
    dispatch(setChosenRestaurants(data)),
  setTargetProducts: (data: Product[]) => dispatch(setTargetProducts(data)),
});

// **  REDUX SELECTOR */
const randomRestaurantsRetriever = createSelector(
  retrieveRandomRestaurant,
  (randomRandomRestaurant) => ({
    randomRandomRestaurant,
  })
);
const chosenRestaurantsRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenChosenRestaurant) => ({
    chosenChosenRestaurant,
  })
);
const targetProductsRetriever = createSelector(
  retrieveTargetProducts,
  (targetProducts) => ({
    targetProducts,
  })
);

// * HANDLERS* //

const OneRestaurants = () => {
  // **  INITIALIZATIONS */
  const { restaurant_id } = useParams<{ restaurant_id: string }>();
  const { setRandomRestaurants, setChosenRestaurants, setTargetProducts } =
    actionDispatch(useDispatch());
  const { randomRandomRestaurant } = useSelector(randomRestaurantsRetriever);
  const { chosenChosenRestaurant } = useSelector(chosenRestaurantsRetriever);
  const { targetProducts } = useSelector(targetProductsRetriever);
  const [chosenRestaurantId, setChosenRestaurantId] =
    useState<string>(restaurant_id);
  const [targetProductSearchObj, setTargetProductSearchObj] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 8,
      order: "createdAt",
      restaurant_mb_id: restaurant_id,
      product_collection: "dish",
    });
  useEffect(() => {
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getRestaurants({ page: 1, limit: 10, order: "random" })
      .then((data) => setRandomRestaurants(data))
      .catch((err) => console.log(err));
    const productService = new ProductApiService();
    productService
      .getTargetProducts(targetProductSearchObj)
      .then((data) => setTargetProducts(data))
      .catch((err) => console.log(err));
  }, [targetProductSearchObj]);
  
  const history = useHistory();
  // * HANDLERS* //
  const chosenRestaurantHandler = (id: string) => {
    setChosenRestaurantId(id);
    targetProductSearchObj.restaurant_mb_id = id;
    setTargetProductSearchObj({ ...targetProductSearchObj });
    history.push(`/restaurant/${id}`);
  };
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar_big_box">
            <Box className="top_text">
              <p>Texas De Brazil Restaurant</p>
              <Box className="Single_search_big_box">
                <form action="" className="Single_search_form">
                  <input
                    type="search"
                    className="Single_searchInput"
                    name="Single_reSearch"
                    placeholder="Qidiruv"
                  />
                  <Button
                    className="Single_button_search"
                    variant="contained"
                    endIcon={<SearchIcon />}
                  >
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", marginTop: "35px" }}
            flexDirection={"row"}
          >
            <Box className={"prev_btn restaurant-prev"}>
              <ArrowBackIosNewIcon
                style={{ fontSize: "40px", color: "#ffffff" }}
              />
            </Box>
            <Swiper
              className="restaurant_avatars_wrapper"
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {randomRandomRestaurant.map((ele: Restaurant) => {
                const image_path = `${serverApi}/${ele.mb_image}`;

                return (
                  <SwiperSlide
                    onClick={() => chosenRestaurantHandler(ele._id)}
                    className="restaurant_avatars"
                    style={{ cursor: "pointer" }}
                    key={ele._id}
                  >
                    <img src={image_path} />
                    <span>{ele.mb_nick}</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box
              className="next_btn restaurant-next"
              style={{ color: "#ffffff" }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}
          >
            <Box className="dishs_filter_box">
              <Button variant="contained" color="secondary">
                new
              </Button>
              <Button variant="contained" color="secondary">
                price
              </Button>
              <Button variant="contained" color="secondary">
                likes
              </Button>
              <Button variant="contained" color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{
              width: "100%",
              display: "flex",
              minHeight: "600px",
              flexDirection: "row",
            }}
          >
            <Stack className="dish_category_box">
              <div className="dish_category_main">
                <Button variant="contained" color="secondary">
                  boshqa
                </Button>
                <Button variant="contained" color="secondary">
                  desert
                </Button>
                <Button variant="contained" color="secondary">
                  ichimlik
                </Button>
                <Button variant="contained" color="secondary">
                  salad
                </Button>
                <Button variant="contained" color="secondary">
                  ovqatlar
                </Button>
              </div>
            </Stack>
            <Stack className="dish_wrapper">
              {targetProducts.map((product: Product) => {
                const image_path = `${serverApi}/${product.product_images[0]}`;
                const size_volume =
                  product.product_collection === "drink"
                    ? product.product_volume + "liter"
                    : product.product_size + " size";
                return (
                  <Box className="dish_box" key={product._id}>
                    <Box
                      className="dish_img"
                      sx={{
                        backgroundImage: `url(${image_path})`,
                      }}
                    >
                      <div className="dish_sale">{size_volume}</div>
                      <Button
                        className="like_view_btn"
                        style={{ left: "36px" }}
                      >
                        <Badge
                          badgeContent={product.product_likes}
                          color="primary"
                        >
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={product._id}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            checked={
                              product?.me_liked &&
                              product?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Badge>
                      </Button>
                      <Button className="view_btn">
                        <img
                          src="/icons/shopping-cart.svg"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className="like_view_btn"
                        style={{ right: "36px" }}
                      >
                        <Badge
                          badgeContent={product.product_views}
                          color="primary"
                        >
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "#ffffff" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className="dish_desc">
                      <span className="dish_title_text">
                        {product.product_name}
                      </span>
                      <div className="dish_desc_text">
                        <MonetizationOnIcon /> {product.product_price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className="review_for_restaurant">
        <Container
          sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="category_title">Oshxona haqida fikrlar</Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box key={index} className="review_box">
                  <Box display={"flex"} justifyContent={"center"}>
                    <img src="/community/cute.jpeg" className="review_img" />
                  </Box>
                  <span className="review_name">Sofia</span>
                  <span className="review_prof">Foydalanuvchi</span>
                  <p className="review_desc">
                    I liked this restaurant and I recomended
                  </p>
                  <div className="review_starts">
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

      <Container className="member_reviews">
        <Box className="category_title" sx={{ textAlign: "center" }}>
          Oshxona haqida
        </Box>
        <Stack className="about_restaurnt_stack">
          <Box
            className="about_left"
            sx={{ backgroundImage: `url('/restaurant/welcome.jpeg')` }}
          >
            <div className="about_left_desc">
              <span>Welcome</span>
              <p>Eng Mazali Oshxona</p>
            </div>
          </Box>
          <Box className="about_right">
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  key={index}
                >
                  <div className="about_right_img"></div>
                  <div className="about_right_desc">
                    <span>Bizning mohir oshpazlarimiz</span>
                    <p>
                      Bizning oshpazlarimiz dunyo taniydigan oliygohlarda malaka
                      oshirib kelishgan
                    </p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Stack
          style={{
            margin: "60px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className="category_title">Our Location</Box>
          <iframe
            style={{ marginTop: "60px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25871.195670343193!2d128.74769894999997!3d35.8514688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35660c150b017f17%3A0x490a4eedabce466d!2sYeungnam%20University%20Museum!5e0!3m2!1sen!2skr!4v1700652660751!5m2!1sen!2skr"
            width={"1320"}
            height={"500"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </div>
  );
};

export default OneRestaurants;
