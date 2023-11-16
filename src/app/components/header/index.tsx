import React from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/papay.svg" alt="logo" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
              Main Page
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
              Restaurants
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/orders" activeClassName="underline">
                Orders
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
              Community
              </NavLink>
            </Box>
            <Box className="hover-line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
               Help
              </NavLink>
            </Box>
            <Box className="hover-line">
              <IconButton
                aria-label="cart"
                id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                // onClick={handleClick}
              >
                <Badge badgeContent={3} color="secondary">
                  <img src="/icons/shopping-cart.svg" alt="shopping-card" />
                </Badge>
              </IconButton>
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  background: "#1976d2",
                  color: "#ffffff",
                }}
              >
                KIRISH
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack className="head_information">
          <Stack
            justifyContent={"column"}
            sx={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box>
              <img src="/icons/welcome.svg" alt="logo2" />
            </Box>
            <Box className="define_restaurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                variant="contained"
                style={{
                  width: "210px",
                  height: "60px",
                  background: "#1976d2",
                  color: "#ffffff",
                }}
              >
                RO’YHATDAN O’TISH
              </Button>
            </Box>
          </Stack>
          <Stack flexDirection={"column"}>
            <Box className="big_img"></Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
