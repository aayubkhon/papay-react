import React from "react";
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

const choosen_dish = Array.from(Array(2).keys());
const ChoosenDish = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
            {choosen_dish.map((ele, index) => {
              const img_path = "/others/gosh.png";
              return (
                <SwiperSlide className="swiper_img">
                  <img src={img_path} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            loop={true}
            spaceBetween={5}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="dish_swiper_buttom"
          >
            {choosen_dish.map((ele, index) => {
              const img_path = "/others/steak.png";
              return (
                <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}>
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
            <strong className="dish_text">Sweet Steak</strong>
            <span className="resto_name">Texas De Brazil</span>
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
                    checked={true}
                  />
                  <span>98 ta</span>
                </div>
                <div className="evalution_icon">
                  <RemoveRedEyeIcon sx={{ mr: "10px", ml: "10px" }} />
                  <span>1000 ta</span>
                </div>
              </div>
            </Box>
            <p className="dish_desc_info">Juda mazali steak</p>
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
              <span className="price">$11</span>
            </div>
            <div className="button_box">
              <Button className="button" variant="contained">
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
