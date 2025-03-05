

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkWinner(board: any[][], row: number, col: number) {
 
 const horizontals: number[] = []
 const verticals: number[] = []
 const diagonalsa: number[] = []
 const diagonalsb: number[] = []
 
 for (let offset = -3; offset < 4; offset++){
       horizontals.push(board[row][offset + col])
       const verticalValue = board[row - offset]
       verticals.push(verticalValue ? verticalValue[col] : 0)

       const diagonal = board[row - offset]
       diagonalsa.push(diagonal ? diagonal[offset + col] : 0)
       diagonalsb.push(diagonal? diagonal[col - offset ] : 0)
 }

 return {
  horizontals,
  verticals,
  diagonalsa,
  diagonalsb
 }

}