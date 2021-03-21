import * as React from "react";
import styled, { css } from "styled-components";

interface CardProps {
  selected?: boolean;
  active: boolean;
  onClick?: () => void;
  title?: string;
}
const StyledCard = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 0.5rem 0;
  padding: 1rem 0.5rem;
  background: transparent;
  border: 2px solid #dedede;
  color: #dedede;

  img {
    width: 50px;
    height: 50px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h3,
    h4 {
      margin: 0.5rem auto;
    }
  }
  ${(props) =>
    props.active &&
    css`
      border: 2px solid #ffc107;
      color: #ffc107;
      background-color: #ffc10712;
    `}

  ${(props) =>
    props.selected &&
    css`
      cursor: pointer;
      border: 2px solid #61dafb;
      color: #61dafb;
      background-color: aliceblue;
    `}
`;

interface CardProps {
  selected?: boolean;
  active: boolean;
  img?: string;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

const Card: React.FunctionComponent<CardProps> = ({
  selected,
  active,
  img,
  children,
  onClick,
  title,
}) => {
  return (
    <StyledCard
      selected={selected}
      active={active}
      onClick={onClick}
      title={title}
    >
      <img src={img} alt="" />
      <div>{children}</div>
    </StyledCard>
  );
};

export default Card;
