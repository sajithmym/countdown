import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  var i = 9;

  const startCountdown = () => {
    const intervalId = setInterval(() => {
      if (i === 9) {
        const element = document.getElementById('start-btn');
        element.style.display = 'none';
      }

      if (i === 0) {
        document.querySelector("#timer").innerHTML = `<a id='j' href="https://heyzine.com/flip-book/4126aedaf9.html" target="_blank"> Launch </a>`
      } else {
        document.querySelector("#timer").innerHTML = `${i}`
        i--
      }
    }, 1000);
  }

  return (
    <div className="App">
      <div className="container justify-content-center">
        <h1> We are launching our magazine in </h1>
        <h2 id="timer">{count}</h2>
        <button id="start-btn" onClick={startCountdown}>Start</button>
      </div>
    </div>
  )
}

export default App
