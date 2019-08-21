import React from 'react';
import {  Button, Container, Row, Col, Image, Dropdown } from 'react-bootstrap';


class App1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Abhijeet"
    }

  }
  render(){
    const { name } = this.state;
    return(
      <Container>
        <Row>
          <Col>
            <h2>Hello {name}</h2>
            <h1>Sign In</h1>
            <Button>On Click</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App1;
