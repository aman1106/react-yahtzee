import React from 'react';

const ScoreBox = (props) => (
  <div className="ScoreBox-container">
    <span className="ScoreBox"><div className="block-value">{props.value}</div></span>
    <span className={`Score ${(props.lockScore === props.value) ? 'dice-locked' : ''} ${(props.rollLeft < 3 && props.value !== 'B' && !props.scoredBlocks.hasOwnProperty(props.value)) ? 'pointer-cursor' : ''} ${props.scoredBlocks.hasOwnProperty(props.value) ? 'locked-blocks' : ''}`} onClick={(props.rollLeft < 3 && props.value !== 'B' && !props.scoredBlocks.hasOwnProperty(props.value)) ? () => props.toggleLockScore(props.value, props.score) : null}>

      <div className="block-value">
        {props.jokerBlocks.includes(props.value) ? <span className="red-badge">
          +50
        </span> : ''}
        {(props.rollLeft === 3 && props.value !== 'B' && !props.scoredBlocks.hasOwnProperty(props.value)) ? '' : props.score}

      </div>

    </span>
  </div>
);

export default ScoreBox;
