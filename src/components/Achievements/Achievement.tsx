import React from "react";
import styled, { css } from "styled-components";

interface StyledAchievementProps {
  achieved: boolean;
}
const StyledAchievement = styled.div<StyledAchievementProps>`
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0;
  padding: 1rem 0.5rem;
  background: transparent;
  border: 2px solid #dedede;
  color: #dedede;
  justify-content: center;

  ${(props) =>
    props.achieved &&
    css`
      border: 2px solid #61dafb;
      color: #61dafb;
      background-color: aliceblue;
    `}
`;

interface AchievementProps {
  achieved: boolean;
  children: React.ReactNode;
}

const Achievement: React.FunctionComponent<AchievementProps> = ({
  achieved,
  children,
}) => {
  return (
    <StyledAchievement achieved={achieved}>
      <span>{children} </span>
    </StyledAchievement>
  );
};

export default Achievement;
