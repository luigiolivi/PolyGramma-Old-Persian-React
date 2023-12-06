import { useState } from "react";

import { Container, ChallengeLetter, ScoreP, ButtonsOptions } from "./styles";

const letters = [
  { a: "𐎠" },
  { i: "𐎡" },
  { u: "𐎢" },
  { k: "𐎣" },
  { ku: "𐎤" },
  { x: "𐎧" },
  { g: "𐎥" },
  { gu: "𐎦" },
  { c: "𐎨" },
  { ç: "𐏂" },
  { j: "𐎩" },
  { ji: "𐎪" },
  { t: "𐎫" },
  { tu: "𐎬" },
  { th: "𐎰" },
  { d: "𐎭" },
  { di: "𐎮" },
  { du: "𐎯" },
  { p: "𐎱" },
  { f: "𐎳" },
  { b: "𐎲" },
  { n: "𐎴" },
  { nu: "𐎵" },
  { m: "𐎶" },
  { mi: "𐎷" },
  { mu: "𐎸" },
  { y: "𐎹" },
  { v: "𐎺" },
  { vi: "𐎻" },
  { r: "𐎼" },
  { ru: "𐎽" },
  { l: "𐎾" },
  { s: "𐎿" },
  { z: "𐏀" },
  { š: "𐏁" },
  { h: "𐏃" }
]



const App = () => {

    const generateRandomIndex = () => {
      const random = Math.floor(Math.random() * 36)
  
      return random
    }
  
    const getLetterByIndex = (index) => {
      const letter = (Object.values(letters[index]))
  
      return letter.toString().trim()
    }
  
    const getKeyByIndex = (index) => {
      const transliteration = Object.keys(letters[index])
  
      return transliteration.toString().trim()
    }
  
    const correctAnswer = () => {
      setScore(score + 1)
      console.log('correto')
    }
  
    const incorrectAnswer = () => {
      if (score === 0) {

      }
      else setScore(0)
      console.log('incorreto')
    }
  
    let [score, setScore] = useState(0)
  
    const challengeIndex = generateRandomIndex()
    const challengeLetter = getLetterByIndex(challengeIndex)
    const challengeKey = getKeyByIndex(challengeIndex)
  
    console.log(challengeKey)
    let randomCorrectButton = Math.floor(Math.random() * 4)
  
    let options = []
    for (let i = 0; i < 3; i++) {
      while (options[i] == null) {
        let randomKey = getKeyByIndex(generateRandomIndex())
  
        if (randomKey === challengeKey || options.includes(randomKey)) continue
        else options.push(randomKey)
      }
    }
  
    let buttons = []
    for (let i = 0; i < 4; i++) {
      if (i === randomCorrectButton) {
        buttons.push(<ButtonsOptions onClick={correctAnswer} key={i}>{challengeKey}</ButtonsOptions>)
  
        continue
      }
  
      buttons.push(<ButtonsOptions onClick={incorrectAnswer} key={i}>{options.pop()}</ButtonsOptions>)
    }
    
    
    return (
      <Container>
        <ChallengeLetter>{challengeLetter}</ChallengeLetter>
  
        {buttons}
  
        <ScoreP>Score: {score}</ScoreP>
        <ScoreP>Record: 0</ScoreP>
      </Container>
    )
  
  


}


export default App