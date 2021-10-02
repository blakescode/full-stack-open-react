
import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const TotalClicks = () => {
    return good + neutral + bad
  }

  const CalculateAverage = () => {
    const total = TotalClicks()
    return (good - bad) / total || 0
  }

  const CalculatePositivePercent = () => {
    const total = TotalClicks()
    const value = (good / total) * 100 || 0
    return value + '%'
  }

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
        statText={'good'}
        value={good}
      />
      <Stats
        statText={'neutral'}
        value={neutral}
      />
      <Stats
        statText={'bad'}
        value={bad}
      />
      <Stats
        statText={'all'}
        value={TotalClicks()}
      />
      <Stats
        statText={'average'}
        value={CalculateAverage()}
      />
      <Stats
        statText={'positive'}
        value={CalculatePositivePercent()}
      />
    </div>
  );
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({ statText, value }) => <p>{statText} {value}</p>


export default App;
