import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import assert from "assert";
import { Order } from "../../types/orders";
import { Product } from "../../types/product";
import { serverApi } from "../../../lib/config";
import { retrieveFinishedOrders } from "./selector";

// **  REDUX SELECTOR */
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);

// * HANDLERS* //

const FinishedOrders = (props:any) => {
  // **  INITIALIZATIONS */
  // const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value={"3"}>
      {/* <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Stack flexDirection={"column"} className="order_main_box ">
              <Box className="order_box_scroll">
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product._id
                  )[0];
                  const img_path = `${serverApi}/${product.product_images[0]}`;
                  return (
                    <Stack flexDirection={"row"}>
                      <Box className="orders_name_price">
                        <img className="orderDish_img" src={img_path} alt="" />
                        <p className="title">{product.product_name}</p>
                        <Box className="price_box">
                          <p>$ {item.item_price}</p>
                          <img src="/icons/Close.svg" alt="" />
                          <p>{item.item_quantity}</p>
                          <img src="/icons/Pause.svg" alt="" />
                          <p style={{ marginLeft: "15px" }}>
                            $ {item.item_price * item.item_quantity}
                          </p>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
              <Stack
                className="total_price_box red_solid"
                flexDirection={"row"}
              >
                <Box className="boxTotal finish_box">
                  <div className="boxTotal_flex">
                    <p>mahsulot narxi</p>
                    <p>
                      $ {order.order_total_amount - order.order_delivery_cost}
                    </p>
                    <img src="/icons/Plus.svg" alt="" />
                    <p>yetkazish xizmati</p>
                    <p>$ {order.order_delivery_cost}</p>
                    <img src="/icons/total.svg" alt="" />
                    <p>jami narx</p>
                    <p>$ {order.order_total_amount}</p>
                  </div>
                </Box>
              </Stack>
            </Stack>
          );
        })}
      </Stack> */}
    </TabPanel>
  );
};

export default FinishedOrders;
