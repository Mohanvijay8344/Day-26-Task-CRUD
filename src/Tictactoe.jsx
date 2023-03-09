import * as React from "react";
import { useState } from "react";

export function Tictactoe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [xTurn, setXTurn] = useState(true);

  const handleClick = (index) => {
    console.log(index);
    const copyboard = [...board]; //copy
    copyboard[index] = xTurn ? "X" : "O"; //set
    setBoard(copyboard); //update
    //toggle turn
    setXTurn(!xTurn);
  };

  const decideWinner = (board) => {
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
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  return (
    <div className="tictac">
      <h1>TicTacToe - Game</h1>
      <div className="board">
        {board.map((map, index) => (
          <Box val={map} onPlayerClick={() => handleClick(index)} key={index} />
        ))}
      </div>
      <p>
        <b>The Winner is: {winner}</b>
      </p>
    </div>
  );
}

function Box({ val, onPlayerClick }) {
  // const [val, setVal] = useState("");
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles} className="box" onClick={onPlayerClick}>
      {val}
    </div>
  );
}
