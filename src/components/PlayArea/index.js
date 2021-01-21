import React, {Component} from 'react';
import Dice from "./Dice";
import _ from "lodash";

class PlayArea extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="PlayArea">
          {_.times(5, (i) => (
            <Dice diceValue={this.props.diceValue} index={i} key={i} locked={this.props.locked} toggleLock={this.props.toggleLock} rollLeft={this.props.rollLeft}/>
          ))}
        </div>
        <div>
          {this.props.isGameOver ?
          <button className="Roll-button button button-full" onClick={this.props.viewScore}>View Score</button> :
          <React.Fragment>
          <button
            className={`Roll-button button ${this.props.rollLeft ? '' : 'button-disabled'} ${(this.props.rollLeft < 3) ? 'button-half' : 'button-full'}`}
            disabled={!this.props.rollLeft}
            onClick={this.props.rollDice}
          >Roll ({this.props.rollLeft})
          </button>
          {(this.props.rollLeft < 3) ?
          <button className={`Score-button button button-half ${this.props.lockScore ? '' : 'button-disabled'}`} disabled={!this.props.lockScore} onClick={this.props.scoreDice}>
            Score
          </button> : ''}
          </React.Fragment>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default PlayArea;
