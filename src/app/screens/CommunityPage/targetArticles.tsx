import { Box, Checkbox, Link, Stack } from "@mui/material";
import React from "react";
import moment from "moment";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticles } from "../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiService";
import {
  sweetErrorhandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import Favorite from "@mui/icons-material/Favorite";

const TargetArticles = (props: any) => {
  /*HANDLERS*/
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { setArticlesRebuild } = props;

  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorhandling(err).then();
    }
  };
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
                  }}
                />
                <span className="all_article_auth_user">
                  {article?.member_data.mb_nick}
                </span>
              </Box>
              <Box
                sx={{ display: "flex", mt: "15px" }}
                flexDirection={"column"}
              >
                <span className="all_article_title">{article?.bo_id}</span>
                <p className="all_article_desc">{article?.art_subject}</p>

                <Box className="article_bott_box">
                  <span>
                    {moment(article.createdAt).format("YY-MM-DD HH:MM")}
                  </span>
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    id={article?._id}
                    onClick={targetLikeHandler}
                    checked={
                      article?.me_liked && article.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
                  />
                  <span>{article?.art_likes}</span>
                  <RemoveRedEyeIcon sx={{ m: "0 10px" }} />
                  <span>{article?.art_views}</span>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default TargetArticles;
