import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Dropdown, Form } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import * as api from '../../api';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  componentDidMount(){
    this.setState({name: "Goel"});
  }

  componentWillUnmount(){

  }

  handleSubmit = (e) => {
    e.preventDefault();

    alert('clicked!!');
    //api.signUp("abhijeetgoel77@gmail.com","fundoo0123");
    //api.login("abhijeetgoel77@gmail.com","fundoo0123");
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

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
    );
  }
}

export default withTranslation()(Index);
