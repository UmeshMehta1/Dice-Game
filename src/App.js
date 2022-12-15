import './App.css';
import { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const Number = [1, 2, 3, 4, 5, 6];

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const getRandomNo = () => {
    if (selectedNumber) {
      const getRandomNo = Math.ceil(Math.random() * 6);
      setDice(getRandomNo);

      if (selectedNumber === getRandomNo) {
        setScore((prev) => prev + 5);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError('Please Select A Number');
    }
  };

  const onNumberClicked = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

  const onResetHandaler = () => {
    setScore(0);
  };
  return (
    <>
      {gameStarted ? (
        <>
          <div className='previous'>
            {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
          </div>
          <div className='topContainer'>
            <header style={{ color: error ? 'red' : 'black' }}>
              <h1>{error ? error : 'Select Number'}</h1>
            </header>
            <section>
              <div className='topMap'>
                {Number.map((value) => (
                  <div
                    className='inMap'
                    style={{
                      backgroundColor:
                        selectedNumber === value ? 'green' : 'black',
                    }}
                    key={value}
                    onClick={() => onNumberClicked(value)}>
                    {value}
                  </div>
                ))}
              </div>
            </section>

            <div className='dice' onClick={getRandomNo}>
              <img src={`./images/dice/dice${dice}.png`} alt='' />
            </div>

            <div className='para'>
              <p>Click on dice to roll</p>
            </div>

            <div
              className='score'
              style={{ color: score >= 0 ? 'green' : 'red' }}>
              {score}
            </div>
            <div className='totalScore'>Total Score</div>
            <button className='resetBtn' onClick={onResetHandaler}>
              Reset Score
            </button>
          </div>
          <div className='rules'>
            <h1>Game Rules:-</h1>
            <p>1) Select Number any number.</p>
            <p>2) Click on dice image to roll it.</p>
            <p>
              3) Select number is equal to obtained dice result then you will
              get same point of dice.
            </p>
            <p>4) if You are Wrong Score will be Increased by 5 points.</p>
            <p>4) if You are Wrong Score will be reducted by 2 points.</p>
          </div>
          <Footer />
        </>
      ) : (
        <div className='container'>
          <div className='image'>
            <img src='./images/dices.png' alt='' />
          </div>

          <div className='header'>
            <h1>The Dice Game</h1>
            <button onClick={startGameHandler}>Start Game</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
