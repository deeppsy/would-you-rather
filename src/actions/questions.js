import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addAnswer({ qid, answer, authedUser }) {
  return {
    type: ADD_ANSWER,
    answerInfo: {
      qid,
      answer,
      authedUser,
    },
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestionAnswer({
      qid,
      answer,
      authedUser,
    })
      .then(() =>
        dispatch(
          addAnswer({
            qid,
            answer,
            authedUser,
          })
        )
      )
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAddQuestion(text1, text2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText: text1,
      optionTwoText: text2,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(dispatch(hideLoading()));
  };
}
