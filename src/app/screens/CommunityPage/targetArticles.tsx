import { Box, Link, Stack } from "@mui/material";
import React from "react";
import moment from "moment";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticles } from "../../types/boArticle";
import { serverApi } from "../../../lib/config";

const TargetArticles = (props: any) => {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticles) => {
        const art_image_url = article.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/default_avatar";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              key={article._id}
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
                <span className="all_article_auth_user">
                  {article?.member_data.mb_nick}
                </span>
              </Box>
              <Box
                className="all_evalution"
                display={"flex"}
                flexDirection={"column"}
              >
                <span className="all_article_title">{article?.bo_id}</span>
                <p className="all_article_desc">{article?.art_subject}</p>
              </Box>
            </Box>
            <Box className="all_article_icon">
              <div className="all_article_icon_items">
                <span>{moment().format("YY-DD-MM HH:MM")}</span>
                <FavoriteBorder sx={{ color: "text.secondary" }} />
                <span>{article?.art_likes}</span>
                <RemoveRedEyeIcon />
                <span>{article?.art_views}</span>
              </div>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default TargetArticles;
