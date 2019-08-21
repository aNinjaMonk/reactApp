import React from 'react';
import './index.css';
//import Button from '@material-ui/core/Button';
import { withTranslation } from 'react-i18next';
import logo from '../../images/logo.jpg';
import {  Button, Container, Row, Col, Image, Jumbotron, Carousel, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      <div>
        <Container>
          <Row>
            <Col xs={4}>
              <Link to="/">
                <Image src="http://www.placehold.it/50X50" className="logo" />
              </Link>
            </Col>
            <Col xs={3}>

            </Col>
            <Col xs={1} offset={1}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action2">Spainish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={1}>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Currency
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action1">INR</Dropdown.Item>
                  <Dropdown.Item href="#/action2">DOLLAR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={1}>
              <Link to="/login">Log In</Link>
            </Col>
            <Col xs={1}>
              <Link to="/signup">Sign Up</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withTranslation()(Index);
