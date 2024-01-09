import { createSlice } from "@reduxjs/toolkit"; //obj
import { CommunityPageState } from "../../types/screen";

const initialState: CommunityPageState = {
  targetBoArticles: [],
};

const ccommunityPageSlice = createSlice({
  name: "communityPage",
  initialState,
  reducers: {
    setTargetBoArticles: (state, action) => {
      state.targetBoArticles = action.payload;
    },
  },
});

export const {setTargetBoArticles} = ccommunityPageSlice.actions;

const CommuniPageReducer = ccommunityPageSlice.reducer;
export default CommuniPageReducer;
