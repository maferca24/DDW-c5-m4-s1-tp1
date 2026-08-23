export default function Footer({ author }) {
  return (
    <footer className="mt-auto py-6 text-center border-t border-slate-800 text-slate-400 text-sm bg-primary">
      <p>Hecho con React por <span className="text-white font-bold">{author}</span></p>
    </footer>
  );
}

