import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './capitalCard.css';

export default function pofitCard(props) {
  return (
    <Col xs={12} sm={6} md={{ offset:2, span:4}}>
      <Card className="capital-card-centering">
        <Card.Body>
        <FontAwesomeIcon className="capital-icons-style" size= "5x" icon={props.icon} />
          <Card.Header className="capital-card-header-heading">{props.heading}</Card.Header>
          <Card.Text>{props.para}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
