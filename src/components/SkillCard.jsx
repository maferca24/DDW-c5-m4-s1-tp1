export default function SkillCard({ name, level, isFavorite }) {
  return (
    /* Card blanca con borde suave y sombra sobre el fondo blanco */
    <div className="p-4 border border-slate-200 bg-white rounded-xl shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg text-text-dark">{name}</h3>
        <p className="text-sm text-text-muted">Nivel: {level}</p>
      </div>
      
      {isFavorite && (
        <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-bold rounded-full">
          ★ Favorita
        </span>
      )}
    </div>
  );
}