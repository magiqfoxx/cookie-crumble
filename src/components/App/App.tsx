import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { selectOwnedAutomatic } from "../../features/machines/machinesSlice";
import { increment } from "../../features/points/pointsSlice";

import { getTotalPower } from "../../helpers";
import Home from "../Home";
import Achievements from "../Achievements";
import Shop from "../Shop";
import Stats from "../Stats";
import { Header, Nav, Ul, MenuItem, StyledLink } from "./App.styled";

export interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  const ownedAutomatic = useSelector(selectOwnedAutomatic);
  const dispatch = useDispatch();

  useEffect(() => {
    const machinePoints = setInterval(() => {
      const totalPower = getTotalPower(ownedAutomatic);
      dispatch(increment(totalPower));
    }, 10000);
    return () => {
      clearInterval(machinePoints);
    };
  }, [ownedAutomatic, dispatch]);
  return (
    <Router>
      <Header>
        <Nav>
          <Ul>
            <MenuItem>
              <StyledLink to={`${process.env.PUBLIC_URL}/`}>Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to={`${process.env.PUBLIC_URL}/achievements`}>
                Achievements
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to={`${process.env.PUBLIC_URL}/shop`}>
                Shop
              </StyledLink>
            </MenuItem>
          </Ul>
        </Nav>
        <Stats />
      </Header>

      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/achievements`}>
          <Achievements />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/shop`}>
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
