import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Container,
  Stack,
  Pagination,
  PaginationItem,
  Tab,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MemberPosts from "./memberPosts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MemberFollowers from "./memberFollowers";
import MemberFollowing from "./memberFollowing";
import MySettings from "./mySettings";
import SettingsIcon from "@mui/icons-material/Settings";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";
import TuiEditor from "./tuiEditor";
import TvIewer from "./TvIewer";
import { Member } from "../../types/user";
import { BoArticles, SearchMemberBoArticles } from "../../types/boArticle";
// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrieveChosenMember,
  retrieveChosenMemberBoArticles,
  retrieveChosenSingleBoArticle,
} from "./selector";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import {
  sweetErrorhandling,
  sweetFailureProvider,
} from "../../../lib/sweetAlert";
import CommunityApiService from "../../apiServices/communityApiService";
import MemberApiService from "../../apiServices/memberApiService";
import { verifyMemberData } from "../../apiServices/verify";

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenMember: (data: Member) => dispatch(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticles[]) =>
    dispatch(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticles) =>
    dispatch(setChosenSingleBoArticle(data)),
});

// **  REDUX SELECTOR */
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticleRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenSingleBoArticle) => ({
    chosenSingleBoArticle,
  })
);
const VisitMyPage = (props: any) => {
  // ** INITIALIZATIONS **//
  const { virifiedMemberData } = props;

  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriever
  );
  const { chosenSingleBoArticle } = useSelector(chosenSingleBoArticleRetriever);
  const [value, setValue] = useState("1");
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberBoArticles>({
      mb_id: "none",
      page: 1,
      limit: 5,
    });
  useEffect(() => {
    if (!localStorage.getItem("member_data")) {
      sweetFailureProvider("Please login first", true, true);
    }
    const communityService = new CommunityApiService();
    const memberService = new MemberApiService();

    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));

    //setChosenMember
    memberService
      .getChosenMember(virifiedMemberData?._id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, articlesRebuild,followRebuild]);

  // ** HANDLERS **//
  const hendleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const hendlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("5");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorhandling(err).then();
    }
  };
  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value={"1"}>
                  <Box className="menu_name">Mening Maqolalarim</Box>
                  <Box className="menu_content">
                    <MemberPosts
                      chosenMemberBoArticles={chosenMemberBoArticles}
                      renderChosenArticleHandler={renderChosenArticleHandler}
                      setArticlesRebuild={setArticlesRebuild}
                    />
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className="article_bott">
                        <Pagination
                          count={memberArticleSearchObj.page >= 3 ? memberArticleSearchObj.page + 1 : 3}
                          page={memberArticleSearchObj.page}
                          renderItem={(item) => (
                            <PaginationItem
                              style={{ color: "white" }}
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}
                          onChange={hendlePaginationChange}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className="menu_name">Followers</Box>
                  <Box>
                    <MemberFollowers
                      actions_enabled={true}
                      mb_id={props.verifyMemberData?.id}
                      setFollowRebuild={setFollowRebuild}
                      followRebuild={followRebuild}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className="menu_name">Followings</Box>
                  <Box>
                    <MemberFollowing
                      actions_enabled={true}
                      mb_id={props.verifyMemberData?.id}
                      setFollowRebuild={setFollowRebuild}
                      followRebuild={followRebuild}
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={"4"}>
                  <Box className="menu_name">Maqola Yozish</Box>
                  <Box>
                    <TuiEditor />
                  </Box>
                </TabPanel>
                <TabPanel value={"5"}>
                  <Box className="menu_name">Tanlangan Maqola</Box>
                  <Box>
                    <TvIewer chosenSingleBoArticle={chosenSingleBoArticle} />
                  </Box>
                </TabPanel>
                <TabPanel value={"6"}>
                  <Box className="menu_name">Malumotlarni Ozgartirish</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right_frame">
              <Stack className="my_page_right">
                <Box className="order_info_box">
                  <a onClick={() => setValue("6")} className="setting_box">
                    <SettingsIcon />
                  </a>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="avatar_box">
                    <img
                      className="avatar_svg"
                      style={{ width: "100px", marginTop: "30px" }}
                      src="/auth/avatar.svg"
                      alt=""
                    />
                  </div>
                  <div className="user_box">
                    <img
                      className="user_svg"
                      src={
                        chosenMember?.mb_type === "RESTAURANT"
                          ? "/icons/restaurant.svg"
                          : "/icons/user.svg"
                      }
                      alt=""
                    />
                  </div>
                  <span className="user_name">{chosenMember?.mb_nick}</span>
                  <span className="user">{chosenMember?.mb_type}</span>
                </Box>
                <Box className="user_media_box">
                  <Facebook />
                  <Instagram />
                  <Telegram />
                  <YouTube />
                </Box>
                <Box className="user_media_box">
                  <p>Followers:{chosenMember?.mb_subscriber_cnt}</p>
                  <p>Followings:{chosenMember?.mb_follow_cnt}</p>
                </Box>
                <p className="user_desc">
                  {chosenMember?.mb_description ??
                    "Qushimcha malumot kiritilmagan"}
                </p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={hendleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"4"}
                      component={() => (
                        <Button
                          variant="contained"
                          onClick={() => setValue("4")}
                        >
                          Maqola Yozish
                        </Button>
                      )}
                    />
                  </TabList>
                </Box>
              </Stack>
              <Box className="menu_wrapper">
                <Box onClick={() => setValue("1")} className="tab_menu">
                  <img src="/icons/Pencil.svg" alt="icon" />{" "}
                  <span style={{ marginLeft: "15px" }}>Maqolalarim</span>
                </Box>
                <Box onClick={() => setValue("2")} className="tab_menu">
                  <img src="/icons/Group.svg" alt="icon" />
                  <span style={{ marginLeft: "15px" }}>Follower</span>
                </Box>
                <Box onClick={() => setValue("3")} className="tab_menu">
                  <img src="/icons/User.svg" alt="icon" />
                  <span style={{ marginLeft: "15px" }}>Followings</span>
                </Box>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
};

export default VisitMyPage;
