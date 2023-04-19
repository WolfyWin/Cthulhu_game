import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Board }from './Board'
import {makeMove} from '../store/actions/makeMove'
import {calculateWinner} from '../store/actions/calculateWinner'
import {jumpTo} from '../store/actions/jumpTo'

const Game = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);
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
    if (winner) {
      return winner.winner === 'X'
        ? 'Le Mortel a sauvé son âme !'
        : 'Le grand Cthulhu vous a englouti !';
    } else if (stepNumber === 9) {
      return 'Match nul !';
    } else {
      return `${xIsNext ? 'Mortel' : 'Cthulhu'}, à vous de jouer.`;
    }
  };

  const restart = () => {
    dispatch(jumpTo(0));
  };

  const status = getStatus();

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        {status}
        <button onClick={restart}>Remettre son âme en jeu</button>
      </div>
    </div>
  );
};


Game.propTypes = {
  history: PropTypes.array.isRequired,
  stepNumber: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
};

export { Game };
