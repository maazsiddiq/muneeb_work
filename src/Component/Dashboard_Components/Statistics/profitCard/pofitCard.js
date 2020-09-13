import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './profitCards.css'

export default function pofitCard(props) {
  return (
    <Col xs={12} sm={6} md={3}>
      <Card className="Cards-body-centering">
        <Card.Body>
          <FontAwesomeIcon className="profit-icons-style" size= "5x" icon={props.icon} />
          <Card.Header className="profit-Card-header-heading">{props.heading}</Card.Header>
          <Card.Text>{props.para}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
