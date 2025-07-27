import React from "react"
import Card from "./Card"

const App = () => {
  return (
    <div style={{padding: "20px"}}>
      <Card
        title="Заголовок карточки"
        footer={
          <>
            <button>Подробнее</button>
            <button>Удалить</button>
          </>
        }
      ></Card>
    </div>
  )
}

export default App
