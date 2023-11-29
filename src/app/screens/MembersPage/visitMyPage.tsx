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
import TuiEditor from "./tuiEditor";
import TvIewer from "./TvIewer";

const VisitMyPage = () => {
  // ** INITIALIZATIONS **//
  const [value, setValue] = useState("5");

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
                    <MemberFollowers actions_enabled={true} />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className="menu_name">Followings</Box>
                  <Box>
                    <MemberFollowing actions_enabled={true} />
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
                    <TvIewer text={`<h3>HELLO</h3>`} />
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
                    <img className="user_svg" src="/icons/user.svg" alt="" />
                  </div>
                  <span className="user_name">Oliver Queen</span>
                  <span className="user">USER</span>
                </Box>
                <Box className="user_media_box">
                  <Facebook />
                  <Instagram />
                  <Telegram />
                  <YouTube />
                </Box>
                <Box className="user_media_box">
                  <p>Followers:3</p>
                  <p>Followings:2</p>
                </Box>
                <p className="user_desc">Qushimcha malumot kiritilmagan</p>
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
