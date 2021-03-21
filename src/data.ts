export const availableManual = {
    hand: {
        price: 0,
        power: 1 //per click
    },
    hammer: {
        price: 50,
        power: 2, //per click
    },
    drill: {
        price: 150,
        power: 5 //per click
    },
};
export const availableAutomatic = {
    sewingMachine: {
        price: 100,
        power: 20 //per 10s
    },
    pneumaticHammer: {
        price: 200,
        power: 40 //per 10s
    },
};
export const availableMachines = { ...availableManual, ...availableAutomatic }