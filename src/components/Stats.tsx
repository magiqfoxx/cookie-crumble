import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLevel } from "../helpers";
import { selectPoints, reset } from "../features/points/pointsSlice";

const Stats = () => {
  const points = useSelector(selectPoints);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <span>Points: </span>
        <span>{points}</span>
      </div>
      <div>
        <span>Level: </span>
        <span>{getLevel(points)}</span>
      </div>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Stats;
