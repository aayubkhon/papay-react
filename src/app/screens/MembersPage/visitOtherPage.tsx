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
import React, { useState } from "react";
import MemberPosts from "./memberPosts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MemberFollowers from "./memberFollowers";
import MemberFollowing from "./memberFollowing";
import MySettings from "./mySettings";
import SettingsIcon from "@mui/icons-material/Settings";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";
import TvIewer from "./TvIewer";
import { Member } from "../../types/user";
import { BoArticles } from "../../types/boArticle";
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

// **  REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenMember: (data: Member[]) => dispatch(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticles[]) =>
    dispatch(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticles[]) =>
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
const VisitOtherPage = (props:any) => {
  // ** INITIALIZATIONS **//
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
  const [value, setValue] = useState("4");

  // ** HANDLERS **//
  const hendleChange = (event: any, newValue: string) => {
    setValue(newValue);
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
                    <MemberPosts />
                    <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className="article_bott">
                        <Pagination
                          count={5}
                          page={1}
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
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className="menu_name">Followers</Box>
                  <Box>
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className="menu_name">Followings</Box>
                  <Box>
                    <MemberFollowing actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value={"4"}>
                  <Box className="menu_name">Tanlangan Maqola</Box>
                  <Box>
                    <TvIewer text={`<h3>HELLO</h3>`} />
                  </Box>
                </TabPanel>
                <TabPanel value={"5"}>
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
                    <img className="user_svg" src="/icons/user.svg" alt="" />
                  </div>
                  <span className="user_name">Sherbek</span>
                  <span className="user">USER</span>
                </Box>
                <Box className="user_media_box">
                  <Facebook />
                  <Instagram />
                  <Telegram />
                  <YouTube />
                </Box>
                <Box className="user_media_box">
                  <p>Followers:10</p>
                  <p>Followings:22</p>
                </Box>
                <p className="user_desc">Men yangi xaridor</p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <TabList
                    onChange={hendleChange}
                    aria-label="lab API tabs example"
                  >
                    {true ? (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                            variant="contained"
                            onClick={() => setValue("4")}
                            style={{ background: " rgba(247, 9, 9, 0.72)" }}
                          >
                            BEKOR QILISH
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                            variant="contained"
                            onClick={() => setValue("4")}
                            style={{ background: "#30945E" }}
                          >
                            FOLLOW QILISH
                          </Button>
                        )}
                      />
                    )}
                  </TabList>
                </Box>
              </Stack>
              <Box className="menu_wrapper">
                <Box onClick={() => setValue("1")} className="tab_menu">
                  <img src="/icons/Pencil.svg" alt="icon" />{" "}
                  <span style={{ marginLeft: "15px" }}>Maqolalari</span>
                </Box>
                <Box onClick={() => setValue("2")} className="tab_menu">
                  <img src="/icons/Group.svg" alt="icon" />
                  <span style={{ marginLeft: "15px" }}>Followers</span>
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

export default VisitOtherPage;
