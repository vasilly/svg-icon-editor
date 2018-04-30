import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import shades, { Shades } from '@bupa-digital/shades/react';
import { states } from '@bupa-digital/shades/helpers';

const SimpleBox = shades.div({
  padding: '10px',
  boxShadow: '3px 3px 3px #000',
  color: '#000',
  ...states.all('hover', 'focus')({
    textDecoration: 'underline'
  }),
  '::before': {
    content: 'SimpleBox'
  }
});

class Appp extends Component {
  render() {
    return (
      <div className="Appp">
        <header className="Appp-header">
          <img src={logo} className="Appp-logo" alt="logo" />
          <h1 className="Appp-title">Welcome to React</h1>
        </header>
        <p className="Appp-intro">
          To get started, edit <code>src/Appp.js</code> and save to reload.
        </p>
        <SimpleBox />
      </div>
    );
  }
}

export default Appp;
