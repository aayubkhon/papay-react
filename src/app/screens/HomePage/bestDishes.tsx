import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { MonetizationOn } from "@mui/icons-material";

const BestDishes = () => {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trendagi Ovqatlar</Box>
          <Stack sx={{mt:"45px"}}>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_30/2943911/190723-easy-chow-mein-al-1414.jpg")`,
                }}
              >
                <div className="dish_sale">normal size</div>
                <div className="view_btn">
                  Batafsil ko'rish
                  <img
                    style={{ marginLeft: "9px" }}
                    src="/icons/arrow.svg"
                    alt=""
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Quvurma Lagmon</span>
                <span className="dish_desc_text">
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default BestDishes;
