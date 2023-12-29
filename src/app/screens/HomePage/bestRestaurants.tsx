import React, { useRef } from "react";
import { Favorite } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Container, Box, Stack, Button } from "@mui/material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveBestRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../types/user";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorhandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";

// **  REDUX SELECTOR */
const bestRestaurantRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);
const BestRestaurants = () => {
  // **  INITIALIZATIONS */
  const refs: any = useRef([]);
  const history = useHistory();
  const { bestRestaurants } = useSelector(bestRestaurantRetriever);

  // * HANDLERS* //
  const chosenRestaurantHandlar = (id: any) => {
    history.push(`/restaurant/${id}`);
  };
  const goRestaurantsHandler = () => history.push("/restaurant")
  const targetLikeBest = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService(),
        like_result = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "member",
        });
      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeTop,ERROR:", err);
      sweetErrorhandling(err).then();
    }
  };
  return (
    <div className="best_restaurant_frame">
      <img
        style={{ position: "absolute", left: "6%", transform: "rotate(90deg)" }}
        src="/icons/line.svg"
        alt=""
      />
      <Container sx={{ mt: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Best Restaurants</Box>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            sx={{ mt: "45px" }}
          >
            {bestRestaurants.map((ele: Restaurant) => {
              const image_path = `${serverApi}/${ele.mb_image}`;
              return (
                <CssVarsProvider key={ele._id}>
                  <Card
                    onClick={() => chosenRestaurantHandlar(ele._id)}
                    variant="outlined"
                    sx={{
                      minHeight: 483,
                      minWidth: 320,
                      mr: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio={1}>
                        <img src={image_path} alt="" />
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
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Favorite
                            onClick={(e) => targetLikeBest(e, ele._id)}
                            style={{
                              fill:
                                ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                  ? "red"
                                  : "white",
                            }}
                          />
                        </IconButton>
                      </AspectRatio>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick}
                    </Typography>
                    <Typography level="title-sm" sx={{ mt: 0.1, mb: 2 }}>
                      <Link
                        href=""
                        textColor={"neutral.700"}
                        startDecorator={<LocationOnRoundedIcon />}
                      >
                        {ele.mb_adress}
                      </Link>
                    </Typography>
                    <Typography level="title-sm" sx={{ mt: 0.1, mb: 2 }}>
                      <Link
                        href=""
                        textColor={"neutral.700"}
                        startDecorator={<CallIcon />}
                      >
                        {ele.mb_phone}
                      </Link>
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
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Typography
                          level="title-md"
                          sx={{
                            fontWeight: "md",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {ele.mb_views}
                          <VisibilityIcon
                            sx={{ fontSize: 20, marginLeft: "5px" }}
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
                          <div
                            ref={(element) => (refs.current[ele._id] = element)}
                          >
                            {ele.mb_likes}
                          </div>
                          <Favorite sx={{ fontSize: 20, marginLeft: "5px" }} />
                        </Typography>
                      </Box>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            sx={{ width: "100%", mt: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "white" }} onClick={goRestaurantsHandler}>
              BARCHASINI KO’RISH
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default BestRestaurants;
