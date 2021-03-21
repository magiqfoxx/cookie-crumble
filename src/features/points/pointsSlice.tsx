import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { fetchData } from "../../utils";

interface PointsState {
  value: number;
}

const initialState: PointsState = {
  value: localStorage.getItem("points")
    ? parseInt(localStorage.getItem("points")!)
    : 0,
};

export const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const newValue = state.value + action.payload;
      state.value = newValue;
      localStorage.setItem("points", newValue.toString());
    },
    resetPoints: (state) => {
      state.value = 0;
      localStorage.removeItem("points");
    },
  },
});

export const { increment, resetPoints } = pointsSlice.actions;

export const clickCountAsync = async (click_count: number) => {
  let response = await fetchData(
    `http://${process.env.REACT_APP_HOST}/api/v1/progress?click_count=${click_count}`,
    "POST"
  );
  if (response.error) {
    console.log(response.error);
  } else {
    alert("success!");
  }
};

export const selectPoints = (state: RootState) => state.points.value;

export default pointsSlice.reducer;
