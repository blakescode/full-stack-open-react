
import React, { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const TotalClicks = () => {
    return good + neutral + bad
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
      {TotalClicks() === 0 &&
        <>
          <p>No feedback given</p>
        </>
      }
      {TotalClicks() > 0 &&
        <>
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalClicks()}
          />
        </>
      }
    </div>
  );
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const { good, bad, neutral, total } = props

  const CalculateAverage = () => {
    return (good - bad) / total || 0
  }

  const CalculatePositivePercent = () => {
    const value = (good / total) * 100 || 0
    return value + '%'
  }

  return (
    <div>
      <StatisticLine
      statText={'good'}
      value={good}
      />
      <StatisticLine
        statText={'neutral'}
        value={neutral}
      />
      <StatisticLine
        statText={'bad'}
        value={bad}
      />
      <StatisticLine
        statText={'all'}
        value={total}
      />
      <StatisticLine
        statText={'average'}
        value={CalculateAverage()}
      />
      <StatisticLine
        statText={'positive'}
        value={CalculatePositivePercent()}
      />
    </div>
  )
}

const StatisticLine = ({ statText, value }) => <p>{statText} {value}</p>

export default App;
