import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    const {t, i18n, city} = this.props;
    return (
      <Link to="/">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://placehold.it/40x40" />
          <Card.Body className="title">
            <Card.Title>{city}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}

export default withTranslation()(Index);
