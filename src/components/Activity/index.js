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
      <div>
        <h1>Sign In</h1>
        <Button variant="contained" color="primary">
          Hello
        </Button>
      </div>
    );
  }
}

export default withTranslation()(Index);
