import './App.css'
import GamePlay from './components/GamePlay'
import { useState } from 'react'
import StartGame from "./components/StartGame"
function App() {
const [isStarted,setIsStarted]=useState(false)
const toggleGamePlay=()=>{
  setIsStarted(prev=>!prev)
}
  return (
  <>
  {isStarted?<GamePlay/>: <StartGame 
  toggle={toggleGamePlay}/>}
 
  </>
  )
}

export default App

 