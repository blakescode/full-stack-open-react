import React, { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const setToValue = (newValue) => () => {
    setLeft(newValue)
  }

  return (
    <div>
      {left}
      <button onClick={setToValue(1000)}>Thousand</button>
      <button onClick={setToValue(0)}>Zero</button>
      <Button 
        handleClick={handleLeftClick}
        text='Left'
      />
      <Button
        handleClick={handleRightClick}
        text='Right'
      />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App
