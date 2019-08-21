import React from 'react';
import './index.css';
import { withTranslation } from 'react-i18next';
import {  Button, Container, Row, Col, Image, Dropdown } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render(){
    const {t, i18n} = this.props;
    return (
      <Container className="footer">
        <h1>Footer</h1>
        <Row>
          <Col xs={3}>
          </Col>
          <Col xs={3}>
          </Col>
          <Col xs={3}>
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms.html">Terms & Conditions</a></li>
              <li></li>
              <li></li>
            </ul>

          </Col>
          <Col xs={3}>
            <h4>Payment Mode</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(Index);
