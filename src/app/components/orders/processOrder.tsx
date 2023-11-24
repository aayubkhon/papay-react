import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";

const processOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const ProcessOrders = (props: any) => {
  return (
    <TabPanel value={"1"}>
      <Stack>
        {processOrders.map((order) => {
          return (
            <Stack flexDirection={"column"} className="order_main_box ">
              <Box className="order_box_scroll">
                {order.map((item) => {
                  const img_path = "/others/steak.png";
                  return (
                    <Stack flexDirection={"row"}>
                      <Box className="orders_name_price">
                        <img className="orderDish_img" src={img_path} alt="" />
                        <p className="title">Steak</p>
                        <Box className="price_box">
                          <p>$12</p>
                          <img src="/icons/Close.svg" alt="" />
                          <p>7</p>
                          <img src="/icons/Pause.svg" alt="" />
                          <p style={{ marginLeft: "15px" }}>$32</p>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
              <Stack
                className="total_price_box  white_solid"
                flexDirection={"row"}
              >
                <Box className="boxTotal">
                  <p>mahsulot narxi</p>
                  <p>$22</p>
                  <img src="/icons/Plus.svg" alt="" />
                  <p>yetkazish xizmati</p>
                  <p>$2</p>
                  <img src="/icons/total.svg" alt="" />
                  <p>jami narx</p>
                  <p>$28</p>
                </Box>
                <Button className="total_close_btn">BEKOR QILISH</Button>
                <Button className="total_price_btn">Tolash</Button>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export default ProcessOrders;


