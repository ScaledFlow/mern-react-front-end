import React from 'react';

import './Avatar.css';

// var d = new Date();
// console.log('Avatar.js ' + d.getSeconds() + " " + d.getMilliseconds());


const Avatar = props => {
  // console.log(props);
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
