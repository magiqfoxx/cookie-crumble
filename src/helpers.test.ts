import { getLevel, getTotalPower } from "./helpers";

test('should get correct level', () => {
    expect(getLevel(15)).toBe(2)
    expect(getLevel(23)).toBe(3)
    expect(getLevel(44)).toBe(4)
    expect(getLevel(87)).toBe(5)
});

test('should get total power for all automatic machines', () => {
    expect(getTotalPower(["pneumaticHammer"])).toBe(40)
    expect(getTotalPower(["pneumaticHammer", "sewingMachine"])).toBe(60)
})