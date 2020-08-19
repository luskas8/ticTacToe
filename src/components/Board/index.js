import React, { useState } from 'react';

import LineRow from '../LineRow';

import './styles.css';

function Board() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [board, setBoard] = useState([ ["1", "2", "3"], ["4", "5", "6"],["7", "8", "9"] ]);

    function hasWinner(player) {
        if (board[0][0] === player) {
            if (board[0][0] === board[1][1] && board[0][0] === board[2][2] ||
                board[0][2] === board[1][1] && board[0][2] === board[2][0] ||

                board[0][0] === board[1][0] && board[0][0] === board[2][0] ||
                board[0][1] === board[1][1] && board[0][1] === board[2][1] ||
                board[0][2] === board[1][2] && board[0][2] === board[2][2] ||
                
                board[0][0] === board[0][1] && board[0][0] === board[0][2] ||
                board[1][0] === board[1][1] && board[1][0] === board[1][2] ||
                board[2][0] === board[2][1] && board[2][0] === board[2][2]   ) return true;
        }
    }

    function hadleBtnClick(e) {
        const newBoard = board.map(item => {
            return item.map((cell, idx, array) => {
                if (e.target.textContent === cell) {
                    return array[idx] = currentPlayer;
                }
                return cell;
            });
        });

        setBoard(newBoard);
        if (hasWinner(currentPlayer)) alert(`${currentPlayer} Winners`);
        setCurrentPlayer((currentPlayer === 'X') ? 'O' : 'X');

        e.target.disabled = true;

    }

    return(
        <div className="container">
            <div className="game-board">
                {
                    board.map((cell, idx,) => {
                        return (
                            <LineRow key={idx} cells={cell} btnClick={hadleBtnClick} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Board;