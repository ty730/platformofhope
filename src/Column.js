import React from 'react';
import './App.css';

function Column({src, header, p, button, imgclass}) {
  return (
    <div className="column">
      <img className={"column-img " + imgclass} src={src} alt=""/>
      <h3 className="column-h">{header}</h3>
      <p className="column-p">{p}</p>
      <div>{button}</div>
    </div>
  );
}

export default Column;
