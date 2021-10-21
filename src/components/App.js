import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Spinner from "react-bootstrap/Spinner";
import LoginPage from "./layer-1/LoginPage";
import MainApp from "./layer-1/MainApp";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser, loadingBar } = this.props;
    if (loadingBar.default === undefined || loadingBar.default === 1) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Spinner
            animation="border"
            role="status"
            variant="danger"
            className="my-5"
          ></Spinner>
          <span className="sr-only mx-3">Loading...</span>
        </div>
      );
    } else {
      return <Fragment>{!authedUser ? <LoginPage /> : <MainApp />}</Fragment>;
    }
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar,
  };
}

export default connect(mapStateToProps)(App);
