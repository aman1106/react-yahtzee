import React from "react";
import {useSpring, animated} from 'react-spring';

const Scores = ({score, onClick, viewBoard}) => {
  const spring = useSpring({ to: { number: score }, from: { number: 0 } })
  return (
    <div className="Gamebox" style={{cursor: 'auto'}}>
      <div style={{paddingTop: '15px'}}>Your Score</div>
      <div className="final-score">
        <animated.span>{spring.number.interpolate(number => Math.floor(number))}</animated.span>
      </div>
      <button className="Roll-button button button-full"  onClick={(e) => {viewBoard()}}>View Board</button>
      <button className="Roll-button button button-full" onClick={(e) => {onClick(0)}}>Play Again</button>
    </div>
  );
}

export default Scores;
