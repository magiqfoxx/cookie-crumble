import styled from "styled-components";

interface GridProps {
  columns: number;
}
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-gap: 2rem;
  padding: 1rem;
`;
export default Grid;
