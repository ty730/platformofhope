import React from 'react';
import './App.css';

/**
 * This is a helper component to define a layout with an image on one side and a title with
 * information under it on the other side. By default if the prop reverse is false or not
 * defined then the image is on the right and information on the left. But if reverse is
 * set to true then the image is swapped to the left and info goes on the right.
 */
function InfoSection({reverse, title, p, p2, src, button}) {
  return (
    <div className={"section " + reverse}>
      <div className="info">
        <h2>{title}</h2>
        <p>{p}</p>
        <p>{p2}</p>
        <div>{button}</div>
      </div>
      <img className="image" src={src} alt=""/>
    </div>
  );
}

export default InfoSection;
