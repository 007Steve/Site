import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ARPortfolio from "./pages/ARPortfolio";
import ProjectPage from "./pages/ProjectPage";
import ARProjectPage from "./pages/ARProjectPage";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/arvr" component={ARPortfolio} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/arvr/:id" component={ARProjectPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
