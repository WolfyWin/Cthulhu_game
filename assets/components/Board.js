import React from 'react'
import PropTypes from 'prop-types'
import {Square} from './Square'
import { isWinningSquare } from '../store/selectors/selectors'

export class Board extends React.Component {
  static propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired,
  };

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={"square " + isWinningSquare(this.props.squares, i)}
      />
    );
  }
  render() {
    return (
      <div className="g-col-6 game-board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
