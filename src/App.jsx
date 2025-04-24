import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const handleClick = () => {
    setMessage("Mis primeros pasos en ReactJS");
    setMostrar(true);
  };

  return (
    <>
      <h1>ReactJS - Clase 1</h1>

      <div className="container">
        <button className="btn" onClick={() => handleClick()}>Mostrar mensaje</button>
        {mostrar && <p>{message}</p>}
      </div>
      <p className="info">
        Talento Tech - ReactJS - Clase 1 - Primeros pasos
      </p>
    </>
  )
}

export default App
