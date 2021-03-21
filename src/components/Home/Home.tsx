import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectMostPowerfulManual,
  resetMachines,
} from "../../features/machines/machinesSlice";
import { increment, resetPoints } from "../../features/points/pointsSlice";

import { allManualOptions } from "../../data";
import Main from "../common/Main";
import Button from "../common/Button";
import Title from "../common/Title";
import { CookieButton, HiddenText } from "./Home.styled";

import CookieImg from "../../assets/cookie.png";
const cursors = {
  hand: "cursors/hand.png",
  hammer: "cursors/hammer.png",
  sewingMachine: "cursors/sewingMachine.png",
  drill: "cursors/drill.png",
  pneumaticHammer: "cursors/pneumaticHammer.png",
};

const Home = () => {
  const dispatch = useDispatch();
  const mostPowerfulManual = useSelector(selectMostPowerfulManual);
  const resetGame = () => {
    dispatch(resetPoints());
    dispatch(resetMachines());
  };

  return (
    <Main>
      <Title>This is how the cookie crumbles!</Title>
      <CookieButton
        onClick={() =>
          dispatch(increment(allManualOptions[mostPowerfulManual].power))
        }
        cursor={cursors[mostPowerfulManual]}
      >
        <img src={CookieImg} alt="{mostPowerfulManual}" />
        <HiddenText>Click</HiddenText>
      </CookieButton>
      <Button onClick={resetGame}>Reset game</Button>
    </Main>
  );
};

export default Home;
