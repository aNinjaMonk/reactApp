import React from 'react';
import './index.css';
import {  Button, Container, Row, Col, Image, Dropdown } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

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
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
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
