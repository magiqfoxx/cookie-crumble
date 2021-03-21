import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

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

export const selectPoints = (state: RootState) => state.points.value;

export default pointsSlice.reducer;
