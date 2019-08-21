import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Dropdown, Card } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Destination from './Destination';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Abhijeet",
      date: new Date(),
      cities: ["Delhi","Bangalore","Mumbai"]
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  handleClick = () => {
    alert('hello');
  }

  render(){
    const {t, i18n} = this.props;
    const { cities } = this.state;
    var activity = cities.forEach((city) => <Destination city={city} /> );
    return (
      <Container>
        <h1>{t('Destinations')}</h1>
        <Row>
          <Col xs={4}>
            <Destination city="Delhi" />
          </Col>
          <Col xs={4}>
            <Destination city="Bangalore" />
          </Col>
          <Col xs={4}>
            <Destination city="Mumbai" />
          </Col>
        </Row>
        {activity}
      </Container>
    );
  }
}

export default withTranslation()(Index);
