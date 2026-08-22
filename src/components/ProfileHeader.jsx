export default function ProfileHeader({ name, phrase, photo }) {

  const handleClick = () => {
    alert(`¡Hola! Gracias por visitar el perfil de ${name}`);
  };

  return (
    <header >
      <h1 >{name}</h1>
      <p >{phrase}</p>
     <p> {photo} </p>
      <button 
        onClick={handleClick}
        className=""
      >
        Contactar / Saludar
      </button>
    </header>
  );
}