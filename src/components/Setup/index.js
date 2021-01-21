import React, { useState, useCallback } from 'react';
import GameBox from "../index";
import Sphere from "./Sphere";
import Rules from './Rules';
import Parallax from './Parallax';
import Devil from './Devil';
import { useTransition, animated } from 'react-spring'

const pages = [
  ({ style, onClick }) => <animated.div className="Gamebox" style={{ ...style}}><Devil onClick={onClick}/></animated.div>,
  ({ style, onClick }) => <animated.div className="Gamebox" style={{ ...style}}><Sphere onClick={onClick}/></animated.div>,
  ({ style, onClick }) => <animated.div className="Gamebox" style={{ ...style}}><Parallax onClick={onClick}/></animated.div>,
  ({ style, onClick }) => <animated.div style={{ ...style, cursor: 'auto'}}><GameBox onClick={onClick}/></animated.div>,
  ({ style, onClick }) => <animated.div className="Gamebox" style={{ ...style}}><Rules onClick={onClick}/></animated.div>,
]

function StartSetup() {
  const [index, set] = useState(Math.floor(Math.random() * 3));
  const [score, setScore] = useState(0);
  const onClick = useCallback((pageName, score) => {set(state => pageName); setScore(state => score ? score : 0)}, [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} onClick={onClick} score={score}/>
      })}
    </div>
  )
}

export default StartSetup;
