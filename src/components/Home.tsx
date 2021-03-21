import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { selectMostPowerfulManual } from "../features/machines/machinesSlice";
import { increment, reset } from "../features/points/pointsSlice";

import CookieImg from "../assets/cookie.png";
import { availableManual } from "../data";

const cursors = {
  hand: "cursors/hand.png",
  hammer: "cursors/hammer.png",
  sewingMachine: "cursors/sewingMachine.png",
  drill: "cursors/drill.png",
  pneumaticHammer: "cursors/pneumaticHammer.png",
};
interface ButtonProps {
  cursor: string;
}
const Button = styled.button<ButtonProps>`
  cursor: ${(props) => `url(${props.cursor}), auto`};
  border: none;
  background-color: transparent;
`;
const Text = styled.span`
  opacity: 0;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 1rem auto;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const mostPowerfulManual = useSelector(selectMostPowerfulManual);

  return (
    <Main>
      <h2>This is how the cookie crumbles!</h2>
      <Button
        onClick={() =>
          dispatch(increment(availableManual[mostPowerfulManual].power))
        }
        cursor={cursors[mostPowerfulManual]}
      >
        <img src={CookieImg} alt="{mostPowerfulManual}" />
        <Text>Click</Text>
      </Button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </Main>
  );
};

export default Home;
