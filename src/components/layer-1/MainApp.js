import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "../layer-2/NavBar";
import Home from "../layer-2/Home";
import QuestionPage from "../layer-3/QuestionPage";
import NewQuestion from "../layer-4/NewQuestion";

// import LeaderBoard from "../layer-2/LeaderBoard";
import NotFound from "../layer-5/NotFound";

import Container from "react-bootstrap/Container";

export default class MainApp extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavBar />
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/questions/:question_id" component={QuestionPage} />
              <Route path="/add" component={NewQuestion} />
              {/*<Route path="/leaderboard" component={LeaderBoard} />
              <Route component={NotFound} /> */}
            </Switch>
          </Fragment>
        </Container>
      </Router>
    );
  }
}
