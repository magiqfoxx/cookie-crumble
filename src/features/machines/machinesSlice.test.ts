import reducer, { buy, resetMachines, selectOwnedManual } from "./machinesSlice";
import { initialState as initialPointsState } from "../points/pointsSlice.test";

export const initialState = {
    ownedManual: [],
    ownedAutomatic: []
}
describe("Machine reducers", () => {

    it("should add machine", () => {
        const nextState = reducer(initialState, buy("drill"));

        const rootState = { machines: nextState, points: initialPointsState };
        expect(selectOwnedManual(rootState)).toEqual(["drill"]);
    });
    it("should reset machines", () => {
        const nextState = reducer(initialState, resetMachines());

        const rootState = { machines: nextState, points: initialPointsState };
        expect(selectOwnedManual(rootState)).toEqual([]);
    });
})