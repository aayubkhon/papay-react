import {
  Avatar,
  Box,
  Button,
  Stack,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { retrieveMemberFollowers } from "./selector";
import { setMemberFollowers } from "./slice";
import FollowApiService from "../../apiServices/followApiService";
import { serverApi } from "../../../lib/config";
import {
  sweetErrorhandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { useHistory } from "react-router-dom";
import { verifyMemberData } from "../../apiServices/verify";
import { FollowSearchObj, Follower } from "../../types/follow";
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

const MemberFollowers = (props: any) => {
  /**INSTALIZATIONS**/
  const { setFollowRebuild, followRebuild, mb_id } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    { page: 1, limit: 5, mb_id: mb_id }
  );
  const history = useHistory();

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);
  // HANDLERS
  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };
  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifyMemberData, Definer.auth_err1);
      const followService = new FollowApiService();
      await followService.subscribe(id);
      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      sweetErrorhandling(err).then();
    }
  };
  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload();
  };
  return (
    <Stack>
      {memberFollowers.map((follower: Follower) => {
        const img_url = follower?.subscriber_member_data?.mb_image
          ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
          : "/public/auth/default_uer.svg";
        return (
          <Box className="follow_box">
            <Stack className="right_wrap_user">
              <Avatar
                alt="avatar"
                src={img_url}
                sx={{ width: 89, height: 89, mr: "25px", cursor: "pointer" }}
                onClick={() => visitMemberHandler(follower?.subscriber_id)}
              />
              <div className="name_wrap">
                <span
                  style={{ cursor: "pointer" }}
                  className="username_text"
                  onClick={() => visitMemberHandler(follower?.subscriber_id)}
                >
                  {follower?.subscriber_member_data?.mb_type}
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  className="name_text"
                  onClick={() => visitMemberHandler(follower?.subscriber_id)}
                >
                  {follower?.subscriber_member_data?.mb_nick}
                </span>
              </div>
            </Stack>
            {props.actions_enabled &&
              (follower?.me_followed &&
              follower.me_followed[0]?.my_following ? (
                <Button
                  sx={{ color: "#fff" }}
                  variant="contained"
                  className="following_already"
                  disabled
                >
                  FOLLOWING
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="follow_btn"
                  startIcon={
                    <img
                      src="/icons/follow_icon.svg"
                      style={{ width: "40px" }}
                    />
                  }
                  onClick={(e) => subscribeHandler(e, follower?.subscriber_id)}
                >
                  Follow Back
                </Button>
              ))}
          </Box>
        );
      })}
      <Stack
        sx={{ my: "40px" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box className="bottom_box">
          <Pagination
            count={
              followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3
            }
            page={followersSearchObj.page}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBack,
                  next: ArrowForward,
                }}
                {...item}
                color="secondary"
              />
            )}
            onChange={handlePaginationChange}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default MemberFollowers;

// import {
//   Avatar,
//   Box,
//   Button,
//   Link,
//   Pagination,
//   PaginationItem,
//   Stack,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// // REDUX
// import { useDispatch } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
// import { createSelector } from "reselect";
// import { FollowSearchObj, Follower } from "../../types/follow";
// import { retrieveMemberFollowers } from "./selector";
// import { setMemberFollowers } from "./slice";
// import FollowApiService from "../../apiServices/followApiService";
// import { serverApi } from "../../../lib/config";
// import {
//   sweetErrorhandling,
//   sweetTopSmallSuccessAlert,
// } from "../../../lib/sweetAlert";
// import assert from "assert";
// import { Definer } from "../../../lib/Definer";

// // REDUX SLICE
// const actionDispatch = (dispatch: Dispatch) => ({
//   setMemberFollowers: (data: Follower[]) => dispatch(setMemberFollowers(data)),
// });
// // REDUX SELECTOR
// const memberFollowersRetriever = createSelector(
//   retrieveMemberFollowers,
//   (memberFollowers) => ({
//     memberFollowers,
//   })
// );

// const MemberFollowers = (props: any) => {
//   // ** INITIALIZATIONS **//
//   const { mb_id, followRebuild, setFollowRebuild } = props;
//   const { setMemberFollowers } = actionDispatch(useDispatch());
//   const { memberFollowers } = useSelector(memberFollowersRetriever);
//   const [followerSaerchObj, setFollowerSearchObj] = useState<FollowSearchObj>({
//     page: 1,
//     limit: 5,
//     mb_id: mb_id,
//   });

//   useEffect(() => {
//     const folloService = new FollowApiService();
//     folloService
//       .getMemberFollowers(followerSaerchObj)
//       .then((data) => setMemberFollowers(data))
//       .catch((err) => console.log(err));
//   }, [followerSaerchObj, followRebuild]);
//   // ** HANDLERS **//

//   const subscribeHandler = async (e: any, id: string) => {
//     try {
//       e.stopPropagation();
//       assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
//       const followService = new FollowApiService();
//       await followService.subscribe(id);
//       await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
//       setFollowRebuild(!followRebuild);
//     } catch (err: any) {
//       console.log(err);
//       sweetErrorhandling(err).then();
//     }
//   };
//   const hendlePaginationChange = (event: any, value: number) => {
//     followerSaerchObj.page = value;
//     setFollowerSearchObj({ ...followerSaerchObj });
//   };
//   return (
//     <Stack>
//       {memberFollowers.map((follower: Follower) => {
//         const img_url = follower?.subscriber_member_data?.mb_image
//           ? `${serverApi}/${follower?.subscriber_member_data?.mb_image}`
//           : "/public/auth/default_uer.svg";
//         return (
//           <Box className="followers_box">
//             <Box className="followers_img">
//               <Avatar
//                 alt={""}
//                 src={img_url}
//                 sx={{ width: "80px", height: "80px" }}
//               />
//             </Box>
//             <div className="followers_container">
//               <span className="followers_auth_user">
//                 {follower?.subscriber_member_data?.mb_type}
//               </span>
//               <span className="followers_title">
//                 {follower?.subscriber_member_data?.mb_nick}
//               </span>
//             </div>
//             <Box className="follow_btn_box">
//               {props.actions_enabled &&
//                 (follower?.me_followed &&
//                 follower.me_followed[0]?.my_following ? (
//                   <Button variant={"contained"} className="following_already">
//                     FOLLOWING{" "}
//                   </Button>
//                 ) : (
//                   <Button
//                     className="follow_btn"
//                     variant={"contained"}
//                     startIcon={
//                       <img
//                         style={{ width: "40px" }}
//                         src="/icons/follow_Icon.svg"
//                       />
//                     }
//                     onClick={(e) =>
//                       subscribeHandler(e, follower?.subscriber_id)
//                     }
//                   >
//                     Follow Back
//                   </Button>
//                 ))}
//               <Stack
//                 sx={{ my: "40px" }}
//                 direction={"row"}
//                 alignItems={"center"}
//                 justifyContent={"center"}
//               >
//                 <Box className="bottom_box">
//                   <Pagination
//                     count={
//                       followerSaerchObj.page >= 3
//                         ? followerSaerchObj.page + 1
//                         : 3
//                     }
//                     page={followerSaerchObj.page}
//                     renderItem={(item) => (
//                       <PaginationItem
//                         components={{
//                           previous: ArrowBack,
//                           next: ArrowForward,
//                         }}
//                         {...item}
//                         color="secondary"
//                       />
//                     )}
//                     onChange={hendlePaginationChange}
//                   />
//                 </Box>
//               </Stack>
//             </Box>
//           </Box>
//         );
//       })}
//     </Stack>
//   );
// };

// export default MemberFollowers;
