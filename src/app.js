import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './components/greeting.component'

let root = document.getElementById('react-root');

ReactDOM.render(
  <div>
    <Greeting name='Earth' />
    <Greeting name='Mars' />
  </div>,
  root
);
