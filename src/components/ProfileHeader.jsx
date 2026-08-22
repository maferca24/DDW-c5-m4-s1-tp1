export default function ProfileHeader({ name, phrase, photo }) {
  const handleAlgo = () => {
    alert(`¡Hola! Gracias por visitar el perfil de ${name}`);
  };

  return (
    <header className="flex flex-col items-center gap-4 text-center my-8">
      {/* Etiqueta <img> usando la prop photo en src */}
      {photo && (
        <img 
          src={photo} 
          alt={`Foto de perfil de ${name}`} 
          className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-slate-200"
        />
      )}

      <h1 className="text-4xl font-bold text-slate-800">{name}</h1>
      <p className="text-lg text-slate-600 max-w-md">{phrase}</p>
      
      <button 
        onClick={handleAlgo}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Contactar / Saludar
      </button>
    </header>
  );
}