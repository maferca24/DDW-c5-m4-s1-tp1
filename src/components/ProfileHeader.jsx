export default function ProfileHeader({ name, phrase, photo }) {
  const handleAlgo = () => {
    alert(`¡Hola! Gracias por visitar el perfil de ${name}`);
  };

  return (
    <header className="flex flex-col items-center gap-4 text-center my-8">
      {photo && (
        <img 
          src={photo} 
          alt={`Foto de perfil de ${name}`} 
          className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-primary"
        />
      )}

      <h1 className="text-4xl font-bold text-text-dark">{name}</h1>
      <p className="text-lg text-text-muted max-w-md">{phrase}</p>
      
      <button 
        onClick={handleAlgo}
        className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
      >
        Contactar / Saludar
      </button>
    </header>
  );
}