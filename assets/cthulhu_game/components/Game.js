import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Board } from './Board'
import {makeMove} from '../store/actions/makeMove'
import {calculateWinner} from '../store/actions/calculateWinner'
import {jumpTo} from '../store/actions/jumpTo'
import {NavBar} from "./NavBar";

const Game = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const squares = history[stepNumber].squares;

  const handleClick = (i) => {
    const current = history[stepNumber];
    const squares = [...current.squares];
    const winner = calculateWinner(squares).payload;
    if (winner || squares[i]) {
      return;
    }
    dispatch(makeMove(i, xIsNext));
  };

  const getStatus = () => {
    const winner = calculateWinner(squares).payload;

    // TODO : Increment the number of games won for the player who won the game

    if (winner)
    {
      return (winner.winner === 'X' ? player1 : player2) + ' a gagné !'
    }
    else if (stepNumber === 9)
    {
      return 'Match nul !';
    }
    else
    {
      return `${xIsNext ? player1 : player2}, à vous de jouer.`;
    }
  };

  const restart = () => {
    // TODO : if the game is not finished
    //  - increase the number of games won for the player who hasn't abandoned his soul

    // TODO : invert the players positions

    dispatch(jumpTo(0));
  };

  const status = getStatus();

  if(player1 == null || player2 == null)
  {
    document.location = '/#/';
    document.location.reload();
    return;
  }

  return (
    <div>
      <NavBar />
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          {status}
          <button onClick={restart}>
            Abandonner son âme
          </button>
        </div>
      </div>
    </div>
  );
};

export { Game };
