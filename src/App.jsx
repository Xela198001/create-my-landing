import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header/Header";
import Advantages from './components/advantages/advantages';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import Portfolio from './components/Potfolio/Portfolio';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
const [name, setName] = useState("Alex");

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;