import React from 'react';

const Rules = ({onClick}) => (
  <div className="Gamebox" style={{cursor: 'auto'}}>
    <div className="rulesHeader">Rules</div>
    <div style={{position: 'relative', height: '83%', padding: '30px 28px 15px', overflow: 'scroll', fontSize: '14px'}}>
      Score as many points as possible by rolling dice to reach the 13 combinations predefined in the game.<br/>

      Dice can be rolled up to three times in a turn to make one of the possible scoring combinations.<br/>

      A game consists of rounds during which the player chooses which scoring combination is to be used in that round.
      Once a combination has been used in the game, it cannot be used again.<br/>

      You can select dice after your first or second roll, and you must score after your third roll. After the first and second roll you can save the dice by clicking on them or throw them in the spots. Dice that are set aside from the previous rolls can be taken out and re-rolled again.<br/>

      When you want to record a combination in the scoreboard, click on the score(number) next to the combination and then press the score button.
      When you reach at least 63 points in the minor(left) part of the scoreboard, you unlock a 35 bonus points.
      You have a Yahtzee when you get 5 dice with the same side and it is worth 50 points. If you get another yahtzee after that, it still gives you a bonus of 50 points whatever the combination you choose.
      The game ends when all categories have been scored.<br/>

      <u style={{fontSize: '16px'}}>Combinations</u><br/>
      <div style={{textAlign: 'left', fontSize: '12px'}}>
        <u>For 1 to 6:</u> Get the maximum of dice with this side. It scores the sum of these specific dice only.<br/>
        <u>3X & 4X:</u> Three of a kind & Four of a kind.<br/>
        <u>Full house(FH):</u> Three of a kind & a pair | 25 points.<br/>
        <u>Small straight(Sm):</u> 4 consecutive dice | 30 points.<br/>
        <u>Large straight(Lg):</u> 1-2-3-4-5 or 2-3-4-5-6 | 40 points.<br/>
        <u>Yahtzee(YT):</u> 5 dice with the same side 50 points.<br/>
        <u>Chance(?):</u> Scores the sum of all dice.<br/>
      </div>
    </div>
    <button className="Roll-button button button-full" onClick={(e) => {onClick(Math.floor(Math.random() * 2))}}>Done</button>
  </div>
);

export default Rules;
