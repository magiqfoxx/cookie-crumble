import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { selectPoints } from "../../features/points/pointsSlice";
import Card from "../common/Card";
import Start from "../../assets/start.png";
import Five from "../../assets/5.png";
import Hundred from "../../assets/100.png";

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
      <Card img={Start} active={points > 0} title="Have at least one point">
        Just getting started
      </Card>
      <Card img={Five} active={points >= 80} title="Reach level 5">
        Level 5
      </Card>
      <Card
        img={Hundred}
        active={points >= 100}
        title="Have at least a 100 points"
      >
        Round 100
      </Card>
    </Grid>
  );
};

export default Achievements;
