import React, { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import { MonetizationOn } from "@mui/icons-material";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {} from "../../screens/HomePage/slice";
import ProductApiService from "../../apiServices/productApiService";
import { Product } from "../../types/product";
import { retrieveTrendProducts } from "./selector";
import { setTrendProducts } from "../../screens/HomePage/slice";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTrendProducts: (data: Product[]) => dispatch(setTrendProducts(data)),
});

// **  REDUX SELECTOR */
const trendProductsRetriever = createSelector(
  retrieveTrendProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

const BestDishes = () => {
  // **  INITIALIZATIONS */
  const history = useHistory();

  const { setTrendProducts } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);

  useEffect(() => {
    const productService = new ProductApiService();
    productService
      .getTargetProducts({ order: "product_likes", page: 1, limit: 4 })
      .then((data) => setTrendProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // **  HANDLERS */

  const chosenDishHandler = (id: string) => {
    history.push(`/restaurant/dish/${id}`);
  };

  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trendagi Ovqatlar</Box>
          <Stack flexDirection={"row"} sx={{ mt: "45px" }}>
            {trendProducts.map((product: Product) => {
              const image_path = `${serverApi}/${product.product_images}`;
              const size_volume =
                product.product_collection === "drink"
                  ? product.product_volume + "l"
                  : product.product_size + "size";
              return (
                <Box className="dish_box">
                  <Stack
                    className="dish_img"
                    sx={{
                      backgroundImage: `url(${image_path})`,
                    }}
                  >
                    <div className="dish_sale">{size_volume}</div>
                    <div className="view_btn">
                      <div onClick={() => chosenDishHandler(product?._id)}>
                        Batafsil ko'rish
                      </div>
                      <img
                        style={{ marginLeft: "9px" }}
                        src="/icons/arrow.svg"
                        alt=""
                      />
                    </div>
                  </Stack>
                  <Stack className="dish_desc">
                    <span className="dish_title_text">
                      {product.product_name}
                    </span>
                    <span className="dish_desc_text">
                      <MonetizationOn />
                      {product.product_price}
                    </span>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default BestDishes;
