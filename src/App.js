import React from 'react';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" component={Home} />
          <Route path="/about/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default withTranslation()(App);
