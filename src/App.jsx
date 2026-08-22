import ProfileHeader from './components/ProfileHeader';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';

function App() {
  const name = "Maria Fernanda"; 
  const phrase = "Hola, soy " + name + " y estoy comenzando en este mundo fascinante del desarrollo web";
  const photo = "/src/assets/avatar_mfc.png"; 

  return (
    <div>
      <main>
        <ProfileHeader name={name} phrase={phrase} photo={photo} />
        <SkillsList/>
      </main>
      <Footer author={name} />
    </div>
  );
}

export default App;
