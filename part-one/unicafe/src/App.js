
import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />
      <h1>statistics</h1>
      <Stats
        feedbackType={'good'}
        value={good}
      />
      <Stats
        feedbackType={'neutral'}
        value={neutral}
      />
      <Stats
        feedbackType={'bad'}
        value={bad}
      />
    </div>
  );
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({ feedbackType, value }) => <p>{feedbackType} {value}</p>

export default App;
