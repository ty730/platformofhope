import React from 'react';
import './App.css';

function InfoSection({reverse, header, p, p2, src, button}) {
  return (
    <div className={"section " + reverse}>
      <div className="info">
        <h2>{header}</h2>
        <p>{p}</p>
        <p>{p2}</p>
        <div>{button}</div>
      </div>
      <img className="image" src={src} alt=""/>
    </div>
  );
}

export default InfoSection;
