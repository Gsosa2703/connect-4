import { ReactNode, useState} from 'react'
import {checkWinner} from '../../utils/connect4'
import {Connect4Context} from '../../context/Connect4Context'

const ROWS = 6;
const COLS = 7;

const PLAYER_1 = 1;
const PLAYER_2 = 2;

function Connect4Provider({children}: {children: ReactNode}) {
 const [board, setBoard] = useState<number[][]>(() =>
   Array.from({ length: ROWS }, () => Array(COLS).fill(0))
 );

 const [rowTracker, setRowTracker] = useState(() => {
   const map = new Map<number, number>();
   for (let col = 0; col < COLS; col++) {
     map.set(col, ROWS - 1); // 5 if zero-based indexing
   }
   return map;
 });
 
 const [winner, setWinner] = useState<number | null>(null)
 
 
 // Start with Player 1
 const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

 const play = (col: number) => {

 if(winner) {
  return;
 }

  const row = rowTracker.get(col);
  if (row === undefined || row < 0) {
    // Column is already full
    return;
  }
  // Clone the board so we can update it
  const newBoard = board.map((rows) => [...rows]);

  // Place the current player's token in the lowest available row in this column
  newBoard[row][col] = currentPlayer;

  // Update state
  setBoard(newBoard);

  const {horizontals, verticals, diagonalsa, diagonalsb} = checkWinner(newBoard, row, col);

  const check4Rows = (array: number[], player: number) => {
    let countWinner = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === player && array[i] === array[i + 1]) {
        countWinner++;
      }
    }
    return countWinner === 3 ? true : false;

  }

  const winnerChecked = check4Rows(horizontals, currentPlayer) || 
                  check4Rows(verticals, currentPlayer) || check4Rows(diagonalsa, currentPlayer) || check4Rows(diagonalsb, currentPlayer)

  if(winnerChecked){
   setWinner(currentPlayer)
  }

  // Decrement the rowTracker for this column (that slot is now taken)
  const newRowTracker = new Map(rowTracker);
  newRowTracker.set(col, row - 1);
  setRowTracker(newRowTracker);

  // Switch player
  setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

}
const onResetGame =  () => {

 setBoard(() =>   Array.from({ length: ROWS }, () => Array(COLS).fill(0)))

 setRowTracker(() => {
   const map = new Map<number, number>();
   for (let col = 0; col < COLS; col++) {
     map.set(col, ROWS - 1); // 5 if zero-based indexing
   }
   return map;
 })

 setWinner(0)
}

const value = {onResetGame, play, winner, currentPlayer, board}

return <Connect4Context value={value}> {children}</Connect4Context>

}

export default Connect4Provider