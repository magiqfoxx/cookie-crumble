
import styled from "styled-components";

interface CookieButtonProps {
    cursor: string;
}
export const CookieButton = styled.button<CookieButtonProps>`
    cursor: ${(props) => `url(${props.cursor}), auto`};
    border: none;
    background-color: transparent;
  `;
export const HiddenText = styled.span`
    opacity: 0;
  `;