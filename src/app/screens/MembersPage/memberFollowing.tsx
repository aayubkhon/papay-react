import { Avatar, Box, Button, Link, Stack } from "@mui/material";
import React from "react";
// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Following } from "../../types/follow";
import { retrieveMemberFollowings } from "./selector";
import { setMemberFollowings } from "./slice";

// REDUX SLICE
const actionDispatch = (dispatch: Dispatch) => ({
  setMemberFollowings: (data: Following[]) =>
    dispatch(setMemberFollowings(data)),
});
// REDUX SELECTOR
const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);
const followings = [
  { mb_nick: "ravshan" },
  { mb_nick: "ulugbek" },
  { mb_nick: "larisa" },
];

const MemberFollowing = (props: any) => {
  // ** INITIALIZATIONS **//
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
  return (
    <Stack>
      {followings.map((follower) => {
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
              {props.actions_enabled && (
                <Button
                  variant="contained"
                  startIcon={
                    <img
                      style={{ width: "40px", marginLeft: "10px" }}
                      src="/icons/follow_Icon.svg"
                    />
                  }
                  className="follow_cancel_btn"
                >
                  Bekor Qilish
                </Button>
              )}
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default MemberFollowing;
