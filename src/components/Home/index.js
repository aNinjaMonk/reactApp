import React from 'react';
import logo from '../../images/logo.svg';
import './index.css';
import { withTranslation } from 'react-i18next';
import {  Button, Container, Row, Col, Image, Jumbotron, Carousel, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../api/index.js';
import Header from '../Header';
import Footer from '../Footer';
import Activities from '../Activities';
import Destinations from '../Destinations';

const firebase = require("firebase");

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
    //api.fetchActivities();
    api.getData();
    //api.fetchActivity("EGpdZXutt90zPHX8XucQ");
  }

  componentWillUnmount(){

  }

  render(){
    const {t, i18n} = this.props;
    return (
      <div>
        <Row>
          <Carousel controls={false} indicators={false} fade={true} interval={1000}>
            <Carousel.Item>
              <Image src="http://www.placehold.it/1100X400/000000" className="carousel" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="http://www.placehold.it/1100X400" className="carousel" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="http://www.placehold.it/1100X400/FFFFFF" className="carousel" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <br />
        <Destinations />
        <br /><br />
        <Activities />
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default withTranslation()(Index);
