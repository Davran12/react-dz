import React, {useState, useEffect} from "react"

function App() {
  const [time, setTime] = useState(10)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timerId

    if (isActive && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }

    if (time === 0) {
      setIsActive(false)
      console.log("Таймер завершён!")
    }

    return () => clearInterval(timerId)
  }, [isActive, time])

  const startTimer = () => {
    setIsActive(true)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(10)
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>{time}</h1>
      <button onClick={startTimer} disabled={isActive}>
        Старт
      </button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  )
}

export default App
