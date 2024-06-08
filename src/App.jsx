import React from 'react';
import './App.css';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import MultipleUseState from './Components/multipleUseState';
import UseStatewithObj from './Components/UseStatewithObj';
import StatefromFunction from './Components/StatefromFunction';
import Cont from './Components/Cont';

const App = () => (
  <>
    <UseState />
    <hr />
    <MultipleUseState />
    <hr />
    <UseStatewithObj />
    <hr />
    <StatefromFunction />
    <hr />
    <UseEffect />
    <hr />
    <Cont />
  </>
);

export default App;