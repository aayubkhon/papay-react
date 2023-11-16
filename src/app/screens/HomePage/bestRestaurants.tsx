import React from "react";
import { Favorite } from "@mui/icons-material";
import { AspectRatio, Card, CardOverflow, CssVarsProvider, IconButton, Link, Typography } from "@mui/joy";
import { Container, Box, Stack } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";




const BestRestaurants = () => {
  return (
    <div className="best_restaurant_frame">
      <img
        style={{ position: "absolute", left: "6%", transform: "rotate(90de)" }}
        src="/icons/line.svg"
        alt=""
      />
      <Container sx={{ mt: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Best Restaurants</Box>
          <Stack sx={{mt:"45px"}} flexDirection={"row"}>
            <CssVarsProvider>
              <Card
                sx={{
                  minHeight: 483,
                  width: 320,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={1}>
                    <img src="restaurant/girl.png" alt="" />
                    <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  </AspectRatio>
                </CardOverflow>
                <Typography level="h2" sx={{fontSize:"md",mt:2}}>
                   The Bruk Restaurants
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<LocationOnRoundedIcon/>}>Turkey,Istanbul</Link>
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<CallIcon/>}>+998950010001</Link>
                  </Typography>
                  <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      level="title-md"
                      sx={{
                        fontWeight: "md",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px"}}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        height: 20,
                        bgcolor: "divider",
                        margin: " 0 10px",
                        color: "text.secondary",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>500</div>
                      <Favorite
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                  </Box>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 483,
                  width: 320,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={1}>
                    <img src="restaurant/girl.png" alt="" />
                    <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  </AspectRatio>
                </CardOverflow>
                <Typography level="h2" sx={{fontSize:"md",mt:2}}>
                   The Bruk Restaurants
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<LocationOnRoundedIcon/>}>Turkey,Istanbul</Link>
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<CallIcon/>}>+998950010001</Link>
                  </Typography>
                  <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      level="title-md"
                      sx={{
                        fontWeight: "md",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px"}}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        height: 20,
                        bgcolor: "divider",
                        margin: " 0 10px",
                        color: "text.secondary",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>500</div>
                      <Favorite
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                  </Box>
                </CardOverflow>
              </Card>
              <Card
                sx={{
                  minHeight: 483,
                  width: 320,
                  mr: "35px",
                  cursor: "pointer",
                }}
              >
                <CardOverflow>
                  <AspectRatio ratio={1}>
                    <img src="restaurant/girl.png" alt="" />
                    <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  </AspectRatio>
                </CardOverflow>
                <Typography level="h2" sx={{fontSize:"md",mt:2}}>
                   The Bruk Restaurants
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<LocationOnRoundedIcon/>}>Turkey,Istanbul</Link>
                  </Typography>
                  <Typography level="title-sm" sx={{mt:0.1,mb: 2}}>
                   <Link href="" textColor={"neutral.700"} startDecorator={<CallIcon/>}>+998950010001</Link>
                  </Typography>
                  <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography
                      level="title-md"
                      sx={{
                        fontWeight: "md",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      100{" "}
                      <VisibilityIcon
                        sx={{ fontSize: 20, marginLeft: "5px"}}
                      />
                    </Typography>
                    <Box
                      sx={{
                        width: 2,
                        height: 20,
                        bgcolor: "divider",
                        margin: " 0 10px",
                        color: "text.secondary",
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: "md",
                        color: "text.secondary",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div>500</div>
                      <Favorite
                        sx={{ fontSize: 20, marginLeft: "5px" }}
                      />
                    </Typography>
                  </Box>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default BestRestaurants;
