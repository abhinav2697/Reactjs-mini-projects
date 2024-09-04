import React, { useState, useEffect } from 'react'
import "./style.css"

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");


    function Square({ value, onClick }) {
        return (
            <button onClick={onClick} className='square'>
                {value}
            </button>
        )
    }

    function handleClick(getCurrentSquare) {
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    
  return (
      <div className='tic-tac-toe-container'>
          <div className='row'>
              <Square value={squares[0]} onClick={()=>handleClick(0)}/>
          </div>
          <h1>TicTacToe</h1>
      
      </div>
  )
}

export default TicTacToe