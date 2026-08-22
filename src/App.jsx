import ProfileHeader from './components/ProfileHeader';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';

//importo imagen
import avatarImg from './assets/avatar_mfc.png';

function App() {
  const name = "Maria Fernanda"; 
  const phrase = "Hola, soy " + name + " y estoy comenzando en este mundo fascinante del desarrollo web";
  
  const photo = avatarImg; 

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
