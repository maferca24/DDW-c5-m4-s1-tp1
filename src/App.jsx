import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import SkillsList from './components/SkillsList';

function App() {
  const name = "María Fernanda"; // 
  const phrase = "Hola, soy " + name + " y estoy comenzando en este mundo fascinante del desarrollo web"; //
  const avatar = "/src/assets/avatar_mfc.png"; //

  return (
    <>
    <Header>
    </Header>
      <h1>{phrase}</h1>
      <img src={avatar} alt="Avatar de Fernanda" />
      <p>Este es mi primer trabajo práctico de React</p>
      <SkillsList/>
      <Footer author={name} />

    </>
  )
}

export default App
