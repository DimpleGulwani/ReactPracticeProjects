import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
const RollDice = ({rollDice,currentDice}) => {


  return (
    <DiceContainer>
        <div className='dice'
        onClick={rollDice}>
            <img src={`/images/Dices/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer=styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}

`