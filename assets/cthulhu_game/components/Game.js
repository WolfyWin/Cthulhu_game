import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Board }from './Board'
import {makeMove} from "../store/actions/makeMove";
import {calculateWinner} from "../store/actions/calculateWinner";

const Game = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);

  const handleClick = (i) => {
    const current = history[stepNumber];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares).payload;
    if (winner || squares[i]) {
      return;
    }
    dispatch(makeMove(i, xIsNext));
  };


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[stepNumber].squares} onClick={(i) => handleClick(i)} />
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
