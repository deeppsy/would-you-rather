import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../../utils/helpers";
import Avatar from "../layer-2/Avatar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import NotFound from "../layer-5/NotFound";

class AnsweredQuestion extends Component {
  render() {
    const { question, author, authedUser } = this.props;

    if (question === null) {
      return <NotFound />;
    }

    const { optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePercent = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercent = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );

    return (
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card bg="light" className="m-3">
            <Card.Header>
              <Avatar avatarURL={avatarURL} className="mr-2" />
              {name} asks:
            </Card.Header>

            <Card.Body className="d-flex justify-content-center">
              <ul>
                <li className="py-5 mb-1 px-2 bg-secondary">
                  <div className="position-relative text-center">
                    {optionOne.text}
                    {optionOne.votes.includes(authedUser) ? (
                      <div className="position-well">
                        <svg
                          width="150"
                          height="86"
                          viewBox="0 0 150 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110 22L150 32V67L110 86V45V22Z"
                            fill="#B34304"
                          />
                          <rect width="150" height="64" fill="#F77228" />
                          <path
                            d="M56.2472 19.2727L59.4304 24.9148V28H61.2628V24.9148L64.446 19.2727H62.3793L60.3892 23.0312H60.304L58.3139 19.2727H56.2472ZM72.9464 23.6364C72.9464 20.7812 71.1737 19.1534 68.8597 19.1534C66.533 19.1534 64.7731 20.7812 64.7731 23.6364C64.7731 26.4787 66.533 28.1193 68.8597 28.1193C71.1737 28.1193 72.9464 26.4915 72.9464 23.6364ZM71.0756 23.6364C71.0756 25.4858 70.1978 26.4872 68.8597 26.4872C67.5174 26.4872 66.6438 25.4858 66.6438 23.6364C66.6438 21.7869 67.5174 20.7855 68.8597 20.7855C70.1978 20.7855 71.0756 21.7869 71.0756 23.6364ZM79.7038 19.2727V24.7827C79.7038 25.7798 79.005 26.5 77.9311 26.5C76.8615 26.5 76.1584 25.7798 76.1584 24.7827V19.2727H74.3132V24.9403C74.3132 26.8494 75.7536 28.1236 77.9311 28.1236C80.1001 28.1236 81.549 26.8494 81.549 24.9403V19.2727H79.7038ZM83.0671 28H84.9123V24.9062H86.2589L87.9123 28H89.9492L88.0955 24.608C89.0884 24.1818 89.6381 23.3168 89.6381 22.1236C89.6381 20.3892 88.4918 19.2727 86.5103 19.2727H83.0671V28ZM84.9123 23.4233V20.7812H86.1566C87.2219 20.7812 87.7376 21.2543 87.7376 22.1236C87.7376 22.9886 87.2219 23.4233 86.1651 23.4233H84.9123ZM58.3352 31.2727H56.2855L59.2983 40H61.6761L64.6847 31.2727H62.6392L60.5256 37.9034H60.4446L58.3352 31.2727ZM73.2628 35.6364C73.2628 32.7812 71.4901 31.1534 69.1761 31.1534C66.8494 31.1534 65.0895 32.7812 65.0895 35.6364C65.0895 38.4787 66.8494 40.1193 69.1761 40.1193C71.4901 40.1193 73.2628 38.4915 73.2628 35.6364ZM71.392 35.6364C71.392 37.4858 70.5142 38.4872 69.1761 38.4872C67.8338 38.4872 66.9602 37.4858 66.9602 35.6364C66.9602 33.7869 67.8338 32.7855 69.1761 32.7855C70.5142 32.7855 71.392 33.7869 71.392 35.6364ZM73.9105 32.794H76.5824V40H78.4062V32.794H81.0781V31.2727H73.9105V32.794ZM82.2585 40H88.1562V38.4787H84.1037V36.3949H87.8366V34.8736H84.1037V32.794H88.1392V31.2727H82.2585V40Z"
                            fill="white"
                          />
                          <circle
                            cx="32"
                            cy="31"
                            r="14"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M23.0219 32.5892L28.8129 37.8536L41.4025 26.3318"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                </li>
                <ProgressBar
                  now={optionOnePercent}
                  label={`${optionOnePercent}%`}
                  variant="info"
                />
                <Card.Text className="text-muted">
                  chosen by {optionOne.votes.length} out of {totalVotes} users
                </Card.Text>
                <li className="py-5 mb-1 px-2 bg-secondary">
                  <div className="position-relative text-center">
                    {optionTwo.text}
                    {optionTwo.votes.includes(authedUser) ? (
                      <div className="position-well">
                        <svg
                          width="150"
                          height="86"
                          viewBox="0 0 150 86"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M110 22L150 32V67L110 86V45V22Z"
                            fill="#B34304"
                          />
                          <rect width="150" height="64" fill="#F77228" />
                          <path
                            d="M56.2472 19.2727L59.4304 24.9148V28H61.2628V24.9148L64.446 19.2727H62.3793L60.3892 23.0312H60.304L58.3139 19.2727H56.2472ZM72.9464 23.6364C72.9464 20.7812 71.1737 19.1534 68.8597 19.1534C66.533 19.1534 64.7731 20.7812 64.7731 23.6364C64.7731 26.4787 66.533 28.1193 68.8597 28.1193C71.1737 28.1193 72.9464 26.4915 72.9464 23.6364ZM71.0756 23.6364C71.0756 25.4858 70.1978 26.4872 68.8597 26.4872C67.5174 26.4872 66.6438 25.4858 66.6438 23.6364C66.6438 21.7869 67.5174 20.7855 68.8597 20.7855C70.1978 20.7855 71.0756 21.7869 71.0756 23.6364ZM79.7038 19.2727V24.7827C79.7038 25.7798 79.005 26.5 77.9311 26.5C76.8615 26.5 76.1584 25.7798 76.1584 24.7827V19.2727H74.3132V24.9403C74.3132 26.8494 75.7536 28.1236 77.9311 28.1236C80.1001 28.1236 81.549 26.8494 81.549 24.9403V19.2727H79.7038ZM83.0671 28H84.9123V24.9062H86.2589L87.9123 28H89.9492L88.0955 24.608C89.0884 24.1818 89.6381 23.3168 89.6381 22.1236C89.6381 20.3892 88.4918 19.2727 86.5103 19.2727H83.0671V28ZM84.9123 23.4233V20.7812H86.1566C87.2219 20.7812 87.7376 21.2543 87.7376 22.1236C87.7376 22.9886 87.2219 23.4233 86.1651 23.4233H84.9123ZM58.3352 31.2727H56.2855L59.2983 40H61.6761L64.6847 31.2727H62.6392L60.5256 37.9034H60.4446L58.3352 31.2727ZM73.2628 35.6364C73.2628 32.7812 71.4901 31.1534 69.1761 31.1534C66.8494 31.1534 65.0895 32.7812 65.0895 35.6364C65.0895 38.4787 66.8494 40.1193 69.1761 40.1193C71.4901 40.1193 73.2628 38.4915 73.2628 35.6364ZM71.392 35.6364C71.392 37.4858 70.5142 38.4872 69.1761 38.4872C67.8338 38.4872 66.9602 37.4858 66.9602 35.6364C66.9602 33.7869 67.8338 32.7855 69.1761 32.7855C70.5142 32.7855 71.392 33.7869 71.392 35.6364ZM73.9105 32.794H76.5824V40H78.4062V32.794H81.0781V31.2727H73.9105V32.794ZM82.2585 40H88.1562V38.4787H84.1037V36.3949H87.8366V34.8736H84.1037V32.794H88.1392V31.2727H82.2585V40Z"
                            fill="white"
                          />
                          <circle
                            cx="32"
                            cy="31"
                            r="14"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M23.0219 32.5892L28.8129 37.8536L41.4025 26.3318"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                </li>
                <ProgressBar
                  now={optionTwoPercent}
                  label={`${optionTwoPercent}%`}
                  variant="info"
                />
                <Card.Text className="text-muted">
                  chosen by {optionTwo.votes.length} out of {totalVotes} users
                </Card.Text>
              </ul>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{formatDate(timestamp)}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
