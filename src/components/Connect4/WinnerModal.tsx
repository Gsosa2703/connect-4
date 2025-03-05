

import { useConnect4 } from "../../hooks/useConnect4";
import ResetGameButton from "./ResetGameButton";

const WinnerModal: React.FC = () => {
 const {winner} = useConnect4()
 
 if (!winner) return null;
 return (
  <div className="winner-modal">
   <div> 
     <h2 className="congratulations">Contratulations! {winner} </h2>
     <p className="you-wone">You have won </p>
     <ResetGameButton/>
    </div>
  </div>
 )

}

export default WinnerModal