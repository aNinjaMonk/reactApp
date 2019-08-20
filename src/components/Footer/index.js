import React from 'react';
import './index.css';
import { withTranslation } from 'react-i18next';
import {  Button, Container, Row, Col, Image, Dropdown } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render(){
    const {t, i18n} = this.props;
    return (
      <div>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default withTranslation()(Index);
