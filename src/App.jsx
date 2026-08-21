import './App.css'

function App() {
  const name = "Fernanda"; // 
  const phrase = "Hola, soy " + name + " y estoy comenzando en este mundo fascinante del desarrollo web"; //
  const avatar = "/src/assets/avatar_mfc.png"; //
  
  return (
    <>
      <h1>{phrase}</h1>
      <img src={avatar} alt="Avatar de Fernanda" />
      <p>Este es mi primer trabajo práctico de React</p>

    </>
  )
}

export default App
