import React                      from "react";
import {useDispatch, useSelector} from "react-redux";
import {jumpTo}                   from "../store/actions/jumpTo";
import {calculateWinner}          from "../store/actions/calculateWinner";

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);
  const stepNumber = useSelector((state) => state.stepNumber);
  const xIsNext = useSelector((state) => state.xIsNext);

  const moves = history.map((step, move) => {
    const desc = move ? `Tour #${move}` : 'Remettre son âme en jeu';
    return (
      <li key={move}>
        <button onClick={() => dispatch(jumpTo(move))}>{desc}</button>
      </li>
    );
  });
  const getStatus = () => {
    const current = history[stepNumber];
    const squares = current.squares;
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

  const status = getStatus();

  return (
        <div className="game">
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
  );
};

export { History };
