import React from 'react';

import './MainHeader.css';

// var d = new Date();
// console.log('mainHeader.js ' + d.getSeconds() + " " + d.getMilliseconds());


const MainHeader = props => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
