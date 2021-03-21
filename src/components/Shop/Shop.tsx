import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectPoints } from "../../features/points/pointsSlice";
import Machine from "./Machine";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`;

const Shop = () => {
  const points = useSelector(selectPoints);
  return (
    <Grid>
      <Machine owned={points > 0} buy={() => null}>
        Hammer
      </Machine>
      <Machine owned={points >= 80} buy={() => null}>
        Sewing Machine
      </Machine>
      <Machine owned={points >= 100} buy={() => null}>
        Pneumatic Hammer
      </Machine>
    </Grid>
  );
};

export default Shop;
