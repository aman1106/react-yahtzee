import React, {Component} from 'react';
import ScoreBox from "./ScoreBox";

class ScoreArea extends Component {
  state = {
    allBlocks: {
      "1": this.props.scoredBlocks.hasOwnProperty('1') ? this.props.scoredBlocks['1'] : null,
      "2": this.props.scoredBlocks.hasOwnProperty('2') ? this.props.scoredBlocks['2'] :  null,
      "3": this.props.scoredBlocks.hasOwnProperty('3') ? this.props.scoredBlocks['3'] :  null,
      "4": this.props.scoredBlocks.hasOwnProperty('4') ? this.props.scoredBlocks['4'] :  null,
      "5": this.props.scoredBlocks.hasOwnProperty('5') ? this.props.scoredBlocks['5'] :  null,
      "6": this.props.scoredBlocks.hasOwnProperty('6') ? this.props.scoredBlocks['6'] :  null,
      "B": ((this.props.lTotal < 63) ? `${this.props.lTotal}/63` : '+35') || '0/63',
      "3X": this.props.scoredBlocks.hasOwnProperty('3X') ? this.props.scoredBlocks['3X'] :  null,
      "4X": this.props.scoredBlocks.hasOwnProperty('4X') ? this.props.scoredBlocks['4X'] :  null,
      "FH": this.props.scoredBlocks.hasOwnProperty('FH') ? this.props.scoredBlocks['FH'] :  null,
      "Sm": this.props.scoredBlocks.hasOwnProperty('Sm') ? this.props.scoredBlocks['Sm'] :  null,
      "Lg": this.props.scoredBlocks.hasOwnProperty('Lg') ? this.props.scoredBlocks['Lg'] :  null,
      "YT": this.props.scoredBlocks.hasOwnProperty('YT') ? this.props.scoredBlocks['YT'] :  null,
      "?": this.props.scoredBlocks.hasOwnProperty('?') ? this.props.scoredBlocks['?'] :  null
    },
  };

  getSumOfNumber = (diceValues, n) => {
    const values = diceValues.slice();
    return values
      .filter(function(die) {
        return die === n;
      })
      .reduce(function(a, b) {
        return a + b;
      }, 0);
  }

  isSmallStraight = (diceValues) => {
    const diceValuesArray = diceValues.slice();
    const values = diceValuesArray.filter(function(die, index) {
        return diceValuesArray.indexOf(die) === index;
      }).sort().join("").toString();
    return (values.includes("1234") || values.includes("2345") || values.includes("3456"));
  }

  isLargeStraight = (diceValues) => {
    let values = diceValues.slice();
    return (values.sort().join("") === "12345" || values.sort().join("") === "23456");
  }

  isFullHouse = (diceValues) => {
    let count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    for (let i = 0; i < diceValues.length; i++) {
      count[diceValues[i]]++;
    }
    return (Object.values(count).filter(function(c) {
          return c !== 0;
        }).sort().join("").toString() === "23");
  }

  isNumberOfAKind = (diceValues, number) => {
    let values = diceValues.slice();
    let isCombination;
    for (let i = 0; i < 4; i++) {
      if (values.filter(function(die) {
          return die === values[i];
        }).length >= number) {
        isCombination = true;
      }
    }
    return !!isCombination;
  }

  getSumOfAllDice = (diceValues) => {
    const values = diceValues.slice();
    return values.reduce(function(a, b) {
      return a + b;
    }, 0);
  }

