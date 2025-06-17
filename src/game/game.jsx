import React from "react";

// Square组件保持不变
function Square(props) {
  return (
    <button type="button" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// Board转换为函数组件
function Board({ squares, onClick }) {
  const renderSquare = (i, r, c) => {
    return (
      <Square
        key={`${r}-${c}`}
        value={squares[i]}
        onClick={() => onClick(i, r, c)}
      />
    );
  };

  const renderRow = (r) => {
    const rowData = [];
    const offset = (r - 1) * 3;
    for (let c = 1; c <= 3; c++) {
      rowData.push(renderSquare(offset + c - 1, r, c));
    }
    return (
      <div className="board-row" key={r}>
        {rowData}
      </div>
    );
  };

  const rows = [];
  for (let r = 1; r <= 3; r++) {
    rows.push(renderRow(r));
  }
  return <div>{rows}</div>;
}

// Game主组件转换为函数组件
function Game() {
  const [history, setHistory] = React.useState([
    {
      squares: Array(9).fill(null),
      x: undefined,
      y: undefined,
    },
  ]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXIsNext] = React.useState(true);

  const handleClick = (i, x, y) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([{ squares, x, y }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // 状态显示逻辑保持不变
  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move} (${step.x} : ${step.y})`
      : "Go to game start";
    return (
      <li key={move}>
        <button
          type="button"
          className={move === stepNumber ? "active" : ""}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (stepNumber === 9) {
    status = "No one wins";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// calculateWinner函数保持不变
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
