import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UnansweredQuestion from "./UnansweredQuestion";
import AnsweredQuestion from "./AnsweredQuestion";

class QuestionPage extends Component {
  render() {
    const { autherUserAnswers, id } = this.props;
    console.log(id);
    const userHasAnswered = autherUserAnswers.hasOwnProperty(id) ? true : false;
    console.log(autherUserAnswers);

    return (
      <Fragment>
        <h2 className="text-center my-3">
          <small>Would You Rather...</small>
        </h2>
        {userHasAnswered ? (
          <AnsweredQuestion id={id} />
        ) : (
          <UnansweredQuestion id={id} />
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  const { question_id: id } = props.match.params;
  const { authedUser, users } = state;
  const autherUserAnswers = users[authedUser].answers;

  return {
    id,
    autherUserAnswers,
  };
}

export default connect(mapStateToProps)(QuestionPage);
