import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { botaoClicadoRequest } from '../redux/slice';

function Home() {
  const test = useSelector((state: any) => state.botaoClicado);
  const dispatch = useDispatch();
  function handleButtonClick() {
    dispatch(botaoClicadoRequest());
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
      <h1 className="text-slate-50 text-8xl">Welcome to my Home Page!</h1>
      <p className="text-slate-50 pt-9">
        This is a simple example of a Home component created in React.
      </p>
      <Link to="/login" className="text-slate-50 underline pt-6">
        Login
      </Link>
      <button
        type="button"
        onClick={handleButtonClick}
        className="bg-white text-black font-semibold px-4 py-1 rounded mt-4 hover:bg-slate-400 transition ease-in-out duration-150"
      >
        Botão
      </button>
      <p className="text-slate-50 pt-9">{test ? 'Clicado' : 'Não clicado'}</p>
    </div>
  );
}

export default Home;
