import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

import Gold from "../util-components/Gold";
import Silver from "../util-components/Silver";
import Bronze from "../util-components/Bronze";

class UserCard extends Component {
  trophyWrapper = (trophy) => {
    return `<${trophy}/>`;
  };

  render() {
    const { user, users, trophyID } = this.props;
    const answers = Object.keys(users[user].answers).length;
    const questionsAsked = users[user].questions.length;
    const total = answers + questionsAsked;
    const username = users[user].name;
    const avatarURL = users[user].avatarURL;

    return (
      <Fragment>
        <Row className="justify-content-center mb-3">
          <Col md={3}>
            <Card bg="light" className="full-height">
              <Fragment>
                {trophyID === 0 && <Gold />}
                {trophyID === 1 && <Silver />}
                {trophyID === 2 && <Bronze />}
                <Card.Img variant="top" src={avatarURL} />
              </Fragment>
            </Card>
          </Col>
          <Col md={6}>
            <Card bg="light" className="full-height">
              <Card.Body>
                <Card.Title>{username}</Card.Title>
                <div>
                  <Stack gap={2} className="mx-auto">
                    <div>
                      <p>Answered Questions</p>
                      <p>{answers}</p>
                    </div>
                    <div>
                      <p>Created Questions</p>
                      <p>{questionsAsked}</p>
                    </div>
                  </Stack>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card bg="light" className="full-height">
              <Card.Body>
                <Card.Title>Score</Card.Title>

                <div>{total}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(UserCard);
