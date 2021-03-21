import reducer, { increment, resetPoints, selectPoints } from "./pointsSlice";
import { initialState as initialMachinesState } from "../machines/machinesSlice.test";

export const initialState = {
    value: 0
}
describe("Points reducers", () => {
    it("should increment points", () => {
        const nextState = reducer(initialState, increment(10));

        const rootState = { points: nextState, machines: initialMachinesState };
        expect(selectPoints(rootState)).toEqual(10);
    });
    it("should reset points", () => {
        const nextState = reducer(initialState, resetPoints());

        const rootState = { points: nextState, machines: initialMachinesState };
        expect(selectPoints(rootState)).toEqual(0);
    });
})