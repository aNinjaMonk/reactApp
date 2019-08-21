import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Dropdown, Card } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Activity from './Activity';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Abhijeet",
      date: new Date()
    }
  }

  componentDidMount(){
    this.setState({name: "Goel"});
  }

  componentWillUnmount(){

  }

  handleClick = () => {
    alert('hello');
  }

  render(){
    const {t, i18n} = this.props;
    return (
      <Container>
        <h1>Activities</h1>
        <Row>
          <Col xs={4}>
            <Activity name="Chandni Chowk"
              desc="Cultural Hub and heart of Delhi right in center, ready to take you in."
              price="4500" />
          </Col>
          <Col xs={4}>
            <Activity name="Lotus Temple" desc="" price="2000" />
          </Col>
          <Col xs={4}>
            <Activity name="Hauz Khaas" desc="" price="1000" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(Index);
