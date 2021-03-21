import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const MenuItem = styled.li`
  display: inline;
  list-style: none;
  padding: 0.5rem;
  margin: 0.5rem;
  :hover {
    background-color: aliceblue;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;
export const Nav = styled.nav`
  display: inline;
`;
export const Ul = styled.ul`
  display: inline;
`;

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;