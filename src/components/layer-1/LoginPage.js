import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { setAuthedUser } from "../../actions/authedUser";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LoginPage extends Component {
  state = {
    errorMsg: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const userID = this.userID.value;
    const { dispatch } = this.props;

    if (userID) {
      dispatch(setAuthedUser(userID));
    } else {
      this.setState(() => ({
        errorMsg: "Please pick a user",
      }));
    }
  };

  render() {
    const { errorMsg } = this.state;
    console.log(this.props);
    return (
      <Row className="d-flex justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={4}>
          <Card bg="light">
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGridState">
                  <Form.Label>Usernames</Form.Label>
                  {errorMsg && <p className="text-danger">{errorMsg}</p>}
                  <Form.Control
                    as="select"
                    ref={(id) => (this.userID = id)}
                    className="form-select text-primary"
                  >
                    <option value="">Please Select a User</option>
                    {this.props.userNames.map((username) => (
                      <option key={username.value} value={username.value}>
                        {username.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <br />
                <Button type="submit" variant="outline-secondary">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
      avatarURL: users[id].avatarURL,
    })),
  };
}

export default connect(mapStateToProps)(LoginPage);
