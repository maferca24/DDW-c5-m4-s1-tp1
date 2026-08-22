export default function SkillCard({ name, level, isFavorite }) {
  return (
    <div className="p-4 border border-slate-200 rounded-xl ">
      <div>
        <h3>{name}</h3>
        <p >Nivel: {level}</p>
      </div>
      {/* Muestra el badge solo si isFavorite es true */}
      {isFavorite && (
        <span >
          ★ Favorita
        </span>
      )}
    </div>
  );
}