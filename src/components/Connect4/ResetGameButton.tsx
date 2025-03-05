import { useConnect4 } from "../../hooks/useConnect4"


 
const ResetGameButton: React.FC = () => {
  const {onResetGame} = useConnect4()
  return (
    <div>
      <button className="resetGame" onClick={onResetGame}>Reset Game</button>
    </div>
  )
}

export default ResetGameButton