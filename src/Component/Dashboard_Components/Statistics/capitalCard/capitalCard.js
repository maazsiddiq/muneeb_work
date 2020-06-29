import React from "react";
import { Card, Col } from "react-bootstrap";
import './capitalCard.css'

export default function pofitCard(props) {
  return (
    <Col xs={12} sm={6} md={3}>
      <Card>
        <Card.Body>
          <Card.Header className="capital-card-header-heading">{props.heading}</Card.Header>
          <Card.Text>{props.para}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
