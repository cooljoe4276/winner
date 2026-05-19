import { useEffect, useState } from "react";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board) {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(Boolean)) {
    return "draw";
  }

  return null;
}

function findCriticalMove(board, symbol) {
  for (const [a, b, c] of WINNING_LINES) {
    const line = [board[a], board[b], board[c]];
    const symbolCount = line.filter((cell) => cell === symbol).length;
    const emptyIndexes = [a, b, c].filter((index) => !board[index]);

    if (symbolCount === 2 && emptyIndexes.length === 1) {
      return emptyIndexes[0];
    }
  }

  return null;
}

function chooseComputerMove(board) {
  const winningMove = findCriticalMove(board, "O");
  if (winningMove !== null) {
    return winningMove;
  }

  const blockingMove = findCriticalMove(board, "X");
  if (blockingMove !== null) {
    return blockingMove;
  }

  if (!board[4]) {
    return 4;
  }

  const preferredMoves = [0, 2, 6, 8, 1, 3, 5, 7];
  return preferredMoves.find((index) => !board[index]) ?? null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [mode, setMode] = useState("computer");
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [score, setScore] = useState({ x: 0, o: 0, draws: 0 });

  const result = getWinner(board);

  useEffect(() => {
    if (mode !== "computer" || result || !isComputerTurn) {
      return;
    }

    const timer = window.setTimeout(() => {
      setBoard((currentBoard) => {
        const move = chooseComputerMove(currentBoard);
        if (move === null) {
          return currentBoard;
        }

        const updatedBoard = [...currentBoard];
        updatedBoard[move] = "O";
        return updatedBoard;
      });
      setIsComputerTurn(false);
      setCurrentPlayer("X");
    }, 500);

    return () => window.clearTimeout(timer);
  }, [isComputerTurn, mode, result]);

  useEffect(() => {
    if (!result) {
      return;
    }

    setScore((currentScore) => {
      if (result === "X") {
        return { ...currentScore, x: currentScore.x + 1 };
      }

      if (result === "O") {
        return { ...currentScore, o: currentScore.o + 1 };
      }

      return { ...currentScore, draws: currentScore.draws + 1 };
    });
  }, [result]);

  const handleCellClick = (index) => {
    if (board[index] || result || isComputerTurn) {
      return;
    }

    setBoard((currentBoard) => {
      const updatedBoard = [...currentBoard];
      updatedBoard[index] = currentPlayer;
      return updatedBoard;
    });

    if (mode === "computer") {
      setCurrentPlayer("O");
      setIsComputerTurn(true);
      return;
    }

    setCurrentPlayer((player) => (player === "X" ? "O" : "X"));
  };

  const handleResetRound = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsComputerTurn(false);
  };

  const handleResetScore = () => {
    setScore({ x: 0, o: 0, draws: 0 });
    handleResetRound();
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setScore({ x: 0, o: 0, draws: 0 });
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsComputerTurn(false);
  };

  const statusText = result
    ? result === "draw"
      ? "Round drawn. Start another one."
      : result === "X"
        ? mode === "computer"
          ? "You won this round."
          : "Player X won this round."
        : mode === "computer"
          ? "Computer wins this round."
          : "Player O won this round."
    : isComputerTurn
      ? "Computer is thinking..."
      : mode === "computer"
        ? `Your turn. You are ${currentPlayer}.`
        : `Player ${currentPlayer}'s turn.`;

  const titleText =
    mode === "computer" ? "Play against the computer" : "Play with two players";

  return (
    <div className="os-game-shell">
      <div className="os-game-header">
        <div>
          <p className="os-card-label">X / O Arena</p>
          <h3 className="os-card-title">{titleText}</h3>
        </div>
        <p className="os-copy os-game-status">{statusText}</p>
      </div>

      <div className="os-game-layout">
        <div className="os-game-board">
          {board.map((value, index) => (
            <button
              key={index}
              type="button"
              className="os-game-cell"
              onClick={() => handleCellClick(index)}
              aria-label={`Cell ${index + 1}`}
            >
              <span className={value === "X" ? "os-game-x" : "os-game-o"}>
                {value}
              </span>
            </button>
          ))}
        </div>

        <div className="os-game-panel">
          <div className="os-mode-switch" role="tablist" aria-label="Game mode">
            <button
              type="button"
              className={mode === "computer" ? "os-mode-pill is-active" : "os-mode-pill"}
              onClick={() => handleModeChange("computer")}
            >
              Vs Computer
            </button>
            <button
              type="button"
              className={mode === "players" ? "os-mode-pill is-active" : "os-mode-pill"}
              onClick={() => handleModeChange("players")}
            >
              Two Players
            </button>
          </div>

          <div className="os-score-grid">
            <div className="os-score-card">
              <span>{mode === "computer" ? "Player X" : "Player X"}</span>
              <strong>{score.x}</strong>
            </div>
            <div className="os-score-card">
              <span>{mode === "computer" ? "Computer O" : "Player O"}</span>
              <strong>{score.o}</strong>
            </div>
            <div className="os-score-card">
              <span>Draws</span>
              <strong>{score.draws}</strong>
            </div>
          </div>

          <div className="os-content-card os-game-copy">
            <p>
              This mini-game is part of the workstation experience. It shows
              interaction design, local state handling, and a little product
              personality inside the portfolio.
            </p>
            <p>
              Switch between a computer match and a two-player round on the same
              screen. The computer blocks obvious wins, while two-player mode is
              perfect for quick local competition.
            </p>
          </div>

          <div className="os-button-row">
            <button
              type="button"
              className="os-button os-button-primary"
              onClick={handleResetRound}
            >
              New Round
            </button>
            <button
              type="button"
              className="os-button os-button-secondary"
              onClick={handleResetScore}
            >
              Reset Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
