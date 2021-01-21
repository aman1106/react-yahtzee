import React, {Component} from 'react';
import ScoreArea from './ScoreArea';
import PlayArea from './PlayArea';
import Scores from './Scores';

class GameBox extends Component {

  state = {
    diceValue: {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
    },
    rollLeft: 3,
    locked: [false,false,false,false,false],
    lockScore: '',
    lockScoreValue: '',
    lTotal: 0,
    grandTotal: 0,
    scoredBlocks: [],
    joker: false,
    jokerBlocks: [],
    gameOver: false,
    viewBoard:false,
    bonusGiven: false,
  }

  rollDice = () => {
    this.setState((state, props) => ({...this.state,
      diceValue: {
        '0': state.locked[0] ? state.diceValue[0] : Math.floor(Math.random() * 6) + 1,
        '1': state.locked[1] ? state.diceValue[1] : Math.floor(Math.random() * 6) + 1,
        '2': state.locked[2] ? state.diceValue[2] : Math.floor(Math.random() * 6) + 1,
        '3': state.locked[3] ? state.diceValue[3] : Math.floor(Math.random() * 6) + 1,
        '4': state.locked[4] ? state.diceValue[4] : Math.floor(Math.random() * 6) + 1,
      }, rollLeft: state.rollLeft-1, lockScore: ''
    }));
  }

  scoreDice = () => {
    let bonusGiven = this.state.bonusGiven;
    let grandTotal = this.state.grandTotal;
    grandTotal = grandTotal+this.state.lockScoreValue;
    let lTotal = this.state.lTotal;
    if(['1','2','3','4','5','6'].includes(this.state.lockScore)) {
      lTotal = lTotal+this.state.lockScoreValue;
    }
    if(lTotal >= 63 && !bonusGiven) {
      grandTotal = grandTotal + 35;
      bonusGiven = true;
    }
    let scoredBlocks = this.state.scoredBlocks;
    scoredBlocks[this.state.lockScore] = this.state.lockScoreValue;
    let jokerBlocks = this.state.jokerBlocks;
    if(this.state.joker === true) {
      grandTotal = grandTotal + 50;
      jokerBlocks.push(this.state.lockScore);
    }
    this.setState({...this.state,
      diceValue: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
      }, rollLeft: 3, grandTotal: grandTotal, lTotal: lTotal, bonusGiven: bonusGiven, scoredBlocks: scoredBlocks, joker: false, jokerBlocks: jokerBlocks}, () => {
        this.unlockAll();
      });
  }

  toggleLock = (key) => {
    let locked = this.state.locked;
    locked[key] = !locked[key];
    this.setState({...this.state, locked: locked});
  }

  unlockAll = () => {
    let locked = [false,false,false,false,false];
    this.setState({...this.state, locked: locked, lockScore: ''});
  }

  toggleLockScore = (name, value) => {
    this.setState((state, props) => {
      if(state.lockScore !== '' && state.lockScore === name) {
        return ({...this.state, lockScore: ''});
      } else {
        return ({...this.state, lockScore: name, lockScoreValue: value});
      }
    });
  }

  updateJoker = (value) => {
    this.setState({...this.state, joker: value});
  }

  gameOver = () => {
    this.setState({...this.state, gameOver: true, viewBoard: true});
  }

  render() {
    return (
      <div className="Gamebox">
        {this.state.viewBoard ? <Scores onClick={this.props.onClick} score={this.state.grandTotal} viewBoard={() => {this.setState({...this.state, viewBoard: false})}} /> :
        <React.Fragment>
        <ScoreArea diceValue={this.state.diceValue} rollLeft={this.state.rollLeft} toggleLockScore={this.toggleLockScore} lockScore={this.state.lockScore}
            lTotal={this.state.lTotal} scoredBlocks={this.state.scoredBlocks} jokerBlocks={this.state.jokerBlocks} joker={this.state.joker} updateJoker={this.updateJoker}
            gameOver={this.gameOver} isGameOver={this.state.gameOver}
         />
        <PlayArea rollDice={this.rollDice} diceValue={this.state.diceValue} rollLeft={this.state.rollLeft} scoreDice={this.scoreDice}
          toggleLock={this.toggleLock} locked={this.state.locked} lockScore={this.state.lockScore} isGameOver={this.state.gameOver} viewScore={() => {this.setState({...this.state, viewBoard: false})}}
        />
        </React.Fragment>
        }
      </div>
    );
  }
}

export default GameBox;
