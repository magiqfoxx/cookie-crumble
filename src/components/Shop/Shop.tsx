import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectPoints } from "../../features/points/pointsSlice";
import {
  Machine,
  buy,
  selectOwnedManual,
  selectOwnedAutomatic,
  AutomaticMachine,
  ManualMachine,
} from "../../features/machines/machinesSlice";

import {
  automaticMachineNames,
  automaticMachines,
  availableMachines,
  manualMachines,
  manualMachineNames,
} from "../../data";

import Card from "../common/Card";
import Main from "../common/Main";
import Grid from "../common/Grid";

const Shop = () => {
  const points = useSelector(selectPoints);
  const ownedManual = useSelector(selectOwnedManual);
  const ownedAutomatic = useSelector(selectOwnedAutomatic);
  const dispatch = useDispatch();
  const buyMachine = (machine: Machine) => {
    availableMachines[machine].price <= points
      ? dispatch(buy(machine))
      : alert("Too expensive!");
  };
  return (
    <Main>
      <h2>Manual Labour</h2>
      <p>Buy to get more points per click</p>
      <Grid columns={2}>
        {manualMachineNames.map((machineName: ManualMachine) => {
          return (
            <Card
              selected={
                !ownedManual.includes(machineName) &&
                manualMachines[machineName].price <= points
              }
              active={ownedManual.includes(machineName)}
              img={manualMachines[machineName].img}
              onClick={() => buyMachine(machineName)}
            >
              <h3>{manualMachines[machineName].name}</h3>
              <h4>Price: {manualMachines[machineName].price}</h4>
            </Card>
          );
        })}
      </Grid>
      <h2>Automation</h2>
      <p>Buy to get free points every 10 seconds</p>
      <Grid columns={2}>
        {automaticMachineNames.map((machineName: AutomaticMachine) => {
          return (
            <Card
              selected={
                !ownedAutomatic.includes(machineName) &&
                automaticMachines[machineName].price <= points
              }
              active={ownedAutomatic.includes(machineName)}
              img={automaticMachines[machineName].img}
              onClick={() => buyMachine(machineName)}
            >
              <h3>{automaticMachines[machineName].name}</h3>
              <h4>Price: {automaticMachines[machineName].price}</h4>
            </Card>
          );
        })}
      </Grid>
    </Main>
  );
};

export default Shop;
