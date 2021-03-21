import React from "react";
import { useDispatch } from "react-redux";

import { increment } from "../features/points/pointsSlice";
import Stats from "./Stats";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Stats />
      <button onClick={() => dispatch(increment(1))}>Click</button>
    </>
  );
};

export default Home;
