import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const[score,setScore]=useState(0)
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError]=useState("")
  const[showRules,setShowRules]=useState(false)
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}
const rollDice=()=>{
  if(!selectedNum){
    setError("Ypu have not selected any number")
    return
  }
  setError("")
    const randomNumber=generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)
    if(selectedNum===randomNumber){
      setScore((prev)=>prev+randomNumber)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelectedNum(undefined)
}
const resetScore=()=>{
  setScore(0)
}
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
        error={error}
        setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice rollDice={rollDice} currentDice={currentDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"

      } Rules</Button>
      {showRules && <Rules/>}
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 60px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px

  }
`;
