import React from 'react';
import logo from '../../images/logo.svg';
import './index.css';
import { withTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from '../Footer';
import {  Button, Container, Row, Col, Image, Jumbotron, Carousel, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../api/index.js';
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
        <Header />
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
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(Index);
