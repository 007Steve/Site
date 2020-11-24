import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
           <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/project/:id" component={ProjectPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
