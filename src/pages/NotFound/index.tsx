import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-slate-50 text-8xl">NOT FOUND</h1>
      <Link to="/" className="text-slate-50 underline pt-6">
        Ir para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
