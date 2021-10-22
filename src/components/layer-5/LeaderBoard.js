import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils/helpers";
import Avatar from "../layer-2/Avatar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import NotFound from "../layer-5/LeaderBoard";

class LeaderBoard extends Component {
  render() {
    console.log(this.props.users);
    return <h1>Hii</h1>;
  }
}

function mapStateToProps({ users }) {
  // Now i need to pass the users as an array instead of of an object, but i must sort it by the highest score of the(num of answers +no of questions the user has asked)
  //   Example: to get the number of answers the sarahedo has voted on in the entire app
  // Object.keys(users["sarahedo"].answers).length
  //   Example: to get the number of questions the sarahedo has set in the entire app
  // users["sarahedo"].questions.length

  //   Get all the users (their ids) in array
  const allUsersArr = Object.keys(users);
  //   Then map over the all-users-array to sort them by the no of answers and no of questions
  const finalUsersArr = allUsersArr.sort((userA, userB) => {
    const userAtotal =
      Object.keys(users[userA].answers).length + users[userA].questions.length;
    const userBtotal =
      Object.keys(users[userB].answers).length + users[userB].questions.length;

    return userBtotal - userAtotal;
  });
  return {
    users: finalUsersArr,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
