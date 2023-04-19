import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  var i = 9;

  const startCountdown = () => {
    const element = document.getElementById('start-btn');
    element.style.display = 'none';
    const intervalId = setInterval(() => {
      if (i === 9) {
        const sec = document.getElementById('timer');
        sec.style.margin = '50px';
        sec.style.fontSize = "50pt"
      }

      if (i === 0) {
        // 
        const element = document.getElementById('timer');
        element.style.display = 'none';

        const element2 = document.getElementById('haire');
        element2.style.display = 'block';

        const element3 = document.getElementById('kl');
        element3.style.display = 'none';

        // document.querySelector("#timer").innerHTML = ``
      } else {
        document.querySelector("#timer").innerHTML = `${i}`
        i--
      }
    }, 1000);
  }

  return (
    <div className="App">
      <center> <h3 id='head'>USWA MAGAZINE LAUNCH 2021</h3> </center>
      <div className="container justify-content-center">
        <h1 id='kl'> We are launching our magazine in </h1>
        <h2 id="timer">{count}</h2>
        <center>
          <a href="https://heyzine.com/flip-book/4126aedaf9.html" target="_blank"> <button id='haire' className='btn btn-light'>Launch Now</button> </a>
        </center>
        <button id="start-btn" onClick={startCountdown}>Start</button>
      </div>
    </div>
  )
}

export default App
