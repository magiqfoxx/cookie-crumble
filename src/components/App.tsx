import React from "react";
import styled from "styled-components";
import "./App.css";
import Home from "./Home";
import Achievements from "./Achievements/Achievements";
import Shop from "./Shop";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Router>
      <div>
        <ul>
          <MenuItem>
            <StyledLink to="/">Home</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/achievements">Achievements</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/shop">Shop</StyledLink>
          </MenuItem>
        </ul>

        <hr />
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
