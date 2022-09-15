import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  needs: { needs: [], loading: false, error: null },
};

export const needsSlice = createSlice({
  name: "needs",
  initialState,
  reducers: {
    populate: async (state, action) => {
      state.needs.needs = action.payload;
    },
    add: async (state, { payload }) => {
      const { data } = await axios.post(
        "http://localhost:8089/api/need",
        payload
      );

      state.needs.needs.push(data);
      console.log(state.value);
    },
  },
});

export const { populate, add } = needsSlice.actions;
export default needsSlice.reducer;
