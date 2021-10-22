import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { resetAuthedUser } from "../../actions/authedUser";
import Avatar from "./Avatar";

class NavigationBar extends Component {
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(resetAuthedUser());
  };
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/add">
                New Question
              </Nav.Link>
              <Nav.Link as={NavLink} to="/leaderboard">
                Leaderboard
              </Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <span className="rounded-pill border border-2 border-info bg-white">
                <Avatar avatarURL={user.avatarURL} className="mx-3" />
                <span>{user.name}</span>
              </span>

              <Button
                variant="outline-dark"
                onClick={this.handleLogout}
                className="mt-3 mt-lg-0 align-self-center shift_abit"
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(NavigationBar);
