import { useEffect, useState } from 'react';
import data from './data'
import './App.css';
import SummaryList from './SummaryList';

function App() {
  const [totalScore, setTotalScore] = useState(null)

  useEffect(() => {
    let total = 0
    data.forEach(item => {
      total += item.score
    })
    total /= data.length
    setTotalScore(Math.round(total))
  }, [])

  return (
    <div className="App">
      <div className="container">
        <div className="resultContainer">
          <p className="resultTitle">Your Result</p>
          <div className="scoreContainer">
            {totalScore && <p className="resultScore">{totalScore}</p>}
            {!totalScore && <p className="resultScore">...</p>}
            <p className="resultTotalScore">of 100</p>
          </div>
          <p className="congratulateTitle">Great</p>
          <p className="congratulateDescription">You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className="summaryContainer">
          <p className="summaryTitle">Summary</p>
          <SummaryList />
          <button className="btnContinue">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
