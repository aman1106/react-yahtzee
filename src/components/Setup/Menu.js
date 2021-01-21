import React from 'react';

const Menu = ({onClick}) => {
  return (
    <div>
      <button className="Roll-button button button-full" onClick={(e) => {onClick(3)}}>Play Game</button>
      <button className="Roll-button button button-full" onClick={(e) => {onClick(4)}}>Rules</button>
    </div>
  )
}

export default Menu;
