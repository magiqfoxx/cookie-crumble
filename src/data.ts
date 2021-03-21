
import Hammer from "./assets/hammer.png";
import SewingMachine from "./assets/sewingMachine.png";
import Drill from "./assets/drill.png";
import PneumaticHammer from "./assets/pneumaticHammer.png";

export const manualMachines = {
    hammer: {
        name: "Hammer",
        img: Hammer,
        price: 50,
        power: 2,
    },
    drill: {
        name: "Drill",
        img: Drill,
        price: 150,
        power: 5
    },
};
export const manualMachineNames: ("hammer" | "drill")[] = ["hammer", "drill"];
export const allManualOptions = {
    hand: {
        price: 0,
        power: 1
    }, ...manualMachines
}

export const automaticMachines = {
    sewingMachine: {
        name: "Sewing Machine",
        img: SewingMachine,
        price: 100,
        power: 20
    },
    pneumaticHammer: {
        name: "Pneumatic Hammer",
        img: PneumaticHammer,
        price: 200,
        power: 40
    },
};

export const automaticMachineNames: ("sewingMachine" | "pneumaticHammer")[] = ["sewingMachine", "pneumaticHammer"]
export const availableMachines = { ...manualMachines, ...automaticMachines }