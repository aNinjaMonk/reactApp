import React from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Abhijeet",
      date: new Date()
    }
  }

  render(){
    const {t, i18n} = this.props;
    return (
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default withTranslation()(App);
