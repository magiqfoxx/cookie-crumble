import { AutomaticMachine } from "./features/machines/machinesSlice"
import { availableMachines } from "./data";

export const getLevel = (points: number) => {
  if (points <= 10) {
    return 1;
  } else {
    return Math.floor(Math.log(points / 10) / Math.log(2)) + 2;
  }
};

export const getTotalPower = (owned: AutomaticMachine[]) => {
  let power = 0;
  owned.forEach(machine => {
    power += availableMachines[machine].power
  })
  return power
}