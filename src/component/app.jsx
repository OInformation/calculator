import React, { Component } from "react";
import NavBar from './navigationBar';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './content/home';
import Calculator from "./content/calculator";
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notfound';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/404" element={<NotFound></NotFound>}></Route>
            <Route path="/*" element={<Navigate replace to="404"></Navigate>}></Route>
          </Routes>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
