import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Dropdown, Form } from 'react-bootstrap';
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
    const {t, i18n} = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Control required type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control required type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Form.Group id="formGridForget">
          <Form.Check type="link" label="Forgot Password ?" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    );
  }
}

export default withTranslation()(Index);
