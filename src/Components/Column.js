import React from 'react';
import './../App.css';

/**
 * This is a helper component to define a single column with an image, title, paragraph and button.
 * This component will mostly be used multiple times in a container to create a row of Columns.
 * Also, all parts are optional, for example if there is no image or button it will just
 * create a column with a title and paragraph.
 */
function Column({src, title, p, button, imgclass}) {
  return (
    <div className="column">
      <img className={"column-img " + imgclass} src={src} alt=""/>
      <h3 className="column-h">{title}</h3>
      <p className="column-p">{p}</p>
      <div>{button}</div>
    </div>
  );
}

export default Column;
