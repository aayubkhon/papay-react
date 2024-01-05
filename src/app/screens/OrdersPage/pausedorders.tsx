import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import moment from "moment";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import assert from "assert";
import { Order } from "../../types/orders";
import { serverApi } from "../../../lib/config";
import { Product } from "../../types/product";
import { retrievePausedOrders } from "./selector";
import {
  sweetErrorhandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiService";

// **  REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders)=>({
    pausedOrders
  })
)

const PausedOrders = (props: any) => {
  // **  INITIALIZATIONS */
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  // * HANDLERS* //

  const deleteOrderHandler = async (e: any) => {
    try {
      const order_id = e.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };
      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider("Please login first", true);
      }
      let confirmation = window.confirm(
        "Buyurtmani bekor qilishni xohlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR:", err);
      sweetErrorhandling(err).then();
    }
  };
  const processOrderHandler = async (e: any) => {
    try {
      const order_id = e.target.value;
      const data = { order_id: order_id, order_status: "PROCESS" };
      if (!localStorage.getItem("member_data")) {
        sweetFailureProvider("Please login first", true);
      }
      let confirmation = window.confirm("Buyurtmani to'lashni tasdiqlaysizmi?");
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("processOrderHandler, ERROR:", err);
      sweetErrorhandling(err).then();
    }
  };
  return (
    <TabPanel value={"2"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
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
                className="total_price_box green_solid"
                flexDirection={"row"}
              >
                <Box className="boxTotal">
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
                </Box>
                <span>{moment().format("YY-DD-MM HH:MM")}</span>
                <Button className="total_price_btn">YAKUNLASH</Button>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export default PausedOrders;
