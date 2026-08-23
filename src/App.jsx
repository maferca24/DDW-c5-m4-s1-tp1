import ProfileHeader from './components/ProfileHeader';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';

import avatarImg from './assets/avatar_mfc.png';

function App() {
  const name = "Maria Fernanda"; 
  const phrase = "Hola, soy " + name + " y estoy comenzando en este mundo fascinante del desarrollo web";
  const photo = avatarImg; 

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <main className="container mx-auto px-4 py-8">
        <ProfileHeader name={name} phrase={phrase} photo={photo} />
        <SkillsList />
      </main>
      <Footer author={name} />
    </div>
  );
}

export default App;