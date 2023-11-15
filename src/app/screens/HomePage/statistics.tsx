import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Marginer from "../../components/marginer";

const Statistics = () => {
  return (
    <div className="static_frame">
      <Container>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ height: "236px" }}
        >
          <div className="personage_img_left"></div>
          <Stack className="static_box">
            <Box className="static_num">12</Box>
            <Box className="static_text">Restaurants</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
          <Stack className="static_box">
            <Box className="static_num">8</Box>
            <Box className="static_text">Years Experience</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
          <Stack className="static_box">
            <Box className="static_num">50+</Box>
            <Box className="static_text">Menu dishes</Box>
          </Stack>
          <Marginer direction="vertical" height="64" width="2" bg="#e3c08d"/>
          <Stack className="static_box">
            <Box className="static_num">200+</Box>
            <Box className="static_text">Users</Box>
          </Stack>
          <div className="personage_img_right"></div>
        </Stack>
      </Container>
    </div>
  );
};

export default Statistics;
