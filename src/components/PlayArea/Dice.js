import React from 'react';

const Dice = (props) => (
  <div className={`Dice ${(props.rollLeft < 3) ? 'pointer-cursor' : ''} ${props.locked[props.index] ? 'dice-locked' : 'dice-unlocked'}`}
       onClick={(props.rollLeft < 3) ? () => props.toggleLock(props.index) : null}
  >
    {(props.diceValue[props.index] === 1) ?
      <div className="first-face dice">
        <span className="dot"></span>
      </div> :
      (props.diceValue[props.index] === 2) ?
      <div className="second-face dice">
        <span className="dot"> </span>
        <span className="dot"> </span>
      </div> :
      (props.diceValue[props.index] === 3) ?
      <div className="third-face dice"><span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> :
      (props.diceValue[props.index] === 4) ?
      <div className="fourth-face dice">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div> :
      (props.diceValue[props.index] === 5) ?
      <div className="fifth-face dice">

        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="column">
          <span className="dot"></span>
        </div>

        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div> :
      (props.diceValue[props.index] === 6) ?
      <div className="sixth-face dice">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div> : ''
    }
  </div>
);

export default Dice;
