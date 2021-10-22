import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    text1: "",
    text2: "",
    toHome: false,
  };

  handleChange = (e) => {
    const text = e.target.value;
    const name = e.target.name;
    this.setState(() => ({
      [name]: text,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text1, text2, toHome } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(text1, text2));

    this.setState(() => ({
      toHome: true,
    }));
  };
  render() {
    const { text1, text2, toHome } = this.state;
    const { username } = this.props;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    const textLeft1 = 280 - text1.length;
    const textLeft2 = 280 - text2.length;

    return (
      <div>
        <h3 className="center">Welcome {username}, Add a new Poll</h3>
        <h4>Would You Rather?</h4>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="First Option?"
            value={text1}
            name="text1"
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          ></textarea>
          {textLeft1 <= 100 && <div className="text-length">{textLeft1}</div>}
          <br />
          <textarea
            placeholder="Second Option?"
            value={text2}
            name="text2"
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          ></textarea>
          {textLeft2 <= 100 && <div className="text-length">{textLeft2}</div>}
          <br />
          <button
            className="btn"
            type="submit"
            disabled={text1 === "" || text2 === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser, users } = state;
  return { username: users[authedUser].name };
}

export default connect(mapStateToProps)(NewQuestion);
