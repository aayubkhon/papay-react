import { Avatar, Box, Button, Link, Stack } from "@mui/material";
import React from "react";
// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Follower } from "../../types/follow";
import { retrieveMemberFollowers } from "./selector";
import { setMemberFollowers } from "./slice";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data)),
});
// REDUX SELECTOR
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

const follower = [
  { mb_nick: "leo", following: true },
  { mb_nick: "jonibek", following: false },
  { mb_nick: "sofia", following: true },
];

const MemberFollowers = (props: any) => {
  // ** INITIALIZATIONS **//
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  return (
    <Stack>
      {follower.map((follower) => {
        const image_url = "/auth/default_user.svg";
        return (
          <Box className="followers_box">
            <Box className="followers_img">
              <Avatar
                alt={""}
                src={image_url}
                sx={{ width: "80px", height: "80px" }}
              />
            </Box>
            <div className="followers_container">
              <span className="followers_auth_user">USER</span>
              <span className="followers_title">{follower.mb_nick}</span>
            </div>
            <Box className="follow_btn_box">
              {props.actions_enabled &&
                (follower.following ? (
                  <Button variant={"contained"} className="following_already">
                    FOLLOWING
                  </Button>
                ) : (
                  <Button
                    className="follow_btn"
                    variant={"contained"}
                    startIcon={
                      <img
                        style={{ width: "40px" }}
                        src="/icons/follow_Icon.svg"
                      />
                    }
                  >
                    Follow Back
                  </Button>
                ))}
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default MemberFollowers;
