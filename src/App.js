import React from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

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
          <Route path="/signup/" component={SignUp} />
          <Route path="/login/" component={Login} />
      </Router>
    );
  }
}

export default withTranslation()(App);
