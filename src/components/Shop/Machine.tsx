import React from "react";
import styled, { css } from "styled-components";

interface StyledMachineProps {
  owned: boolean;
}
const StyledMachine = styled.div<StyledMachineProps>`
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0;
  padding: 1rem 0.5rem;
  background: transparent;
  border: 2px solid #dedede;
  color: #dedede;
  justify-content: center;

  ${(props) =>
    props.owned &&
    css`
      border: 2px solid #61dafb;
      color: #61dafb;
      background-color: aliceblue;
    `}
`;
export interface MachineProps {
  owned: boolean;
  buy: () => null;
  children: React.ReactNode;
}

const Machine: React.FunctionComponent<MachineProps> = ({
  owned,
  buy,
  children,
}) => {
  return (
    <StyledMachine owned={owned} onClick={buy}>
      <span>{children}</span>
    </StyledMachine>
  );
};

export default Machine;
