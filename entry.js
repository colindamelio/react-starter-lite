import './style.css';
import React from 'react';
import { render } from 'react-dom';


class WelcomeHeading extends React.Component {
  render() {
    return(
      <div id="WelcomeHeading">
        Hello From React!
      </div>
    )
  }
}

render(<WelcomeHeading />, document.getElementById('root-app'));
