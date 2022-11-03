import React from "react";
import "./style.css";
import Login from "./Login/Login";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./ViewCart";
import MostPopular from "./MostPopular";

export default function App() {
  // const myStyle = {
  //   backgroundImage:
  //     "url('D:/Assignment_Microbusters_1st_Oct/assignemntmicrobusters/public/illustration%20file.svg')",
  //   height: "100vh",
  //   marginTop: "-70px",
  //   fontSize: "50px",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewCart" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/mostpopular" component={MostPopular} />

          <Route path="/sign-up" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
/*
https://dev.to/stephanieopala/simple-navigation-bar-in-react-js-4d5m
*/