  isGameOver = () => {
    if(Object.keys(this.props.scoredBlocks).length === 13) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      let one, two, three, four, five, six, tok, fok, fh, sm, lg, yt, sum, chance, yta, gameover;
      one = this.props.scoredBlocks.hasOwnProperty('1') ? this.props.scoredBlocks['1'] : this.getSumOfNumber(Object.values(this.props.diceValue), 1);
      two = this.props.scoredBlocks.hasOwnProperty('2') ? this.props.scoredBlocks['2'] : this.getSumOfNumber(Object.values(this.props.diceValue), 2);
      three = this.props.scoredBlocks.hasOwnProperty('3') ? this.props.scoredBlocks['3'] : this.getSumOfNumber(Object.values(this.props.diceValue), 3);
      four = this.props.scoredBlocks.hasOwnProperty('4') ? this.props.scoredBlocks['4'] : this.getSumOfNumber(Object.values(this.props.diceValue), 4);
      five = this.props.scoredBlocks.hasOwnProperty('5') ? this.props.scoredBlocks['5'] : this.getSumOfNumber(Object.values(this.props.diceValue), 5);
      six = this.props.scoredBlocks.hasOwnProperty('6') ? this.props.scoredBlocks['6'] : this.getSumOfNumber(Object.values(this.props.diceValue), 6);
      fh = this.props.scoredBlocks.hasOwnProperty('FH') ? this.props.scoredBlocks['FH'] : this.isFullHouse(Object.values(this.props.diceValue));
      tok = this.props.scoredBlocks.hasOwnProperty('3X') ? this.props.scoredBlocks['3X'] : this.isNumberOfAKind(Object.values(this.props.diceValue), 3);
      fok = this.props.scoredBlocks.hasOwnProperty('4X') ? this.props.scoredBlocks['4X'] : this.isNumberOfAKind(Object.values(this.props.diceValue), 4);
      sm = this.props.scoredBlocks.hasOwnProperty('Sm') ? this.props.scoredBlocks['Sm'] :  this.isSmallStraight(Object.values(this.props.diceValue));
      lg = this.props.scoredBlocks.hasOwnProperty('Lg') ? this.props.scoredBlocks['Lg'] : this.isLargeStraight(Object.values(this.props.diceValue));
      yt = this.props.scoredBlocks.hasOwnProperty('YT') ? this.props.scoredBlocks['YT'] : this.isNumberOfAKind(Object.values(this.props.diceValue), 5);
      chance = this.props.scoredBlocks.hasOwnProperty('?') ? this.props.scoredBlocks['?'] : this.getSumOfAllDice(Object.values(this.props.diceValue));
      yta = this.props.scoredBlocks.hasOwnProperty('YT') && this.state.allBlocks["YT"] === 50 && this.isNumberOfAKind(Object.values(this.props.diceValue), 5);
      sum = this.getSumOfAllDice(Object.values(this.props.diceValue));
      gameover = this.isGameOver();
      if(prevProps !== this.props) {
        this.setState({...this.state,
            allBlocks: {
                "1": one ? one : 0,
                "2": two ? two : 0,
                "3": three ? three : 0,
                "4": four ? four : 0,
                "5": five ? five : 0,
                "6": six ? six : 0,
                "B": (this.props.lTotal < 63) ? `${this.props.lTotal}/63` : '+35',
                "3X": this.props.scoredBlocks.hasOwnProperty('3X') ? this.props.scoredBlocks['3X'] : tok ? sum : 0,
                "4X": this.props.scoredBlocks.hasOwnProperty('4X') ? this.props.scoredBlocks['4X'] : fok ? sum : 0,
                "FH": fh ? 25 : 0,
                "Sm": sm ? 30 : 0,
                "Lg": lg ? 40 : 0,
                "YT": yt ? 50 : 0,
                "?": chance
            }
        });
      }
      if(this.props.joker !== yta) {
        this.props.updateJoker(yta);
      }
      if(gameover) {
        this.props.gameOver();
      }
  }

  render() {
    return (
      <div className="ScoreArea">
          {Object.keys(this.state.allBlocks).map((block, index) => (
              <ScoreBox key={index} index={index} value={block} score={this.state.allBlocks[block]} rollLeft={this.props.rollLeft}
              toggleLockScore={this.props.toggleLockScore} lockScore={this.props.lockScore} scoredBlocks={this.props.scoredBlocks} jokerBlocks={this.props.jokerBlocks}/>
          ))}
      </div>
    );
  }
}

export default ScoreArea;
