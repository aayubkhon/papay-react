import React, { useState } from "react";
import {
  Box,
  Container,
  Pagination,
  PaginationItem,
  Stack,
  Tab,
} from "@mui/material";
import "../../css/community.css";
import CommunitiChats from "./communitiChats";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TargetArticles from "./targetArticles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const targetBoArticles = [1, 2, 3, 4, 5];

export function CommunityPage(props: any) {
  // ** INITIALIZATIONS **//
  const [value, setValue] = useState("1");

  // ** HANDLERS **//
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };
  return (
    <div className="community_page">
      <div className="community_frame">
        <Container sx={{ mt: "50px", mb: "50px",ml:"65px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunitiChats />
            <Stack
              className="community_all_frame"
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={value}>
                <Box className="community_nav_frame">
                  <Box
                    className="tab_box"
                    sx={{ borderBottom: 1, borderColor: "devider" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderBlockColor: "blue" }}
                    >
                      <Tab label="Barcha Maqolalar" value={"1"} />
                      <Tab label="Mashxurlar" value={"2"} />
                      <Tab label="Oshxonaga baho" value={"3"} />
                      <Tab label="Hikoyalar" value={"4"} />
                    </TabList>
                  </Box>
                </Box>
                <Box className="article_main">
                  <TabPanel value={"1"}>
                    <TargetArticles
                      targetBoArticles={[1, 2, 3]}
                      test={"Mashxurlar"}
                    />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles
                      targetBoArticles={[1, 2, 3, 4]}
                      test={"Maqolar"}
                    />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                </Box>
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
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
