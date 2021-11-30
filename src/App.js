import React from "react";
import "./App.css";
import Product from "./components/product/product";
// import Headbar from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./components/buy-now/Item";
import Login from "./components/login/login";
import Fetchdata from "./components/api/api";
import { ShippingPage } from "./components/Shipping_progress/shippingPage/ShippingPage";
import { Navbar } from "./components/Shipping_progress/Navbar/Navbar";
import Home from "./components/home/home";
import ReactGA from "react-ga";
import ContentPage from "./components/content-page/App";
import Header from "./components/content-page/component/header/header";
import LearnInSchool from "./components/learnInSchool/LearnInSchool";
import PrivateRoute from "./components/privateRoute/privateRoute";
import { Redirect } from 'react-router-dom';

function initizeAnalytics() {
  ReactGA.initialize("UA-211874757-1");
  ReactGA.pageview("/Homepage");
}

function App() {
  initizeAnalytics();
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/e-commerce" component={props => {
            return <><Navbar />
              <Product /></>
          }} />
          <PrivateRoute path="/main-page" component={props => {
            return <><Navbar />
              <Item /></>
          }} />
          <PrivateRoute path="/shipping_page" component={props => {
            return <> <Navbar />
              <ShippingPage /></>
          }} />
          <Route path="/sign-in" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            {/* {localStorage.getItem("Token") ? <Homepage /> : <Home />} */}
            <Home />
          </Route>
          <Route path="/home" exact>
            {/* <Homepage /> */}
            <Home />
          </Route>
          <Route path="/content-page/:param" exact>
            <ContentPage />
          </Route>
          <Route path="/learninschool" exact>
            <>
              <Header />
              <LearnInSchool />
            </>
          </Route>
          {/* <PrivateRoute path="/home" component={props => {
            return <Homepage />
          }} /> */}

          <PrivateRoute path="/content-page/:param" component={props => {
            return <ContentPage />
          }} />
          {/* <PrivateRoute path="/learninschool" component={props => {
            return <>
              <Header />
              <LearnInSchool />
            </>
          }} /> */}
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
      {/* {localStorage.getItem("Token") ? (
        <Router>
          <Switch>
            <Route path="/e-commerce" exact>
              <Navbar />
              <Product />
            </Route>
            <Route path="/main-page" exact>
              <Navbar />
              <Item />
            </Route>
            <Route path="/shipping_page" exact>
              <Navbar />
              <ShippingPage />
            </Route>
            <Route path="/sign-in" exact>
              <Login />
            </Route>
            <Route path="/home" exact>
              {/* <Home /> */}
      {/* <Homepage />
            </Route>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/content-page/:param" exact>
              <ContentPage />
            </Route>
            <Route path="/learninschool" exact>
              <Header />
              <LearnInSchool />
            </Route>
          </Switch >
        </Router >
      ) : (
    <Router>
      <Switch>
        <Route path="/e-commerce" exact>
          <Navbar />
          <Product />
        </Route>
        <Route path="/main-page" exact>
          <Navbar />
          <Item />
        </Route>
        <Route path="/shipping_page" exact>
          <Navbar />
          <ShippingPage />
        </Route>
        <Route path="/sign-in" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <Homepage />
        </Route>
        <Route path="/content-page/:param" exact>
          <ContentPage />
        </Route>
        <Route path="/learninschool" exact>
          <Header />
          <LearnInSchool />
        </Route>
      </Switch>
    </Router> */}
      {/* )
} * /} */}
    </>
  );
}

export default App;
