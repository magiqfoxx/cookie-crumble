import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { availableMachines } from "../../data";
import { selectPoints } from "../../features/points/pointsSlice";
import {
  Machine,
  buy,
  selectOwnedManual,
  selectOwnedAutomatic,
} from "../../features/machines/machinesSlice";
import Card from "../common/Card";
import Hammer from "../../assets/hammer.png";
import SewingMachine from "../../assets/sewingMachine.png";
import Drill from "../../assets/drill.png";
import PneumaticHammer from "../../assets/pneumaticHammer.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`;

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
    <>
      <h2>Manual Labour</h2>
      <p>Buy to get more points per click</p>
      <Grid>
        <Card
          selected={
            !ownedManual.includes("hammer") &&
            availableMachines["hammer"].price <= points
          }
          active={ownedManual.includes("hammer")}
          img={Hammer}
          onClick={() => buyMachine("hammer")}
          title=""
        >
          <h3>Hammer</h3>
          <h4>Price: {availableMachines["hammer"].price}</h4>
        </Card>

        <Card
          selected={
            !ownedManual.includes("drill") &&
            availableMachines["drill"].price <= points
          }
          active={ownedManual.includes("drill")}
          img={Drill}
          onClick={() => buyMachine("drill")}
        >
          <h3> Drill</h3>
          <h4>Price: {availableMachines["drill"].price}</h4>
        </Card>
      </Grid>
      <h2>Automation</h2>
      <p>Buy to get free points every 10 seconds</p>
      <Grid>
        <Card
          selected={
            !ownedAutomatic.includes("sewingMachine") &&
            availableMachines["sewingMachine"].price <= points
          }
          active={ownedAutomatic.includes("sewingMachine")}
          img={SewingMachine}
          onClick={() => buyMachine("sewingMachine")}
        >
          <h3> Sewing Machine</h3>
          <h4>Price: {availableMachines["sewingMachine"].price}</h4>
        </Card>
        <Card
          selected={
            !ownedAutomatic.includes("pneumaticHammer") &&
            availableMachines["pneumaticHammer"].price <= points
          }
          active={ownedAutomatic.includes("pneumaticHammer")}
          img={PneumaticHammer}
          onClick={() => buyMachine("pneumaticHammer")}
        >
          <h3>Pneumatic Hammer</h3>
          <h4>Price: {availableMachines["pneumaticHammer"].price}</h4>
        </Card>
      </Grid>
    </>
  );
};

export default Shop;
