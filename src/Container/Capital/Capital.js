import React, { Component } from "react";
import { Container, Row, Col ,Card} from "react-bootstrap";
import { Home, Phone, Contacts, DateRange, SupervisorAccount, 
AddIcCallOutlined, CreditCard, ArrowForward, TurnedInNot
} from "@material-ui/icons";

const details =[{Date:"9/11/2020", OrderId:"23476", TotalBill:" 200Rs", Credit: "200", Debit:"16", Items:"no value"},
{Date:"10/11/2020", OrderId:"234775", TotalBill:"700Rs", Credit:"300", Debit:"Debit: 17", Items:"no value"},
{Date:"11/11/2020", OrderId:"23391", TotalBill:"500Rs", Credit:"400", Debit:"18", Items:"no value"},
];

const show = details.map((types) => {
  return<Col xs={12}  md={4}>
  <Card style={{textAlign:"left"}}>
  <Card.Body>
  <Card.Text style={{display:"flex"}}>
    <DateRange fontSize="small"/>
  <b style={{marginLeft:"8px",marginRight:"20px"}}>Date:</b>
    {types.Date}
    </Card.Text>
    <Card.Text style={{display:"flex"}}>
      <SupervisorAccount fontSize="small"/>
   <b style={{marginLeft:"8px",marginRight:"20px"}}>OrderId:</b>
    {types.OrderId}
    </Card.Text>
    <Card.Text style={{display:"flex"}}>
      <AddIcCallOutlined fontSize="small"/>
    <b style={{marginLeft:"8px",marginRight:"20px"}}>TotalBill:</b>
    {types.TotalBill}
    </Card.Text>
    <Card.Text style={{display:"flex"}}>
      <CreditCard fontSize="small"/>
    <b style={{marginLeft:"8px",marginRight:"20px"}}>Credit:</b>
    {types.Credit}
    </Card.Text>
    <Card.Text style={{display:"flex"}}>
      <ArrowForward fontSize="small"/>
    <b style={{marginLeft:"8px",marginRight:"20px"}}>Debit:</b>
    {types.Debit}
    </Card.Text>
    <Card.Text style={{display:"flex"}}>
      <TurnedInNot fontSize="small"/>
   <b style={{marginLeft:"8px",marginRight:"20px"}}>Items:</b>
    {types.Items}
    </Card.Text>
    </Card.Body>
</Card>
  </Col>
})



export default class Container4 extends Component {
  render() {
    return <div>
<Container>
  <Row>
    <Col xs={12} sm={6} md={{offset:4, span:4}}>
   <Card style={{textAlign:"center", marginTop:"60px"}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title style={{margin:"0%"}}>Muneeb Ahmed</Card.Title>
    <Card.Title style={{fontSize:"18px", color:"orange"}}>Key Account Manager</Card.Title>
    <Card.Text style={{margin:"0%"}}>
      <b> BORN : </b> august 25,1987
    </Card.Text>
    <Card.Text style={{margin:"0%"}}>
   <b> EMAIL : </b> august 25,1987@gmail.com
    </Card.Text>
    <Card.Text>
   <b> MARITAL STATUS : </b> unmarried
    </Card.Text>
        <Home fontSize="small"/> <Phone fontSize="small"/> <Contacts fontSize="small"/>
  </Card.Body>
</Card>
</Col>
  </Row>
</Container>

<Container>
<h1 style={{textAlign:"center", marginTop:"70px", fontFamily:"merianda"}}><b>ORDERS</b></h1>
  <Row>
    {show}
  </Row>
</Container>
    </div>;
  }
}
