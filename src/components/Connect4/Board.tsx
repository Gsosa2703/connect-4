 
import Token from './Token'
import WinnerModal from './WinnerModal';
import ResetGameButton from './ResetGameButton';
import { useConnect4 } from '../../hooks/useConnect4';


const PLAYER_1 = 1;
const PLAYER_2 = 2;

const COLOR_PLAYER_1 = '#ff5674';
const COLOR_PLAYER_2 = 'yellow';

// const local_storage_key  = 'connect-4'

const Board = () => {
const {play, currentPlayer, board} = useConnect4()

// Handle a click in a specific column
const handleColumnClick = (col: number) => {
  play(col)
};

const playerColor = currentPlayer === PLAYER_1 ? COLOR_PLAYER_1 : COLOR_PLAYER_2;
 
 return (
  <section className='board-container'>
        <h3 className='title-game'>Connect4</h3>
        <div className='header-board'>
            <div className='current-player'>
                <strong>Your turn:{currentPlayer}</strong>
                  <Token value={0} color={playerColor} onClick={() => {}}/>
              </div>
            <ResetGameButton/>
        </div>
        <div className='board'>
            {board.map((rowArray, rowIndex) => (
              <div key={rowIndex} className='rows' >

                  { rowArray.map((cellValue, colIndex) => {

                    let backgroundColor = 'black';
                    if (cellValue === PLAYER_1) backgroundColor = COLOR_PLAYER_1;
                    else if (cellValue === PLAYER_2) backgroundColor = COLOR_PLAYER_2;

                    return  <Token
                            key={colIndex}
                            value={colIndex}
                            color={backgroundColor}
                            onClick={() => handleColumnClick(colIndex)}
                            />
                          })}
              </div>
            ))}
            <WinnerModal/> 
      </div>
  </section>

 )
}

export default Board