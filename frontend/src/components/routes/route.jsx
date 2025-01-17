import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import Dashboard from "../pages/dashboard";
import styled from "styled-components";
const Nav = styled.div`
  background: grey;
  height: 50x;
`;

const Routes = () => {
  return (
    <>
      <div>
        <Nav>
          <div
            style={{ textAlign: "left", fontSize: "23px", fontWeight: "bold" }}
          >
            Tution Students Records
          </div>

          <NavLink
            style={{
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
              padding: "10px",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            to="/"
          >
            Register
          </NavLink>
          <NavLink
            style={{
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
              padding: "10px",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            to="/login"
          >
            Login
          </NavLink>
        </Nav>
        <Switch>
          <Route exact path="/" render={() => <Register />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
        </Switch>
      </div>
    </>
  );
};
export default Routes;
