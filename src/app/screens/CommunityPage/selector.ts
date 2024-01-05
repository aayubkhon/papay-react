import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selecCommunityPage = (state: AppRootState) => state.communityPage;

export const retrieveTargetBoArticles = createSelector(
  selecCommunityPage,
  (CommunityPage) => CommunityPage.targetBoArticles
);