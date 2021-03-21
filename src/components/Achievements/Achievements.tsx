import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectPoints } from "../../features/points/pointsSlice";
import Achievement from "./Achievement";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`;

const Achievements = () => {
  const points = useSelector(selectPoints);
  return (
    <Grid>
      <Achievement achieved={points > 0}>Just getting started</Achievement>
      <Achievement achieved={points >= 80}>Level 5</Achievement>
      <Achievement achieved={points >= 100}>Round 100</Achievement>
    </Grid>
  );
};

export default Achievements;
