export default function Footer({ author }) {
  return (
    <footer className="mt-auto py-6 text-center border-t border-slate-200 text-slate-500 text-sm"> 
      <p>Hecho con React por {author}</p>
    </footer>
  );
}

