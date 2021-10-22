import React, { Component, Fragment } from "react";
import BriefQuestion from "./BriefQuestion";

export default class BriefQuestionsList extends Component {
  render() {
    const { listOfIds, emptyListNote } = this.props;
    return (
      <Fragment>
        <h2> Would You Rather ...?</h2>
        {listOfIds.length === 0 ? (
          <p>{emptyListNote}</p>
        ) : (
          listOfIds.map((id) => <BriefQuestion key={id} id={id} />)
        )}
      </Fragment>
    );
  }
}
