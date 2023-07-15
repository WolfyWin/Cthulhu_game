import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Board } from './Board'
import {NavBar} from './NavBar'
import {jumpTo} from '../store/actions/jumpTo'
import {makeMove} from '../store/actions/makeMove'
import {calculateWinner} from '../store/actions/calculateWinner'

const Game = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { history, stepNumber, xIsNext, player1, player2 } = useSelector(
    (state) => state
  );
  const squares = history[stepNumber].squares;

  useEffect(() => {
    if (!player1 || !player2) navigate('/');
  }, [player1, player2, navigate]);

  const handleClick = (i) => {
    const current = history[stepNumber];
    const squaresCopy = [...current.squares];
    const winner = calculateWinner(squaresCopy).payload;
    if (winner || squaresCopy[i]) return;
    dispatch(makeMove(i, xIsNext));
  };

  const getStatus = () => {
    const winner = calculateWinner(squares).payload;
    const winnerPlayer = winner ? (winner.winner === 'X' ? player1 : player2) : null;

    if (winnerPlayer) {
      fetch(`/api/players/${winnerPlayer}/victory`, { method: 'POST' });
      return `${winnerPlayer} a gagné !`;
    } else if (stepNumber === 9) {
      return 'Match nul !';
    } else {
      return `${xIsNext ? player1 : player2}, à vous de jouer.`;
    }
  };

  const restart = async () => {
    await fetch('/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player1, player2 }),
    })

    dispatch(jumpTo(0))
  }

  const status = getStatus()

  return (
    <>
      <NavBar />
        <div className="grid text-center game">
          <div className="g-col-6 game-info mb-5">
              {status}
            <button onClick={restart}>Abandonner son âme</button>
          </div>
          <Board squares={squares} onClick={handleClick} />
        </div>
    </>
  )
}

export { Game }
