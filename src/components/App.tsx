import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import "./App.css";

import { getTotalPower } from "../helpers";
import { selectOwned } from "../features/machines/machinesSlice";
import Home from "./Home";
import Achievements from "./Achievements/Achievements";
import Shop from "./Shop";
import Stats from "./Stats";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { increment } from "../features/points/pointsSlice";

const MenuItem = styled.li`
  display: inline;
  list-style: none;
  padding: 0.5rem;
  margin: 0.5rem;
  :hover {
    background-color: aliceblue;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;
const Nav = styled.nav`
  display: inline;
`;
const Ul = styled.ul`
  display: inline;
`;

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const owned = useSelector(selectOwned);
  const dispatch = useDispatch();

  useEffect(() => {
    const machinePoints = setInterval(() => {
      const totalPower = getTotalPower(owned);
      dispatch(increment(totalPower));
      console.log("hello");
    }, 10000);
    return () => {
      clearInterval(machinePoints);
    };
  }, [owned, dispatch]);
  return (
    <Router>
      <div>
        <Header>
          <Nav>
            <Ul>
              <MenuItem>
                <StyledLink to="/">Home</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/achievements">Achievements</StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink to="/shop">Shop</StyledLink>
              </MenuItem>
            </Ul>
          </Nav>
          <Stats />
        </Header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
