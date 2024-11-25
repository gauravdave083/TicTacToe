import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    // Winning combinations based on board indices
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    // Function to check for a winner
    const checkWinner = (newState) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (newState[a] && newState[a] === newState[b] && newState[a] === newState[c]) {
                return newState[a]; // Return the winner ('X' or 'O')
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (state[index] || winner) return; // Prevent click if cell is already filled or there's a winner

        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);

        const currentWinner = checkWinner(copyState);
        if (currentWinner) {
            setWinner(currentWinner);
            console.log(`${currentWinner} wins!`);
        }
    };

    return (
        <div className="board-container">
            <div className='board-row'>
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className='board-row'>
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className='board-row'>
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
            {winner && <div className="winner">Winner: {winner}</div>}
        </div>
    );
}

export default Board;
