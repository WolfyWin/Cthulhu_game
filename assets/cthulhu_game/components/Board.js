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
    const squares = this.props.squares.map((square, i) => (
      <Square
        key={i}
        value={square}
        onClick={() => this.props.onClick(i)}
        className={"square " + isWinningSquare(this.props.squares, i)}
      />
    ));
    const rows = [];
    for (let i = 0; i < 3; i++) {
      rows.push(
        <div key={i} className="board-row">
          {squares.slice(i * 3, i * 3 + 3)}
        </div>
      );
    }
    return <div>{rows}</div>;
  }
}
