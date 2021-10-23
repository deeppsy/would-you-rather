import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Card bg="light" className="m-3">
              <Card.Img
                variant="top"
                src="/images/404-page.jpg"
                alt="404-page"
                fluid="true"
              />

              <Card.Body className="d-flex justify-content-center flex-column">
                <Card.Title className="text-bold">
                  Sorry, Page Not Found
                </Card.Title>
                <Card.Text>
                  Sorry, we couldn't fetch the page you requested for. Would you
                  like to <Link to="/">go back to the home page</Link>?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NotFound;
