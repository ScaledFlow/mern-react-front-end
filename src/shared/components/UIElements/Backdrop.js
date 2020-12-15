import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

// var d = new Date();
// console.log('backDrop.js ' + d.getSeconds() + " " + d.getMilliseconds());

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
