import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
    return <div>
             <Container>
                 <Row>
                     <Col md={{offset:3 , span:6}} xs={12}>
                    <h1 style={{marginTop:"60px", textAlign:"center", 
                    marginBottom:"30px",
                  fontFamily:"merianda"}}
                    ><b> SEARCH CUSTOMER</b>
                    </h1>
                     <Form>
    <Form.Group controlId="formBasicPassword">
    <Form.Control type="type" placeholder="Search..." />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="type" placeholder="Name..." />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="number" placeholder="Contact..." />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="type" placeholder="City..." />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="type" placeholder="Address..." />
  </Form.Group>

  <Button variant="primary" style={{width:"100%"}}> Search <FontAwesomeIcon icon={faSearch} /></Button>
</Form>
             </Col>
          </Row>
     </Container>
         </div>;
  }

export default SearchBox