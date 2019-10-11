import React from 'react';
import logo from '../../images/logo.svg';
import './index.css';
import { withTranslation } from 'react-i18next';
import {  Button, Container, Row, Col, Image, Jumbotron, Carousel, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import api from '../../api';
const { db, mock } = api;

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    console.log(mock.getData());
  }

  componentWillUnmount(){

  }

  render(){
    const {t, i18n} = this.props;
    return (
      <>
      hello
      </>
    );
  }
}

export default withTranslation()(Index);
