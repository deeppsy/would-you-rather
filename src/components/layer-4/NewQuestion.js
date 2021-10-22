import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/questions";
import { Redirect } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
    const { text1, text2 } = this.state;
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
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2>
            Welcome <span className="text-muted">{username}</span>
          </h2>

          <Card bg="light" className="m-3">
            <Card.Header className="text-center">
              <h3>Create a New Poll</h3>
            </Card.Header>

            <Card.Body className="d-flex justify-content-center flex-column">
              <Card.Text className="text-bold">Would You Rather...</Card.Text>

              <Form className="new-tweet" onSubmit={this.handleSubmit}>
                <Stack gap={2} className="mx-auto">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Option"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Option"
                      value={text1}
                      name="text1"
                      onChange={this.handleChange}
                      maxLength={280}
                      autoComplete="off"
                    />
                  </FloatingLabel>{" "}
                  {textLeft1 <= 100 && (
                    <div className="text-length">{textLeft1}</div>
                  )}
                  <p className="horizontal-rule">OR</p>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Second Option"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Second Option"
                      value={text2}
                      name="text2"
                      onChange={this.handleChange}
                      maxLength={280}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                  {textLeft2 <= 100 && (
                    <div className="text-length">{textLeft2}</div>
                  )}
                </Stack>

                <div className="d-grid gap-2">
                  <Button
                    className="outline-success"
                    size="lg"
                    type="submit"
                    disabled={text1 === "" || text2 === ""}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">With Love from Dipo.</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  const { authedUser, users } = state;
  return { username: users[authedUser].name };
}

export default connect(mapStateToProps)(NewQuestion);
