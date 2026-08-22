export default function ProfileHeader({ name, phrase, photo }) {
  const handleAlgo = () => {
    alert(`¡Hola! Gracias por visitar el perfil de ${name}`);
  };

  return (
    <header className="">
      {/* Agrego etiqueta <img> usando la prop photo en src */}
      {photo && (
        <img 
          src={photo} 
          alt={`Foto de perfil de ${name}`} 
          className=""
        />
      )}

      <h1 className="">{name}</h1>
      <p className="">{phrase}</p>
      
      <button 
        onClick={handleAlgo}
        className=""
      >
        Contactar / Saludar
      </button>
    </header>
  );
}