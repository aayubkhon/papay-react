import { Box, Link, Stack } from "@mui/material";
import React from "react";
import moment from "moment";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";




const TargetArticles = (props: any) => {
  return (
    <Stack>
      {props.targetBoArticles?.map((articles: any, index: string) => {
        const art_image_url = "/community/cute.jpeg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className="all_article_img"
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className="all_article_container">
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/auth/user.svg"
                  alt=""
                  style={{
                    width: "25px",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                    marginLeft: "15px",
                    marginTop: "10px",
                  }}
                />
                <span className="all_article_auth_user">leo</span>
              </Box>
              <Box
              className="all_evalution"
                display={"flex"}
                flexDirection={"column"}
                
              >
                <span className="all_article_title">evalution</span>
                <p className="all_article_desc">Texas De Brazil</p>
              </Box>
            </Box>
            <Box className="all_article_icon">
              <div className="all_article_icon_items">
              <span>{moment().format("YY-DD-MM HH:MM")}</span>
              <FavoriteBorder  sx={{color:"text.secondary"}}/>
              <span>100</span> 
              <RemoveRedEyeIcon />
              <span>1000</span>
              </div>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default TargetArticles;
