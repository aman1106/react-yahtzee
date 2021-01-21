import React from 'react';
import Menu from './Menu';
import { useTrail, animated } from 'react-spring'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const Sphere = ({onClick}) => {
  const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))

  return (
    <div style={{width: '100%', height: '100%', cursor: 'auto'}}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX - ((window.innerWidth < 600 ? 0.05 : 0.35) * window.innerWidth), e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
      <Menu onClick={onClick}/>
    </div>
  )
}

export default Sphere;
