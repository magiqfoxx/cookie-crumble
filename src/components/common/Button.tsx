import styled from "styled-components";

interface ButtonProps {}
const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #00bcd4;
  background-color: aliceblue;
  color: #00bcd4;
  margin: 1rem;
`;
export default Button;
