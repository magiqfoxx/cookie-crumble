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
    increment: (state, { payload }) => {
      const newValue = state.value + parseInt(payload);
      state.value = newValue;
      localStorage.setItem("points", newValue.toString());
    },
    reset: (state) => {
      state.value = 0;
      localStorage.removeItem("points");
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, reset, incrementByAmount } = pointsSlice.actions;

export const selectPoints = (state: RootState) => state.points.value;

export default pointsSlice.reducer;
