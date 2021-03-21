import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { availableManual, availableMachines } from "../../data";

export type AutomaticMachine = "sewingMachine" | "pneumaticHammer";
type ManualMachine = "hand" | "hammer" | "drill";
export type Machine = AutomaticMachine | ManualMachine;

interface MachinesState {
  ownedManual: Array<ManualMachine>;
  ownedAutomatic: Array<AutomaticMachine>;
}

const initialState: MachinesState = {
  ownedManual: localStorage.getItem("manualMachines")
    ? JSON.parse(localStorage.getItem("manualMachines")!)
    : [],
  ownedAutomatic: localStorage.getItem("automaticMachines")
    ? JSON.parse(localStorage.getItem("automaticMachines")!)
    : [],
};

export const machinesSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    buy: (
      state,
      { payload }: { payload: ManualMachine | AutomaticMachine }
    ) => {
      if (payload === "sewingMachine" || payload === "pneumaticHammer") {
        //automatic
        if (!state.ownedAutomatic.includes(payload)) {
          const newAutomaticList = [...state.ownedAutomatic, payload];
          state.ownedAutomatic = newAutomaticList;
          localStorage.setItem(
            "automaticMachines",
            JSON.stringify(newAutomaticList)
          );
        }
      } else {
        if (!state.ownedManual.includes(payload)) {
          const newManualList = [...state.ownedManual, payload];
          state.ownedManual = newManualList;
          localStorage.setItem("manualMachines", JSON.stringify(newManualList));
        }
      }
    },
  },
});

export const { buy } = machinesSlice.actions;

export const selectOwnedManual = (state: RootState) =>
  state.machines.ownedManual;
export const selectOwnedAutomatic = (state: RootState) =>
  state.machines.ownedAutomatic;

export const selectMostPowerfulManual = (state: RootState) => {
  let mostPowerful: ManualMachine = "hand";
  state.machines.ownedManual.forEach((machine) => {
    if (availableManual[machine].power > availableManual[mostPowerful].power) {
      mostPowerful = machine;
    }
  });
  return mostPowerful;
};
export const selectCanBeBought = (
  state: RootState,
  machine: Machine,
  points: number
) => {
  return points > availableMachines[machine].price ? true : false;
};
// export const isOwned = (state: RootState, machine: Machine) => {
//   return state.machines.owned.includes(machine) ? true : false;
// };

export default machinesSlice.reducer;
