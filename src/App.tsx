import './App.css'
import Connect4 from './components/Connect4/Board'
import Connect4Provider from './components/Connect4/Connect4Provider'

function App() {
  return (
    <>
    <Connect4Provider>
        <div className="games">
            <Connect4 />
        </div>
    </Connect4Provider>
 
    </>
  )
}

export default App
