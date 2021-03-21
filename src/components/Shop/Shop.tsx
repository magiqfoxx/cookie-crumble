import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { availableMachines } from "../../data";
import { selectPoints } from "../../features/points/pointsSlice";
import {
  buy,
  Machine,
  selectOwned,
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
  const owned = useSelector(selectOwned);
  const dispatch = useDispatch();
  const buyMachine = (machine: Machine) => {
    availableMachines[machine].price <= points
      ? dispatch(buy(machine))
      : alert("Too expensive!");
  };
  return (
    <Grid>
      <Card
        selected={
          !owned.includes("hammer") &&
          availableMachines["hammer"].price <= points
        }
        active={owned.includes("hammer")}
        img={Hammer}
        onClick={() => buyMachine("hammer")}
        title=""
      >
        <h3>Hammer</h3>
        <h4>Price: {availableMachines["hammer"].price}</h4>
      </Card>
      <Card
        selected={
          !owned.includes("sewingMachine") &&
          availableMachines["sewingMachine"].price <= points
        }
        active={owned.includes("sewingMachine")}
        img={SewingMachine}
        onClick={() => buyMachine("sewingMachine")}
      >
        <h3> Sewing Machine</h3>
        <h4>Price: {availableMachines["sewingMachine"].price}</h4>
      </Card>
      <Card
        selected={
          !owned.includes("drill") && availableMachines["drill"].price <= points
        }
        active={owned.includes("drill")}
        img={Drill}
        onClick={() => buyMachine("drill")}
      >
        <h3> Drill</h3>
        <h4>Price: {availableMachines["drill"].price}</h4>
      </Card>
      <Card
        selected={
          !owned.includes("pneumaticHammer") &&
          availableMachines["pneumaticHammer"].price <= points
        }
        active={owned.includes("pneumaticHammer")}
        img={PneumaticHammer}
        onClick={() => buyMachine("pneumaticHammer")}
      >
        <h3>Pneumatic Hammer</h3>
        <h4>Price: {availableMachines["pneumaticHammer"].price}</h4>
      </Card>
    </Grid>
  );
};

export default Shop;
