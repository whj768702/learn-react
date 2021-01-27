import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i, r, c) {
    return (
      <Square
        key={(r, c)}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i, r, c)}
      />
    );
  }

  renderRow(r) {
    const rowData = [];
    const offset = (r - 1) * 3;
    for (let c = 1; c <= 3; c++) {
      rowData.push(this.renderSquare(offset + c - 1, r, c));
    }
    return (
      <div className="board-row" key={r}>
        {rowData}
      </div>
    );
  }

  render() {
    const rows = [];
    for (let r = 1; r <= 3; r++) {
      rows.push(this.renderRow(r));
    }
    return <div>{rows}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          currentColumn: undefined,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i, x, y) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          y: y,
          x: x,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((value, index) => {
      const desc = index ? `go to move #${index} (${value.x} : ${value.y})` : 'go to game start';
      let active;
      if (index === this.state.stepNumber) {
        active = 'active';
      } else {
        active = '';
      }
      return (
        <li key={index} className={active}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner && this.state.stepNumber <= 9) {
      status = `Winner: ${winner}`;
    } else if (this.state.stepNumber < 9) {
      status = `next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    } else if (this.state.stepNumber === 9) {
      status = 'no one win';
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i, x, y) => this.handleClick(i, x, y)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
