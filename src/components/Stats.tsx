import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLevel } from "../helpers";
import { selectPoints } from "../features/points/pointsSlice";

const Stats = () => {
  const points = useSelector(selectPoints);

  return (
    <span>
      <span>{points} pts </span>
      <span>Level{getLevel(points)}</span>
    </span>
  );
};

export default Stats;
