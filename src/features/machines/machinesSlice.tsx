import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { availableMachines } from "../../data";

export type Machine = "hammer" | "sewingMachine" | "drill" | "pneumaticHammer";

interface MachinesState {
  owned: Array<Machine>;
}

const initialState: MachinesState = {
  owned: localStorage.getItem("machines")
    ? JSON.parse(localStorage.getItem("machines")!)
    : [],
};

export const machinesSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    buy: (state, { payload }: { payload: Machine }) => {
      if (!state.owned.includes(payload)) {
        const newMachineList = [...state.owned, payload];
        state.owned = newMachineList;
        localStorage.setItem("machines", JSON.stringify(newMachineList));
      }
    },
  },
  extraReducers: {},
});

export const { buy } = machinesSlice.actions;

export const selectOwned = (state: RootState) => state.machines.owned;
export const selectCanBeBought = (
  state: RootState,
  machine: Machine,
  points: number
) => {
  return points > availableMachines[machine].price ? true : false;
};
export const isOwned = (state: RootState, machine: Machine) => {
  return state.machines.owned.includes(machine) ? true : false;
};

export default machinesSlice.reducer;
