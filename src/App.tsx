import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './Block';
import Line from './Line';
import Circle from './Circle';
import withObjectContext from './withObjectContext';

function App() {
  return (
    <Fragment>
      <Block/>
      <Line/>
      <Circle/>
    </Fragment>
  );
}

export default withObjectContext(App);
